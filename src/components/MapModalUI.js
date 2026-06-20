import React, { useEffect, useRef } from 'react';

function renderTileMap(canvas, loader, lat, lng, zoom) {
  var wrap = canvas.parentElement;
  var W = wrap.clientWidth || 640;
  var H = wrap.clientHeight || 400;
  canvas.width = W;
  canvas.height = H;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0A1628';
  ctx.fillRect(0, 0, W, H);
  if (loader) {
    loader.style.opacity = '1';
    loader.style.pointerEvents = 'auto';
  }

  function latLngToTile(lat, lng, z) {
    var n = Math.pow(2, z);
    var tx = Math.floor(((lng + 180) / 360) * n);
    var latR = (lat * Math.PI) / 180;
    var ty = Math.floor(((1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2) * n);
    return { x: tx, y: ty };
  }
  function latLngToPixel(lat, lng, z, cLat, cLng, W, H) {
    var n = Math.pow(2, z);
    var toX = function (lo) { return ((lo + 180) / 360) * n * 256; };
    var toY = function (la) {
      var r = (la * Math.PI) / 180;
      return ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * n * 256;
    };
    var cx = toX(cLng), cy = toY(cLat);
    return { x: toX(lng) - cx + W / 2, y: toY(lat) - cy + H / 2 };
  }

  latLngToTile(lat, lng, zoom);
  var tilesX = Math.ceil(W / 256) + 2;
  var tilesY = Math.ceil(H / 256) + 2;
  var n = Math.pow(2, zoom);
  var fTX = ((lng + 180) / 360) * n;
  var latR = (lat * Math.PI) / 180;
  var fTY = ((1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2) * n;
  var offX = (fTX - Math.floor(fTX)) * 256;
  var offY = (fTY - Math.floor(fTY)) * 256;
  var startTX = Math.floor(fTX) - Math.floor(tilesX / 2);
  var startTY = Math.floor(fTY) - Math.floor(tilesY / 2);
  var drawX0 = W / 2 - offX - Math.floor(tilesX / 2) * 256;
  var drawY0 = H / 2 - offY - Math.floor(tilesY / 2) * 256;

  var servers = ['a', 'b', 'c'];
  var total = tilesX * tilesY, loaded = 0, failed = 0;
  function done() {
    if (loaded + failed >= total) {
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(function () { loader.style.pointerEvents = 'none'; }, 300);
      }
      latLngToPixel(lat, lng, zoom, lat, lng, W, H);
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 18, 0, Math.PI * 2);
      var grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, 18);
      grad.addColorStop(0, 'rgba(0,169,157,0.5)');
      grad.addColorStop(1, 'rgba(0,169,157,0)');
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  for (var ix = 0; ix < tilesX; ix++) {
    for (var iy = 0; iy < tilesY; iy++) {
      (function (ix, iy) {
        var tx = startTX + ix;
        var ty = startTY + iy;
        var s = servers[(tx + ty) % 3];
        var url = 'https://' + s + '.tile.openstreetmap.org/' + zoom + '/' + tx + '/' + ty + '.png';
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () { ctx.drawImage(img, drawX0 + ix * 256, drawY0 + iy * 256, 256, 256); loaded++; done(); };
        img.onerror = function () { failed++; done(); };
        img.src = url;
      })(ix, iy);
    }
  }
}

export default function MapModalUI({ state, closeMap }) {
  const canvasRef = useRef(null);
  const loaderRef = useRef(null);
  const { open, name, lat, lng } = state;

  const label = name ? name.replace(/ Gurgaon$/, '') : 'Zone';
  const extHref = name
    ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name)
    : '#';

  useEffect(() => {
    if (open && canvasRef.current && lat != null && lng != null) {
      renderTileMap(canvasRef.current, loaderRef.current, parseFloat(lat), parseFloat(lng), 14);
    } else if (!open && canvasRef.current) {
      var cv = canvasRef.current;
      var ctx = cv.getContext('2d');
      ctx.clearRect(0, 0, cv.width, cv.height);
    }
  }, [open, lat, lng]);

  return (
    <div
      id="mModal"
      className={`mmodal${open ? ' open' : ''}`}
      onClick={(event) => { if (event.target === event.currentTarget) closeMap(); }}
    >
      <div className="mbox">
        <div className="mhdr">
          <div className="mhdr-left">
            <span className="mhdr-dot"></span>
            <div>
              <div className="mhdr-t" id="mTitle">{label}</div>
              <div className="mhdr-sub">Gurgaon NCR · Live Map</div>
            </div>
          </div>
          <button className="mclos" onClick={closeMap} aria-label="Close map">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="mmap-wrap">
          <canvas ref={canvasRef} id="mCanvas" style={{ width: '100%', height: '100%', display: 'block' }}></canvas>
          <div className="mmap-overlay"></div>
          <div className="mmap-pin">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44">
              <ellipse cx="18" cy="42" rx="8" ry="3" fill="rgba(0,0,0,0.30)" />
              <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 26 18 26S36 31.5 36 18C36 8.06 27.94 0 18 0z" fill="#00A99D" />
              <circle cx="18" cy="18" r="8" fill="#fff" opacity=".95" />
              <circle cx="18" cy="18" r="4" fill="#00A99D" />
            </svg>
          </div>
          <div ref={loaderRef} id="mMapLoader" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0A1628', zIndex: 1, transition: 'opacity .3s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A99D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', marginTop: 10 }}>Loading map…</div>
          </div>
        </div>
        <div className="mfooter">
          <span className="mfooter-note">Tap to explore · Scroll to zoom</span>
          <a id="mExtLink" href={extHref} target="_blank" rel="noopener noreferrer" className="mext">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
