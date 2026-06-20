import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterHome } from '../components/Footer';
import { useMapModal } from '../components/MapModal';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/coverage.css';

export default function Coverage() {
  const navigate = useNavigate();
  const nav = (page) => navigate(page === 'index' ? '/' : `/${page}`);
  const { openMap } = useMapModal();
  useRevealOnScroll();

  const MapIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  );

  return (
    <div className="page-section pg active" id="page-coverage">

      {/* Hero */}
      <div className="cv-hero">
        <div className="cv-hero-in">
          <div className="peb r">Where We Operate</div>
          <h1 className="r d1" style={{ fontSize: 'clamp(30px,5.5vw,52px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, marginBottom: 12, letterSpacing: '-.03em', textAlign: 'center' }}>Complete Gurgaon<br /><span style={{ background: 'linear-gradient(90deg,#00A99D,#4ABCF5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Market Coverage</span></h1>
          <p className="r d2" style={{ fontSize: 'clamp(14px,2.2vw,16.5px)', color: 'rgba(255,255,255,.72)', lineHeight: 1.75, maxWidth: 520, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>2,000+ retail touchpoints across 7+ active zones — from DLF Phases to New Gurgaon. Tap any zone to view on the map.</p>
          <div className="cv-stats-row r d3">
            <div className="cv-stat"><div className="cv-stat-n"><span>2000</span>+</div><div className="cv-stat-l">Retail Touchpoints</div></div>
            <div className="cv-stat"><div className="cv-stat-n"><span>7</span>+</div><div className="cv-stat-l">Active Zones</div></div>
            <div className="cv-stat"><div className="cv-stat-n"><span>6</span></div><div className="cv-stat-l">Trade Channels</div></div>
            <div className="cv-stat"><div className="cv-stat-n"><span>NCR</span></div><div className="cv-stat-l">Market Reach</div></div>
          </div>
        </div>
      </div>

      {/* Zones grid */}
      <div className="cv-zones">
        <div className="cv-zones-in">
          <div className="cv-section-label r">Active Coverage Zones</div>
          <h2 className="cv-section-h r d1">7+ Zones Across Gurgaon NCR</h2>
          <p className="cv-section-p r d2">Tap any zone card to see it on the map.</p>
          <div className="cv-zone-grid">
            <button className="cv-zone-card r" onClick={() => openMap('DLF Phases 1–5 Gurgaon', '28.4595', '77.0266')}>
              <div className="cv-zone-top">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                  <span className="cv-zone-dot" style={{ marginTop: 6 }}></span>
                  <span className="cv-zone-name">DLF Phases 1–5</span>
                </div>
                <span className="cv-zone-map"><MapIcon />Map</span>
              </div>
              <span className="cv-zone-tag">Premium Residential</span>
            </button>
            <button className="cv-zone-card r" onClick={() => openMap('Golf Course Road Gurgaon', '28.4421', '77.0888')}>
              <div className="cv-zone-top">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                  <span className="cv-zone-dot" style={{ marginTop: 6 }}></span>
                  <span className="cv-zone-name">Golf Course Road</span>
                </div>
                <span className="cv-zone-map"><MapIcon />Map</span>
              </div>
              <span className="cv-zone-tag">High-Value Corridor</span>
            </button>
            <button className="cv-zone-card r" onClick={() => openMap('Sohna Road Gurgaon', '28.3940', '77.0470')}>
              <div className="cv-zone-top">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                  <span className="cv-zone-dot" style={{ marginTop: 6 }}></span>
                  <span className="cv-zone-name">Sohna Road</span>
                </div>
                <span className="cv-zone-map"><MapIcon />Map</span>
              </div>
              <span className="cv-zone-tag">High-Density Residential</span>
            </button>
            <button className="cv-zone-card r" onClick={() => openMap('Cyber City / Udyog Vihar Gurgaon', '28.4950', '77.0890')}>
              <div className="cv-zone-top">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                  <span className="cv-zone-dot" style={{ marginTop: 6 }}></span>
                  <span className="cv-zone-name">Cyber City / Udyog Vihar</span>
                </div>
                <span className="cv-zone-map"><MapIcon />Map</span>
              </div>
              <span className="cv-zone-tag">Corporate Hub</span>
            </button>
            <button className="cv-zone-card r" onClick={() => openMap('Sector Markets Gurgaon', '28.4601', '77.0214')}>
              <div className="cv-zone-top">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                  <span className="cv-zone-dot" style={{ marginTop: 6 }}></span>
                  <span className="cv-zone-name">Sector Markets</span>
                </div>
                <span className="cv-zone-map"><MapIcon />Map</span>
              </div>
              <span className="cv-zone-tag">Retail Markets</span>
            </button>
            <button className="cv-zone-card r" onClick={() => openMap('New Gurgaon (Sec 82–113) Gurgaon', '28.3831', '76.9943')}>
              <div className="cv-zone-top">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                  <span className="cv-zone-dot" style={{ marginTop: 6 }}></span>
                  <span className="cv-zone-name">New Gurgaon (Sec 82–113)</span>
                </div>
                <span className="cv-zone-map"><MapIcon />Map</span>
              </div>
              <span className="cv-zone-tag">Growth Zones</span>
            </button>
            <button className="cv-zone-card r" onClick={() => openMap('Modern Trade Hubs Gurgaon', '28.5029', '77.0916')}>
              <div className="cv-zone-top">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                  <span className="cv-zone-dot" style={{ marginTop: 6 }}></span>
                  <span className="cv-zone-name">Modern Trade Hubs</span>
                </div>
                <span className="cv-zone-map"><MapIcon />Map</span>
              </div>
              <span className="cv-zone-tag">Modern Trade</span>
            </button>
          </div>
        </div>
      </div>

      {/* Channels grid */}
      <div className="cv-channels">
        <div className="cv-channels-in">
          <div className="cv-section-label r">Trade Channels Served</div>
          <h2 className="cv-section-h r d1" style={{ color: '#0A1628' }}>6 Channels, One Distribution Partner</h2>
          <p className="cv-section-p r d2" style={{ color: '#475569' }}>We reach every type of buyer in the Gurgaon market — from the neighbourhood kirana to the modern hypermarket.</p>
          <div className="cv-ch-grid">
            <div className="cv-ch-card r d1">
              <div className="cv-ch-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A99D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z M3 9h18 M3 15h18 M9 3v18 M15 3v18" /></svg></div>
              <div className="cv-ch-t">Kirana &amp; General Trade</div>
              <div className="cv-ch-p">Traditional stores and general trade across all Gurgaon sectors.</div>
            </div>
            <div className="cv-ch-card r d2">
              <div className="cv-ch-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A99D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18" /></svg></div>
              <div className="cv-ch-t">Modern Trade</div>
              <div className="cv-ch-p">Supermarkets, hypermarkets, and modern retail chains in Gurgaon.</div>
            </div>
            <div className="cv-ch-card r d3">
              <div className="cv-ch-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A99D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" /></svg></div>
              <div className="cv-ch-t">Institutional Buyers</div>
              <div className="cv-ch-p">Corporate offices, hospitals, hotels — scheduled regular supplies.</div>
            </div>
            <div className="cv-ch-card r d4">
              <div className="cv-ch-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A99D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1 M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z M6 1v3 M10 1v3 M14 1v3" /></svg></div>
              <div className="cv-ch-t">HoReCa</div>
              <div className="cv-ch-p">Hotels, restaurants, cafes, and catering businesses across Gurgaon.</div>
            </div>
            <div className="cv-ch-card r d5">
              <div className="cv-ch-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ABCF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg></div>
              <div className="cv-ch-t">Wholesalers</div>
              <div className="cv-ch-p">Gurgaon wholesale markets and sub-distributors for secondary reach.</div>
            </div>
            <div className="cv-ch-card r d6">
              <div className="cv-ch-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ABCF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <div className="cv-ch-t">Quick Commerce</div>
              <div className="cv-ch-p">Dark stores and fulfilment hubs for rapid delivery platforms.</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cv-cta">
        <div className="cv-cta-in">
          <div className="peb r" style={{ margin: '0 auto 16px' }}>Ready to Cover Gurgaon?</div>
          <h2 className="r d1" style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-.025em', marginBottom: 12 }}>Your brand, every zone,<br />every channel.</h2>
          <p className="r d2" style={{ fontSize: 15, color: 'rgba(255,255,255,.65)', lineHeight: 1.75, marginBottom: 28 }}>Let us handle distribution while you focus on building your brand.</p>
          <a onClick={() => nav('distribute')} className="btn btn-t r d3">Hire Us for Distribution</a>
        </div>
      </div>

      <FooterHome />
    </div>
  );
}
