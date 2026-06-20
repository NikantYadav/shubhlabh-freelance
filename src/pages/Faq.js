import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterHome } from '../components/Footer';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/faq.css';

const PlusIcon = () => (
  <span className="fq2-acc-icon"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></span>
);

export default function Faq() {
  const navigate = useNavigate();
  const nav = (page) => navigate(page === 'index' ? '/' : `/${page}`);
  useRevealOnScroll();

  const [openAcc, setOpenAcc] = useState(null);
  const [activeCat, setActiveCat] = useState('all');
  const [activeSn, setActiveSn] = useState('partnership');

  const groupRefs = {
    partnership: useRef(null),
    operations: useRef(null),
    commercial: useRef(null),
  };

  const fqToggle = (n) => {
    setOpenAcc((cur) => (cur === n ? null : n));
  };
  const fqFilter = (cat) => {
    setActiveCat(cat);
  };
  const fqNav = (cat) => {
    setActiveSn(cat);
    fqFilter(cat);
    const g = groupRefs[cat] && groupRefs[cat].current;
    if (g) g.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const groupStyle = (group) => ({
    display: activeCat === 'all' || activeCat === group ? '' : 'none',
  });

  const Acc = ({ n, q, children }) => (
    <div className={`fq2-acc${openAcc === n ? ' open' : ''}`} id={`fqa${n}`}>
      <button className="fq2-acc-q" onClick={() => fqToggle(n)}>
        <span className="fq2-acc-text">{q}</span>
        <PlusIcon />
      </button>
      <div className="fq2-acc-body" id={`fqb${n}`}><div className="fq2-acc-ans">{children}</div></div>
    </div>
  );

  return (
    <div className="page-section pg active" id="page-faq">

      {/* Hero */}
      <div className="fq2-hero">
        <div className="fq2-hero-in">
          <div className="peb r">Questions Answered</div>
          <h1 className="r d1" style={{ fontSize: 'clamp(30px,5.5vw,52px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, marginBottom: 12, letterSpacing: '-.03em', textAlign: 'center' }}>Frequently Asked<br /><span style={{ background: 'linear-gradient(90deg,#00A99D,#4ABCF5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Questions</span></h1>
          <p className="r d2" style={{ fontSize: 'clamp(14px,2.2vw,16.5px)', color: 'rgba(255,255,255,.72)', lineHeight: 1.75, maxWidth: 520, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>Everything manufacturers, FMCG companies, and institutional buyers typically ask before partnering with us.</p>
          <div className="fq2-pills r d3">
            <button className={`fq2-pill${activeCat === 'all' ? ' on' : ''}`} onClick={() => fqFilter('all')}>All Questions</button>
            <button className={`fq2-pill${activeCat === 'partnership' ? ' on' : ''}`} onClick={() => fqFilter('partnership')}>Partnership</button>
            <button className={`fq2-pill${activeCat === 'operations' ? ' on' : ''}`} onClick={() => fqFilter('operations')}>Operations</button>
            <button className={`fq2-pill${activeCat === 'commercial' ? ' on' : ''}`} onClick={() => fqFilter('commercial')}>Commercial</button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="fq2-body">
        <div className="fq2-layout">

          {/* Sidebar */}
          <div className="fq2-side r">
            <div className="fq2-side-lbl">Jump to</div>
            <nav className="fq2-sidenav">
              <button className={`fq2-sn${activeSn === 'partnership' ? ' on' : ''}`} onClick={() => fqNav('partnership')}><span className="fq2-sn-bar"></span>Partnership &amp; Onboarding</button>
              <button className={`fq2-sn${activeSn === 'operations' ? ' on' : ''}`} onClick={() => fqNav('operations')}><span className="fq2-sn-bar"></span>Operations &amp; Services</button>
              <button className={`fq2-sn${activeSn === 'commercial' ? ' on' : ''}`} onClick={() => fqNav('commercial')}><span className="fq2-sn-bar"></span>Commercial &amp; Documentation</button>

            </nav>
            <div className="fq2-help">
              <div className="fq2-help-t">Still have questions?</div>
              <div className="fq2-help-p">Our team responds within one business day.</div>
              <a onClick={() => nav('distribute')} className="btn btn-t" style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '10px 14px' }}>Get in Touch</a>
            </div>
          </div>

          {/* Accordion main */}
          <div className="fq2-main">

            <div className="fq2-group" data-group="partnership" ref={groupRefs.partnership} style={groupStyle('partnership')}>
              <div className="fq2-group-hd">
                <span className="fq2-gnum">01</span>
                <span className="fq2-gtitle">Partnership &amp; Onboarding</span>
              </div>
              <div className="fq2-items">
                <Acc n={1} q="What types of companies can partner with Shubhlabh Express?">We work with manufacturers, FMCG companies, consumer goods brands, pet food companies, importers, and any business looking to establish or scale B2B distribution in Gurgaon NCR. We do not serve end consumers — all our partners are businesses.</Acc>
                <Acc n={2} q="How quickly can a new principal company go to market?">In most cases, a new principal can begin active distribution within 24–48 hours of agreement signing. Our existing retailer relationships eliminate the cold-start delay that most new distributors face.</Acc>
                <Acc n={3} q="Can Shubhlabh work alongside an existing distributor in Gurgaon?">Yes. We can operate as a zone-specific distributor, a channel-specific distributor, or take over full Gurgaon distribution. Territory and channel demarcation is agreed in the Principal Agreement.</Acc>
                <Acc n={4} q="Do you handle collections from the trade?">Yes. Collections management is part of our standard service. We operate within your defined credit policy, provide regular updates, and share detailed debtors statements on agreed schedules.</Acc>
                <Acc n={5} q="Do you require exclusivity for a product category?">Exclusivity terms vary by principal agreement. In most cases, we can accommodate multiple brands within a category, subject to no direct conflict of interest — discussed transparently during onboarding.</Acc>
              </div>
            </div>
            <div className="fq2-group" data-group="operations" ref={groupRefs.operations} style={groupStyle('operations')}>
              <div className="fq2-group-hd">
                <span className="fq2-gnum">02</span>
                <span className="fq2-gtitle">Operations &amp; Services</span>
              </div>
              <div className="fq2-items">
                <Acc n={6} q="What does your C&F service include?">Inward receipt and documentation from your factory or national depot; secure warehousing with FIFO compliance; order processing and dispatch; outbound invoicing; collections management; and structured MIS reporting.</Acc>
                <Acc n={7} q="What product categories do you handle?">FMCG (food &amp; beverages, personal care, home care), packaged water, beverages, pet food and pet care, consumer goods, and institutional supplies.</Acc>
                <Acc n={8} q="What geographies does Shubhlabh Express cover?">Full Gurgaon — DLF Phases 1–5, Golf Course Road, Sohna Road, Cyber City, Udyog Vihar, New Gurgaon (Sectors 82–113), and all sector markets. We serve 7+ active zones covering 2,000+ retail touchpoints.</Acc>
                <Acc n={9} q="What proof of delivery do you provide?">All deliveries are supported by signed delivery receipts. Consolidated delivery summaries are included in weekly MIS reports. Copies are available on request at any time.</Acc>
                <Acc n={10} q="How do you handle trade returns?">Retail returns are received, inspected, and documented at our warehouse. Credit notes or replacement dispatch are coordinated per the terms of your Principal Agreement.</Acc>
              </div>
            </div>
            <div className="fq2-group" data-group="commercial" ref={groupRefs.commercial} style={groupStyle('commercial')}>
              <div className="fq2-group-hd">
                <span className="fq2-gnum">03</span>
                <span className="fq2-gtitle">Commercial &amp; Documentation</span>
              </div>
              <div className="fq2-items">
                <Acc n={11} q="How is pricing structured for distribution services?">Distribution margins and C&F service fees are agreed during onboarding. Terms are transparent and documented in the Principal Agreement — there are no hidden charges.</Acc>
                <Acc n={12} q="Is there a minimum volume commitment?">We work with both early-stage brands and established manufacturers. Volume expectations are discussed during onboarding and documented in the agreement — we are flexible for brands in growth phase.</Acc>
                <Acc n={13} q="What documentation is required to start?">Company GST registration, PAN, applicable trade license or FSSAI certification, and relevant product certifications. Our team guides you through the documentation checklist during onboarding.</Acc>
                <Acc n={14} q="Do you provide GST-compliant invoicing?">Yes. All outbound trade invoices are GST-compliant with proper HSN codes, tax calculations, and e-way bill generation where required. Documentation is audit-ready at all times.</Acc>
              </div>
            </div>

            <div className="fq2-cta r">
              <div>
                <h3>Still have questions?</h3>
                <p>Our team responds within one business day.</p>
              </div>
              <a onClick={() => nav('distribute')} className="btn btn-t">Get in Touch</a>
            </div>
          </div>

        </div>
      </div>

      <FooterHome />
    </div>
  );
}
