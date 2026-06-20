import { useEffect } from 'react';

/*
  Port of the PARALLAX ENGINE IIFE from the original site.
  Runs only on the Home page (queries #page-index DOM hooks already present in Home.js).
*/
export default function useParallax() {
  useEffect(() => {
    const scheduleInit = typeof requestIdleCallback !== 'undefined'
      ? (fn) => requestIdleCallback(fn, { timeout: 2000 })
      : (fn) => setTimeout(fn, 200);

    let cleanup = null;
    let unmounted = false;
    scheduleInit(() => {
      if (!unmounted) cleanup = init();
    });
    return () => {
      unmounted = true;
      if (cleanup) cleanup();
    };
  }, []);
}

function init() {
    var hero = document.querySelector('#page-index .hero');
    if (!hero) return;

    var rafIds = [];
    var cleanups = [];

    var lastY = 0;
    var plxOff = 0;

    /* ── Floating particle canvas ── */
    var cv = document.getElementById('plxCanvas');
    if (cv) {
      var ctx = cv.getContext('2d');
      var pts = [];
      var resizeCv = function () {
        cv.width = hero.offsetWidth;
        cv.height = hero.offsetHeight;
      };
      resizeCv();
      window.addEventListener('resize', resizeCv, { passive: true });
      cleanups.push(function () {
        window.removeEventListener('resize', resizeCv);
      });
      for (var i = 0; i < 55; i++) {
        pts.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.6 + 0.4,
          s: (Math.random() * 0.4 + 0.1) * (Math.random() < 0.5 ? 1 : -1),
          o: Math.random() * 0.5 + 0.15,
          dx: (Math.random() - 0.5) * 0.00015,
          dy: -(Math.random() * 0.0002 + 0.00008),
        });
      }
      var drawParticles = function () {
        var pageEl0 = document.getElementById('page-index');
        if (!pageEl0 || !pageEl0.classList.contains('active')) return;
        ctx.clearRect(0, 0, cv.width, cv.height);
        var W = cv.width,
          H = cv.height;
        pts.forEach(function (p) {
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < -0.01) p.x = 1.01;
          if (p.x > 1.01) p.x = -0.01;
          if (p.y < -0.01) p.y = 1.02;
          var drawY = p.y + plxOff * p.r * 0.00012;
          ctx.beginPath();
          ctx.arc(p.x * W, drawY * H, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0,169,157,' + p.o + ')';
          ctx.fill();
        });
        rafIds.push(requestAnimationFrame(drawParticles));
      };
      drawParticles();
    }

    /* ── Scroll-based parallax ── */
    var orb1 = document.getElementById('plxOrb1');
    var orb2 = document.getElementById('plxOrb2');
    var orb3 = document.getElementById('plxOrb3');
    var heroText = document.querySelector('#page-index .hero-text');
    var tagline = document.getElementById('heroTagline');

    var heroCard = document.querySelector('#page-index .hero-card');
    var sectBgs = document.querySelectorAll('#page-index .plx-sect-bg');

    var pageEl = document.getElementById('page-index');
    var ticking = false;

    function applyParallax() {
      ticking = false;
      var y = lastY;
      plxOff = y;

      if (orb1) orb1.style.transform = 'translateY(' + y * 0.18 + 'px)';
      if (orb2) orb2.style.transform = 'translateY(' + -y * 0.12 + 'px)';
      if (orb3) orb3.style.transform = 'translateY(' + y * 0.24 + 'px) translateX(' + -y * 0.06 + 'px)';

      if (heroText) heroText.style.transform = 'translateY(' + y * 0.1 + 'px)';
      if (heroCard) heroCard.style.transform = 'translateY(' + y * 0.06 + 'px)';

      sectBgs.forEach(function (bg, i) {
        var rect = bg.parentElement.getBoundingClientRect();
        var mid = rect.top + rect.height / 2;
        var vMid = window.innerHeight / 2;
        var off = (vMid - mid) * (i % 2 === 0 ? 0.1 : 0.13);
        bg.style.transform = 'translateY(' + off + 'px)';
      });

      if (tagline) tagline.style.transform = 'translateY(' + lastY * 0.055 + 'px)';
    }

    function onScroll() {
      lastY = (pageEl && pageEl.scrollTop) || window.scrollY;
      if (!ticking) {
        rafIds.push(requestAnimationFrame(applyParallax));
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(function () {
      window.removeEventListener('scroll', onScroll);
    });
    if (pageEl) {
      pageEl.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(function () {
        pageEl.removeEventListener('scroll', onScroll);
      });
    }

    /* ── Mouse parallax on hero ── */
    var onMouseMove = function (e) {
      var rect = hero.getBoundingClientRect();
      var mx = (e.clientX - rect.left) / rect.width - 0.5;
      var my = (e.clientY - rect.top) / rect.height - 0.5;
      if (orb1) orb1.style.transform = 'translate(' + mx * 18 + 'px,' + (lastY * 0.18 + my * 14) + 'px)';
      if (orb2) orb2.style.transform = 'translate(' + -mx * 12 + 'px,' + (-(lastY * 0.12) + my * 10) + 'px)';
      if (orb3) orb3.style.transform = 'translate(' + mx * 24 + 'px,' + (lastY * 0.24 + my * 20) + 'px)';
      if (heroCard) {
        var tiltX = my * 6;
        var tiltY = mx * -6;
        heroCard.style.transform =
          'translateY(' + lastY * 0.06 + 'px) perspective(900px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
      }
    };
    var onMouseLeave = function () {
      if (orb1) orb1.style.transform = 'translateY(' + lastY * 0.18 + 'px)';
      if (orb2) orb2.style.transform = 'translateY(' + -lastY * 0.12 + 'px)';
      if (orb3) orb3.style.transform = 'translateY(' + lastY * 0.24 + 'px)';
      if (heroCard) heroCard.style.transform = 'translateY(' + lastY * 0.06 + 'px)';
    };
    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);
    cleanups.push(function () {
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
    });

    /* ── Count-up + scroll parallax on metric numbers ── */
    function countUp(el, target, duration) {
      var s = Date.now();
      (function tick() {
        var t = Math.min(1, (Date.now() - s) / duration);
        var ease = 1 - Math.pow(1 - t, 4);
        var val = Math.round(ease * target);
        el.textContent = val;
        if (t < 1) rafIds.push(requestAnimationFrame(tick));
      })();
    }
    var counted = false;
    var countObs = new IntersectionObserver(
      function (entries) {
        if (counted) return;
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          counted = true;
          document.querySelectorAll('#page-index .mcount').forEach(function (el) {
            var target = parseInt(el.dataset.target) || 0;
            var delay = parseInt(el.closest('.metric').dataset.idx || 0) * 120;
            setTimeout(function () {
              countUp(el, target, 1600);
            }, delay);
          });
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll('#page-index .metric').forEach(function (el, i) {
      el.dataset.idx = i;
    });
    var metricsEl = document.querySelector('#page-index .metrics');
    if (metricsEl) countObs.observe(metricsEl);

    return function () {
      rafIds.forEach(function (id) {
        cancelAnimationFrame(id);
      });
      countObs.disconnect();
      cleanups.forEach(function (fn) {
        fn();
      });
    };
}
