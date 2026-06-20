import React, { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterHome } from '../components/Footer';
import { useMapModal } from '../components/MapModal';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import useParallax from '../hooks/useParallax';
import '../styles/home.css';

const TruckBand = lazy(() => import('../components/TruckBand'));

export default function Home() {
  const navigate = useNavigate();
  const { openMap } = useMapModal();
  useRevealOnScroll();
  useParallax();

  const nav = (page) => navigate(page === 'index' ? '/' : `/${page}`);

  return (
    <div className="page-section pg active" id="page-index">
      {/* HERO */}
      <section className="hero" aria-label="Shubhlabh Express — B2B Distribution Gurgaon">
        <canvas id="plxCanvas" aria-hidden="true"></canvas>
        <div className="plx-orb1" id="plxOrb1" aria-hidden="true"></div>
        <div className="plx-orb2" id="plxOrb2" aria-hidden="true"></div>
        <div className="plx-orb3" id="plxOrb3" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-in">
          <div className="hero-text">
            <div className="hero-badge r">
              <div className="hero-tag-row">
                <span className="hb-dot"></span>
                <span className="hb-txt">Gurgaon NCR &nbsp;&middot;&nbsp; B2B Distribution &amp; C&amp;F</span>
              </div>
              <div className="hero-ai-tag">
                <span className="hero-ai-pill ai">
                  <span className="ai-logo">
                    <span className="ai-logo-inner">AI</span>
                  </span>
                  &thinsp;Powered
                </span>
                <span className="hero-tagline" id="heroTagline">
                  <span className="tl-word">Distribution</span>&nbsp;<span className="tl-word">built</span>&nbsp;<span className="tl-word">for</span>&nbsp;the&nbsp;<strong>next generation</strong>&nbsp;<span className="tl-word">of</span>&nbsp;<span className="tl-word">brands</span>
                </span>
              </div>
            </div>
            <h1 className="hero-h1 r d1">
              Your market.<br />
              <span className="gr">We move it.</span>
            </h1>
            <p className="hero-sub r d2">
              Shubhlabh Express connects manufacturers and FMCG companies to Gurgaon's 2,000+ retail touchpoints — reliably, professionally, at scale.
            </p>
            <div className="hero-btns r d3">
              <a onClick={() => nav('distribute')} className="btn-primary">
                Hire Us for Distribution
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a onClick={() => nav('about')} className="btn-secondary">Learn About Us</a>
            </div>
            <div className="trust-row r d4">
              <span className="tr-item"><span className="tr-dot"></span>Authorized C&amp;F Agent</span>
              <span className="tr-item"><span className="tr-dot"></span>GST Compliant</span>
              <span className="tr-item"><span className="tr-dot"></span>2026 — New Age Company</span>
              <span className="tr-item"><span className="tr-dot"></span>Same-Day Distribution</span>
            </div>
          </div>

          <div className="hero-card r d2">
            <div className="hc-label">Live Distribution Metrics</div>
            <div className="metrics" id="heroMetrics">
              <div className="metric">
                <div className="metric-n"><span className="mcount" data-target="2000" data-suffix="+">2000</span>+</div>
                <div className="metric-l">Retail Touchpoints<br />across Gurgaon</div>
              </div>
              <div className="metric">
                <div className="metric-n"><span className="mcount" data-target="7" data-suffix="+">7</span>+</div>
                <div className="metric-l">Active Coverage<br />Zones</div>
              </div>
              <div className="metric">
                <div className="metric-n"><span className="mcount" data-target="24" data-suffix="h">24</span>h</div>
                <div className="metric-l">Market Activation<br />for new principals</div>
              </div>
              <div className="metric">
                <div className="metric-n"><span className="mcount" data-target="100" data-suffix="%">100</span>%</div>
                <div className="metric-l">GST Compliant<br />Operations</div>
              </div>
            </div>
            <div className="hc-divider"></div>
            <div className="hc-status">
              <span className="hc-st-left">Active Operations</span>
              <span className="hc-st-badge"><span className="hc-st-dot"></span>Gurgaon NCR</span>
            </div>
            <div className="hc-logos">
              <div className="hc-logo-lbl">Categories Served</div>
              <div className="category-chips">
                <span className="chip">FMCG</span>
                <span className="chip">Beverages</span>
                <span className="chip">Pet Food</span>
                <span className="chip">Personal Care</span>
                <span className="chip">Home Care</span>
                <span className="chip">Institutional</span>
              </div>
            </div>
            <div className="hc-divider"></div>
            <div className="hc-social">
              <div className="hc-logo-lbl">Follow Us</div>
              <div className="hc-soc-row">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hc-soc-btn" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hc-soc-btn" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/shubhlabh-express-private-limited-8a7ba1415/" target="_blank" rel="noopener noreferrer" className="hc-soc-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div style={{height:80,background:'#0A1628'}}/>}>
        <TruckBand />
      </Suspense>

      {/* HOW IT WORKS */}
      <section className="how plx-sect" aria-labelledby="how-heading">
        <div className="plx-sect-bg plx-sect-bg-teal" aria-hidden="true"></div>
        <div className="how-in">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', letterSpacing: '.13em', textTransform: 'uppercase', marginBottom: 10 }} className="r">How It Works</div>
            <h2 id="how-heading" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.14, letterSpacing: '-.025em', marginBottom: 12 }} className="r d1">From agreement to<br />market in <em style={{ fontStyle: 'normal', background: 'linear-gradient(90deg,var(--teal),var(--sky))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>days, not months</em></h2>
            <p style={{ fontSize: 16, color: '#334155', lineHeight: 1.75 }} className="r d2">We leverage our existing retail relationships to get your product in front of Gurgaon's trade fast.</p>
          </div>
          <div className="how-steps">
            <div className="how-step r d1">
              <div className="how-num">1</div>
              <div className="how-t">Initial Discussion</div>
              <p className="how-p">We understand your product, target zones, pricing norms, and SOP requirements. Transparent about fit from day one.</p>
            </div>
            <div className="how-step r d2">
              <div className="how-num">2</div>
              <div className="how-t">Sign Agreement</div>
              <p className="how-p">Formal Principal Agreement covering territory, margins, SLAs, MIS requirements, credit terms, and exit provisions.</p>
            </div>
            <div className="how-step r d3">
              <div className="how-num">3</div>
              <div className="how-t">Stock Transfer</div>
              <p className="how-p">Your first consignment arrives at our Gurgaon warehouse. Inward documentation and setup completed within 24 hours.</p>
            </div>
            <div className="how-step r d4">
              <div className="how-num">4</div>
              <div className="how-t">Market Activation</div>
              <p className="how-p">Our sales team begins active distribution — reaching 2,000+ retailers and executing your planogram from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="svc-prev plx-sect" aria-labelledby="svc-heading">
        <div className="plx-sect-bg plx-sect-bg-sky" aria-hidden="true"></div>
        <div className="svc-in">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', letterSpacing: '.13em', textTransform: 'uppercase' }} className="r">Our Services</div>
            <h2 id="svc-heading" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.14, letterSpacing: '-.025em' }} className="r d1">Everything you need to<br />distribute in Gurgaon</h2>
            <p style={{ fontSize: 16, color: '#334155', lineHeight: 1.75, maxWidth: 540 }} className="r d2">Six services, one trusted partner — handling every link in your supply chain.</p>
          </div>
          <div className="svc-grid">
            <div className="scard r d1">
              <div className="scard-top"></div>
              <div className="scard-ico"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
              <div className="scard-t">Clearing &amp; Forwarding (C&amp;F)</div>
              <p className="scard-p">Authorized C&amp;F agent — receiving, documenting, and forwarding your goods into the Gurgaon NCR market with full GST compliance.</p>
              <a onClick={() => nav('services')} className="scard-lnk">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            </div>
            <div className="scard r d2">
              <div className="scard-top"></div>
              <div className="scard-ico"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
              <div className="scard-t">Warehousing &amp; Inventory</div>
              <p className="scard-p">Secure Gurgaon warehousing with FIFO compliance, expiry tracking, regular stock audits, and real-time inventory visibility for principals.</p>
              <a onClick={() => nav('services')} className="scard-lnk">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            </div>
            <div className="scard r d3">
              <div className="scard-top"></div>
              <div className="scard-ico"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></div>
              <div className="scard-t">Primary &amp; Secondary Distribution</div>
              <p className="scard-p">Same-day to 48-hour delivery from our warehouse to wholesalers and 2,000+ retail outlets across every Gurgaon zone.</p>
              <a onClick={() => nav('services')} className="scard-lnk">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            </div>
            <div className="scard r d4">
              <div className="scard-top"></div>
              <div className="scard-ico"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
              <div className="scard-t">Retail Network Management</div>
              <p className="scard-p">Active management across kirana, modern trade, HoReCa, institutional buyers, and quick commerce — with regular beat plans and outlet addition.</p>
              <a onClick={() => nav('services')} className="scard-lnk">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            </div>
            <div className="scard r d5">
              <div className="scard-top"></div>
              <div className="scard-ico"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></div>
              <div className="scard-t">Sales &amp; Market Development</div>
              <p className="scard-p">On-ground sales team executing volume targets, scheme implementation, and new outlet additions — systematically growing your brand's footprint.</p>
              <a onClick={() => nav('services')} className="scard-lnk">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            </div>
            <div className="scard r d6" style={{ borderColor: 'rgba(0,169,157,.2)', background: 'linear-gradient(135deg,rgba(0,169,157,.04),rgba(74,188,245,.02))' }}>
              <div className="scard-top" style={{ transform: 'scaleX(1)' }}></div>
              <div className="scard-ico"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
              <div className="scard-t">MIS &amp; Reporting</div>
              <p className="scard-p">Weekly stock &amp; sales reports, collections statements, and performance summaries — full visibility for your production planning and decisions.</p>
              <a onClick={() => nav('services')} className="scard-lnk">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="cats" aria-label="Categories we distribute">
        <div className="cats-in">
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', letterSpacing: '.13em', textTransform: 'uppercase', marginBottom: 8 }} className="r">Categories We Handle</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }} className="r d1">Multi-category distribution expertise</h3>
          <p style={{ fontSize: 14, color: '#334155' }} className="r d2">From FMCG staples to niche pet care — we handle them all with the same professional rigour.</p>
          <div className="cats-scroll r d3">
            <span className="cat-chip"><span className="cat-dot"></span>FMCG – Food &amp; Beverages</span>
            <span className="cat-chip"><span className="cat-dot"></span>FMCG – Personal Care</span>
            <span className="cat-chip"><span className="cat-dot"></span>FMCG – Home Care</span>
            <span className="cat-chip"><span className="cat-dot"></span>Pet Food &amp; Pet Care</span>
            <span className="cat-chip"><span className="cat-dot"></span>Packaged Water &amp; Beverages</span>
            <span className="cat-chip"><span className="cat-dot"></span>Institutional &amp; B2B Goods</span>
            <span className="cat-chip"><span className="cat-dot"></span>Quick Commerce</span>
            <span className="cat-chip"><span className="cat-dot"></span>HoReCa Supplies</span>
          </div>
        </div>
      </div>

      {/* COVERAGE */}
      <section className="hcov" aria-labelledby="cov-heading">
        <div className="hcov-in">
          <div>
            <div className="hcov-eyebrow r">Coverage Zones</div>
            <h2 id="cov-heading" className="hcov-h r d1">Gurgaon NCR,<br /><span>completely covered</span></h2>
            <p className="hcov-p r d2">Every major residential, commercial, and institutional zone in Gurgaon — 2,000+ retail touchpoints across 7+ active zones.</p>
            <div className="hcov-stats r d3">
              <div className="hcov-stat"><div className="hcov-stat-n">2000+</div><div className="hcov-stat-l">Retail Touchpoints</div></div>
              <div className="hcov-stat"><div className="hcov-stat-n">7+</div><div className="hcov-stat-l">Active Zones</div></div>
              <div className="hcov-stat"><div className="hcov-stat-n">NCR</div><div className="hcov-stat-l">Market Reach</div></div>
            </div>
            <button className="hcov-view r d4" onClick={() => nav('coverage')}>View Full Coverage Map <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></button>
          </div>

          <div className="hcov-zones r d2">
            <button className="hcov-zone" onClick={() => openMap('DLF Phases 1–5 Gurgaon', '28.4595', '77.0266')}>
              <div className="hcov-zone-top"><span className="hcov-zone-dot"></span><span className="hcov-zone-name">DLF Phases 1–5</span></div>
              <span className="hcov-zone-tag">Premium Residential</span>
            </button>
            <button className="hcov-zone" onClick={() => openMap('Golf Course Road Gurgaon', '28.4421', '77.0888')}>
              <div className="hcov-zone-top"><span className="hcov-zone-dot"></span><span className="hcov-zone-name">Golf Course Road</span></div>
              <span className="hcov-zone-tag">High-Value Corridor</span>
            </button>
            <button className="hcov-zone" onClick={() => openMap('Sohna Road Gurgaon', '28.3940', '77.0470')}>
              <div className="hcov-zone-top"><span className="hcov-zone-dot"></span><span className="hcov-zone-name">Sohna Road</span></div>
              <span className="hcov-zone-tag">High-Density Residential</span>
            </button>
            <button className="hcov-zone" onClick={() => openMap('Cyber City & Udyog Vihar Gurgaon', '28.4950', '77.0890')}>
              <div className="hcov-zone-top"><span className="hcov-zone-dot"></span><span className="hcov-zone-name">Cyber City &amp; Udyog Vihar</span></div>
              <span className="hcov-zone-tag">Corporate Hub</span>
            </button>
            <button className="hcov-zone" onClick={() => openMap('Sector Markets Gurgaon', '28.4601', '77.0214')}>
              <div className="hcov-zone-top"><span className="hcov-zone-dot"></span><span className="hcov-zone-name">Sector Markets</span></div>
              <span className="hcov-zone-tag">Retail Markets</span>
            </button>
            <button className="hcov-zone" onClick={() => openMap('New Gurgaon (Sec 82–113) Gurgaon', '28.3831', '76.9943')}>
              <div className="hcov-zone-top"><span className="hcov-zone-dot"></span><span className="hcov-zone-name">New Gurgaon (Sec 82–113)</span></div>
              <span className="hcov-zone-tag">Growth Zones</span>
            </button>
            <button className="hcov-zone hcov-zone-wide" onClick={() => openMap('Commercial Hubs & Malls Gurgaon', '28.5029', '77.0916')}>
              <div className="hcov-zone-top"><span className="hcov-zone-dot"></span><span className="hcov-zone-name">Commercial Hubs &amp; Malls</span></div>
              <span className="hcov-zone-tag">Modern Trade</span>
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why plx-sect" aria-labelledby="why-heading">
        <div className="plx-sect-bg plx-sect-bg-teal" aria-hidden="true"></div>
        <div className="why-in">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 40px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', letterSpacing: '.13em', textTransform: 'uppercase', marginBottom: 10 }} className="r">Why Shubhlabh</div>
            <h2 id="why-heading" style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.14, letterSpacing: '-.025em' }} className="r d1">Six reasons manufacturers<br />choose us</h2>
          </div>
          <div className="why-grid">
            <div className="wcard r d1"><div className="wcard-num">01</div><div><div className="wcard-t">Gurgaon Market Depth</div><p className="wcard-p">Specialists, not generalists. Our team knows every zone, buyer, and channel in the city — not a national company with Gurgaon coverage.</p></div></div>
            <div className="wcard r d2"><div className="wcard-num">02</div><div><div className="wcard-t">Principal-First Approach</div><p className="wcard-p">We follow your planogram, pricing norms, and SOPs. Your secondary sales performance is our primary metric — not just our margins.</p></div></div>
            <div className="wcard r d3"><div className="wcard-num">03</div><div><div className="wcard-t">Multi-Category Capability</div><p className="wcard-p">FMCG, beverages, food, pet care, personal care — we handle multiple categories simultaneously with the same rigour.</p></div></div>
            <div className="wcard r d4"><div className="wcard-num">04</div><div><div className="wcard-t">Full Compliance</div><p className="wcard-p">GST-compliant invoicing, proper C&amp;F documentation, and regulatory adherence built into every single operation.</p></div></div>
            <div className="wcard r d5"><div className="wcard-num">05</div><div><div className="wcard-t">Fast Activation</div><p className="wcard-p">New principals are typically market-ready within 24–48 hours of agreement signing — leveraging our existing retailer relationships.</p></div></div>
            <div className="wcard r d6"><div className="wcard-num">06</div><div><div className="wcard-t">Dedicated Contact</div><p className="wcard-p">Every principal gets a named account manager — direct access, clear escalation, and accountability on every commitment we make.</p></div></div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta plx-sect" aria-labelledby="cta-heading">
        <div className="plx-sect-bg plx-sect-bg-sky" aria-hidden="true"></div>
        <div className="fcta-in">
          <div className="fcta-eyebrow r"><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00C4B7', display: 'inline-block' }}></span>New Age Company &nbsp;&middot;&nbsp; Founded 2026</div>
          <h2 id="cta-heading" className="fcta-h r d1">Ready to distribute<br /><span>across Gurgaon?</span></h2>
          <p className="fcta-p r d2">Tell us about your product and distribution requirements. We respond within one business day with a tailored proposal.</p>
          <div className="fcta-btns r d3">
            <a onClick={() => nav('distribute')} className="btn-primary">Hire Us for Your Distribution <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            <a href="mailto:contact@shublabh.ltd" className="btn-secondary">contact@shublabh.ltd</a>
          </div>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
