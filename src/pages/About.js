import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterHome } from '../components/Footer';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/about.css';

export default function About() {
  const navigate = useNavigate();
  const nav = (page) => navigate(page === 'index' ? '/' : `/${page}`);
  useRevealOnScroll();

  return (
    <div className="page-section pg active" id="page-about">
      <div className="phero">
        <div className="phero-in">
          <div className="peb r">Who We Are</div>
          <h1 className="r d1">Built to move Gurgaon's<br /><span>market forward</span></h1>
          <p className="plead r d2">Shubhlabh Express is a new age B2B distribution and C&amp;F company, founded in 2026 by professionals who understood Gurgaon's retail landscape — and built the solution it needed.</p>
        </div>
      </div>
      <section className="sec" style={{ background: '#fff' }}>
        <div className="sec-in">
          <div className="split">
            <div>
              <div className="div r"></div>
              <div className="eb r">Our Story</div>
              <h2 className="sh r d1">A Gurgaon-first<br />distribution company</h2>
              <p className="sp r d2" style={{ marginBottom: 32 }}>Founded in 2026 — a new age company built by logistics professionals who saw how many manufacturers struggled without a reliable, dedicated distribution partner in Gurgaon.</p>
              <div className="tl-wrap r d3">
                <div className="tl-row"><div className="tl-dot"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg></div><div><div className="tl-yr">2026 — Founded</div><div className="tl-t">Incorporated in Gurgaon</div><div className="tl-p">Shubhlabh Express Pvt. Ltd. incorporated as a new age B2B distribution company with a mandate to build a manufacturer-first, professionally managed distribution operation in Gurgaon NCR.</div></div></div>
                <div className="tl-row"><div className="tl-dot"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg></div><div><div className="tl-yr">Infrastructure</div><div className="tl-t">Warehouse &amp; Fleet Operational</div><div className="tl-p">Secured Gurgaon warehousing with FIFO-compliant racking, deployed distribution fleet, and built zone-wise beat plans across all major sectors.</div></div></div>
                <div className="tl-row"><div className="tl-dot"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg></div><div><div className="tl-yr">Network</div><div className="tl-t">2,000+ Retail Touchpoints</div><div className="tl-p">Built an active network spanning kirana stores, modern trade, HoReCa, institutional buyers, and quick commerce dark stores across all Gurgaon zones.</div></div></div>
                <div className="tl-row"><div className="tl-dot"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg></div><div><div className="tl-yr">Today</div><div className="tl-t">Multi-Category C&amp;F Operations</div><div className="tl-p">Authorized C&amp;F agent for multiple principal companies across FMCG, beverages, pet care, and consumer goods — with full MIS reporting and dedicated account managers.</div></div></div>
              </div>
            </div>
            <div>
              <div className="stats r" style={{ marginBottom: 28 }}>
                <div className="sc"><div className="sn">2026</div><div className="sl">Year Founded</div></div>
                <div className="sc"><div className="sn">2000+</div><div className="sl">Retail Touchpoints</div></div>
                <div className="sc"><div className="sn">7+</div><div className="sl">Gurgaon Zones</div></div>
                <div className="sc"><div className="sn">C&amp;F</div><div className="sl">Authorized Agent</div></div>
              </div>
              <div className="team-box r d1">
                <h3>Principal-First Philosophy</h3>
                <p>We operate as a seamless extension of your sales team — following your planograms, pricing norms, and SOPs. Every principal gets a dedicated account manager, structured MIS reporting, and clear accountability. Our success metric is your secondary sales performance, not just our margins.</p>
              </div>
              <div className="vals r d2">
                <div className="vc"><div className="vc-t">Market Intelligence</div><div className="vc-p">Deep knowledge of Gurgaon's retail landscape, demand patterns, and buyer behaviour across every zone.</div></div>
                <div className="vc"><div className="vc-t">Operational Reliability</div><div className="vc-p">Committed delivery schedules, accurate inventory, and full SOP compliance on every principal engagement.</div></div>
                <div className="vc"><div className="vc-t">Scalable Infrastructure</div><div className="vc-p">Warehouse and fleet capacity built to scale with your volumes — no bottlenecks as you grow.</div></div>
                <div className="vc"><div className="vc-t">Transparent Reporting</div><div className="vc-p">Regular stock and sales MIS giving full visibility for production planning and commercial review.</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec od" style={{ background: 'var(--navy)' }}>
        <div className="sec-in" style={{ textAlign: 'center' }}>
          <div className="eb r">By the Numbers</div>
          <h2 className="sh r d1" style={{ marginBottom: 48 }}>Gurgaon's distribution<br /><span>backbone — built to scale</span></h2>
          <div className="pillars">
            <div className="pil r d1"><div className="pil-n">2000+</div><div className="pil-t">Retail Touchpoints</div><div className="pil-p">Active outlets receiving regular distribution across all Gurgaon zones</div></div>
            <div className="pil r d2"><div className="pil-n">7+</div><div className="pil-t">Coverage Zones</div><div className="pil-p">DLF, Golf Course, Sohna, Cyber City, Sectors, New Gurgaon and beyond</div></div>
            <div className="pil r d3"><div className="pil-n">24h</div><div className="pil-t">Market Activation</div><div className="pil-p">From signed agreement to active distribution for new principals</div></div>
            <div className="pil r d4"><div className="pil-n">100%</div><div className="pil-t">GST Compliant</div><div className="pil-p">Full documentation, proper C&amp;F records, and compliant invoicing on every transaction</div></div>
          </div>
        </div>
      </section>
      <div className="cband">
        <div className="cband-in">
          <div className="eb r" style={{ display: 'inline-block', marginBottom: 14 }}>Work With Us</div>
          <h2 className="r d1">Ready to distribute<br />across Gurgaon?</h2>
          <p className="r d2">Tell us about your product and requirements. We respond within one business day.</p>
          <div className="cband-btns r d3"><a onClick={() => nav('distribute')} className="btn btn-t">Hire Us for Your Distribution</a><a onClick={() => nav('services')} className="btn btn-g">View Our Services</a></div>
        </div>
      </div>
      <FooterHome />
    </div>
  );
}
