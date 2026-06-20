import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterHome } from '../components/Footer';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/services.css';
import CfIllustration from '../components/services/CfIllustration';
import WarehousingIllustration from '../components/services/WarehousingIllustration';
import PrimaryDistributionIllustration from '../components/services/PrimaryDistributionIllustration';
import RetailNetworkIllustration from '../components/services/RetailNetworkIllustration';
import SalesMarketIllustration from '../components/services/SalesMarketIllustration';
import MisReportingIllustration from '../components/services/MisReportingIllustration';

export default function Services() {
  const navigate = useNavigate();
  const nav = (page) => navigate(page === 'index' ? '/' : `/${page}`);
  useRevealOnScroll();

  return (
    <div className="page-section pg active" id="page-services">

      {/* ═══ HERO ═══ */}
      <div className="svhero">
        <div className="svhero-in">
          <div className="svhero-text">
            <div className="peb r">Our Services</div>
            <h1 className="r d1" style={{ color: '#fff' }}>Everything your brand needs<br /><span>to win in Gurgaon</span></h1>
            <p className="plead r d2" style={{ maxWidth: 520, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>Six integrated services — from warehouse receipt to retail shelf. One partner managing every link in your supply chain.</p>
            <div className="svhero-stats r d3">
              <div className="svhs"><div className="svhs-n">6</div><div className="svhs-l">Services</div></div>
              <div className="svhs-div"></div>
              <div className="svhs"><div className="svhs-n">2000+</div><div className="svhs-l">Outlets served</div></div>
              <div className="svhs-div"></div>
              <div className="svhs"><div className="svhs-n">24h</div><div className="svhs-l">Onboarding</div></div>
              <div className="svhs-div"></div>
              <div className="svhs"><div className="svhs-n">7+</div><div className="svhs-l">Active zones</div></div>
            </div>
            <div className="r d4" style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a onClick={() => nav('distribute')} className="btn-primary">Hire Us <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
            </div>
          </div>
          {/* Supply chain flow graphic */}
          <div className="svhero-art r d2">
            <svg viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340 }}>
              {/* Factory node */}
              <rect x="100" y="10" width="140" height="52" rx="12" fill="#132244" stroke="#1D9E75" strokeWidth="1.5" />
              <text x="170" y="31" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700" fill="#5DCAA5" letterSpacing="0.08em">MANUFACTURER</text>
              <text x="170" y="48" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="600" fill="#ffffff">Your Factory / Depot</text>
              {/* Arrow down */}
              <line x1="170" y1="62" x2="170" y2="100" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="4 3" />
              <polygon points="165,97 170,106 175,97" fill="#1D9E75" />
              {/* Shubhlabh warehouse (central hub) */}
              <rect x="40" y="110" width="260" height="76" rx="14" fill="#0F6E56" stroke="#00A99D" strokeWidth="2" />
              <text x="170" y="133" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#9FE1CB" letterSpacing="0.1em">SHUBHLABH EXPRESS</text>
              <text x="170" y="150" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="#ffffff">Gurgaon Warehouse &amp; Hub</text>
              <text x="170" y="167" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.90)">C&amp;F · Warehousing · Sales · MIS</text>
              {/* Three arrows down to channels */}
              <line x1="90" y1="186" x2="66" y2="234" stroke="#4ABCF5" strokeWidth="1.2" strokeDasharray="4 3" />
              <polygon points="61,230 66,240 72,232" fill="#4ABCF5" />
              <line x1="170" y1="186" x2="170" y2="234" stroke="#4ABCF5" strokeWidth="1.2" strokeDasharray="4 3" />
              <polygon points="165,231 170,241 175,231" fill="#4ABCF5" />
              <line x1="250" y1="186" x2="274" y2="234" stroke="#4ABCF5" strokeWidth="1.2" strokeDasharray="4 3" />
              <polygon points="268,230 274,240 280,232" fill="#4ABCF5" />
              {/* Channel nodes row 1 */}
              <rect x="18" y="243" width="98" height="44" rx="9" fill="#0A1628" stroke="#4ABCF5" strokeWidth="1" />
              <text x="67" y="262" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#4ABCF5" letterSpacing="0.06em">KIRANA</text>
              <text x="67" y="277" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.75)">General Trade</text>
              <rect x="121" y="243" width="98" height="44" rx="9" fill="#0A1628" stroke="#4ABCF5" strokeWidth="1" />
              <text x="170" y="262" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#4ABCF5" letterSpacing="0.06em">MODERN TRADE</text>
              <text x="170" y="277" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.75)">Supermarkets</text>
              <rect x="224" y="243" width="98" height="44" rx="9" fill="#0A1628" stroke="#4ABCF5" strokeWidth="1" />
              <text x="273" y="262" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#4ABCF5" letterSpacing="0.06em">HoReCa</text>
              <text x="273" y="277" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.75)">Hotels &amp; Cafes</text>
              {/* Arrow down to second row */}
              <line x1="67" y1="287" x2="67" y2="315" stroke="rgba(74,188,245,0.4)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="170" y1="287" x2="170" y2="315" stroke="rgba(74,188,245,0.4)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="273" y1="287" x2="273" y2="315" stroke="rgba(74,188,245,0.4)" strokeWidth="1" strokeDasharray="3 3" />
              {/* Channel nodes row 2 */}
              <rect x="18" y="316" width="98" height="44" rx="9" fill="#060D1A" stroke="rgba(74,188,245,0.35)" strokeWidth="1" />
              <text x="67" y="335" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="rgba(74,188,245,0.8)" letterSpacing="0.06em">WHOLESALE</text>
              <text x="67" y="350" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.82)">Sub-distributors</text>
              <rect x="121" y="316" width="98" height="44" rx="9" fill="#060D1A" stroke="rgba(74,188,245,0.35)" strokeWidth="1" />
              <text x="170" y="335" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="rgba(74,188,245,0.8)" letterSpacing="0.06em">INSTITUTIONAL</text>
              <text x="170" y="350" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.82)">Offices &amp; Hospitals</text>
              <rect x="224" y="316" width="98" height="44" rx="9" fill="#060D1A" stroke="rgba(74,188,245,0.35)" strokeWidth="1" />
              <text x="273" y="335" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="rgba(74,188,245,0.8)" letterSpacing="0.06em">Q-COMMERCE</text>
              <text x="273" y="350" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(255,255,255,0.82)">Dark Stores</text>
              {/* Live dot */}
              <circle cx="170" cy="148" r="4" fill="#00F5E8" />
              <circle cx="170" cy="148" r="8" fill="none" stroke="#00F5E8" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>

      {/* ═══ SERVICE CARDS WITH GRAPHICS ═══ */}
      <section className="svs-sec">
        <div className="sec-in">

          {/* 01 C&F */}
          <div className="svs-row">
            <div className="svs-graphic"><CfIllustration /></div>
            <div className="svs-body">
              <div className="svs-badge svs-badge-teal">01</div>
              <h2 className="svs-title">Clearing &amp; Forwarding</h2>
              <div className="svs-cat">C&amp;F Agent — Gurgaon NCR</div>
              <p className="svs-p">Authorized C&amp;F agent — receiving goods from your factory or national depot, managing inward documentation, e-way bills, GST compliance, and smooth goods movement into Haryana markets. Your products in Gurgaon, handled from day one.</p>
              <div className="svs-feats">
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Authorized C&amp;F agent status</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Inward documentation &amp; e-way bills</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>GST-compliant invoicing</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Haryana market entry support</div>
              </div>
            </div>
          </div>

          <div className="svs-divider"></div>

          {/* 02 Warehousing */}
          <div className="svs-row svs-row-rev">
            <div className="svs-graphic"><WarehousingIllustration /></div>
            <div className="svs-body">
              <div className="svs-badge svs-badge-teal">02</div>
              <h2 className="svs-title">Warehousing &amp; Inventory</h2>
              <div className="svs-cat">Secure stock management</div>
              <p className="svs-p">Secure warehousing with FIFO compliance, expiry tracking, regular stock audits, and real-time inventory visibility. Your goods always accounted for, always accessible — with complete documentation at every touchpoint.</p>
              <div className="svs-feats">
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>FIFO &amp; expiry-date compliance</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Periodic stock audits</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Real-time inventory tracking</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Secure Gurgaon warehouse</div>
              </div>
            </div>
          </div>

          <div className="svs-divider"></div>

          {/* 03 Distribution */}
          <div className="svs-row">
            <div className="svs-graphic"><PrimaryDistributionIllustration /></div>
            <div className="svs-body">
              <div className="svs-badge svs-badge-teal">03</div>
              <h2 className="svs-title">Primary &amp; Secondary Distribution</h2>
              <div className="svs-cat">Warehouse to trade</div>
              <p className="svs-p">Reliable delivery from our Gurgaon warehouse to wholesalers (primary) and directly to retail outlets (secondary) across all major zones. Committed timelines, proof of delivery on every run — no exceptions.</p>
              <div className="svs-feats">
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Same-day &amp; next-day delivery options</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Proof of delivery on all runs</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>All 7+ Gurgaon zones covered</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Committed SLA per agreement</div>
              </div>
            </div>
          </div>

          <div className="svs-divider"></div>

          {/* 04 Retail Network */}
          <div className="svs-row svs-row-rev">
            <div className="svs-graphic"><RetailNetworkIllustration /></div>
            <div className="svs-body">
              <div className="svs-badge svs-badge-teal">04</div>
              <h2 className="svs-title">Retail Network Management</h2>
              <div className="svs-cat">2,000+ outlets across Gurgaon</div>
              <p className="svs-p">Active management of 2,000+ outlets across Gurgaon's 7+ zones — kirana, modern trade, sector markets, commercial hubs, HoReCa, and institutional buyers. Structured beat plans ensure every outlet is serviced on schedule.</p>
              <div className="svs-feats">
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>2,000+ active retail touchpoints</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Structured beat plans by zone</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>All trade channels covered</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Regular outlet additions</div>
              </div>
            </div>
          </div>

          <div className="svs-divider"></div>

          {/* 05 Sales */}
          <div className="svs-row">
            <div className="svs-graphic"><SalesMarketIllustration /></div>
            <div className="svs-body">
              <div className="svs-badge svs-badge-teal">05</div>
              <h2 className="svs-title">Sales &amp; Market Development</h2>
              <div className="svs-cat">Brand on ground</div>
              <p className="svs-p">On-ground sales team executing volume targets, visibility drives, scheme implementation, and new outlet additions — systematically expanding your brand's footprint month over month across Gurgaon's competitive trade landscape.</p>
              <div className="svs-feats">
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Volume target execution</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Scheme &amp; offer roll-outs</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Planogram &amp; visibility drives</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-t"></span>Systematic new outlet addition</div>
              </div>
            </div>
          </div>

          <div className="svs-divider"></div>

          {/* 06 MIS */}
          <div className="svs-row svs-row-rev">
            <div className="svs-graphic"><MisReportingIllustration /></div>
            <div className="svs-body">
              <div className="svs-badge svs-badge-sky">06</div>
              <h2 className="svs-title">MIS &amp; Reporting</h2>
              <div className="svs-cat svs-cat-sky">Full principal visibility</div>
              <p className="svs-p">Weekly and monthly stock &amp; sales reports, collections statements, and performance summaries — giving you full visibility for production planning, scheme design, and commercial decisions. Data delivered on schedule, every time.</p>
              <div className="svs-feats">
                <div className="svs-feat"><span className="svs-dot svs-dot-s"></span>Weekly stock &amp; sales reports</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-s"></span>Monthly performance review</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-s"></span>Collections &amp; ageing statements</div>
                <div className="svs-feat"><span className="svs-dot svs-dot-s"></span>Data for production planning</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <div className="cband"><div className="cband-in"><h2 className="r">Ready to scale across Gurgaon?</h2><p className="r d1">Share your requirements — we respond within one business day.</p><div className="cband-btns r d2"><a onClick={() => nav('distribute')} className="btn btn-t">Hire Us for Your Distribution</a><a onClick={() => nav('faq')} className="btn btn-g">Read FAQs First</a></div></div></div>

      <FooterHome />
    </div>
  );
}
