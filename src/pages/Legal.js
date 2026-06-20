import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FooterHome } from '../components/Footer';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/legal.css';

const TABS = ['terms', 'privacy', 'shipping', 'refund'];

export default function Legal() {
  const location = useLocation();
  useRevealOnScroll();

  const [active, setActive] = useState('terms');

  useEffect(() => {
    const anchor = location.state && location.state.anchor;
    if (anchor && TABS.includes(anchor)) setActive(anchor);
  }, [location.state]);

  const lgNav = (id) => setActive(id);
  const secCls = (id) => `lg2-sec${active === id ? ' on' : ''}`;
  const tabCls = (id) => `lg2-tab${active === id ? ' on' : ''}`;
  const snCls = (id) => `lg2-sn${active === id ? ' on' : ''}`;

  return (
    <div className="page-section pg active" id="page-legal">

      {/* Hero */}
      <div className="lg2-hero">
        <div className="lg2-hero-in">
          <div className="peb r">Legal &amp; Policies</div>
          <h1 className="r d1" style={{ fontSize: 'clamp(30px,5.5vw,52px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, marginBottom: 12, letterSpacing: '-.03em', textAlign: 'center' }}>Terms, Privacy<br /><span style={{ background: 'linear-gradient(90deg,#00A99D,#4ABCF5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>&amp; Operational Policies</span></h1>
          <p className="r d2" style={{ fontSize: 'clamp(14px,2.2vw,16.5px)', color: 'rgba(255,255,255,.72)', lineHeight: 1.75, maxWidth: 520, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>All policies governing the use of shublabh.ltd and Shubhlabh Express B2B distribution services — written plainly.</p>

        </div>
      </div>

      {/* Sticky tab bar */}
      <div className="lg2-tabbar">
        <div className="lg2-tabbar-in">
          <button className={tabCls('terms')} onClick={() => lgNav('terms')}>Terms &amp; Conditions</button>
          <button className={tabCls('privacy')} onClick={() => lgNav('privacy')}>Privacy Policy</button>
          <button className={tabCls('shipping')} onClick={() => lgNav('shipping')}>Shipping Policy</button>
          <button className={tabCls('refund')} onClick={() => lgNav('refund')}>Refund Policy</button>
        </div>
      </div>

      {/* Body */}
      <div className="lg2-body">
        <div className="lg2-layout">

          {/* Sidebar (desktop only) */}
          <div className="lg2-side r">
            <div className="lg2-side-lbl">On this page</div>
            <nav className="lg2-sidenav">
              <button className={snCls('terms')} onClick={() => lgNav('terms')}><span className="lg2-sn-bar"></span>Terms &amp; Conditions</button>
              <button className={snCls('privacy')} onClick={() => lgNav('privacy')}><span className="lg2-sn-bar"></span>Privacy Policy</button>
              <button className={snCls('shipping')} onClick={() => lgNav('shipping')}><span className="lg2-sn-bar"></span>Shipping Policy</button>
              <button className={snCls('refund')} onClick={() => lgNav('refund')}><span className="lg2-sn-bar"></span>Refund Policy</button>
            </nav>
            <div className="lg2-contact-card">
              <div className="lg2-contact-card-t">Policy questions?</div>
              <div className="lg2-contact-card-p">Contact us for any clarification about our terms or policies.</div>
              <a href="mailto:contact@shublabh.ltd" style={{ fontSize: 13, fontWeight: 600, color: '#00A99D' }}>contact@shublabh.ltd</a>
            </div>
          </div>

          {/* Main content */}
          <div className="lg2-main">
            <div id="lgsec-terms" className={secCls('terms')}>
              <div className="lg2-sec-head legal">
                <div className="lg2-badge legal">Legal</div>
                <div className="lg2-sec-title">Terms &amp; Conditions</div>
                <div className="lg2-sec-date">Effective: 1 January 2026 &middot; Last Updated: 14 June 2026</div>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">1</span><span className="lg2-clause-title">Company Information</span></div>
                <p>These Terms &amp; Conditions govern the website and services of <strong>Shubhlabh Express Private Limited</strong>, incorporated under the Companies Act 2013, Gurgaon, Haryana. Website: shublabh.ltd. Email: contact@shublabh.ltd. By accessing this website or engaging our services, you agree to these Terms.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">2</span><span className="lg2-clause-title">Nature of Services</span></div>
                <p>Shubhlabh Express provides B2B distribution, C&amp;F services, warehousing, inventory management, and related logistics to businesses exclusively. We do not sell goods to end consumers.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">3</span><span className="lg2-clause-title">Eligibility</span></div>
                <p>By entering a service agreement, you represent that you are duly authorised to act on behalf of a registered business entity. Consumer transactions are not covered by these Terms.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">4</span><span className="lg2-clause-title">Service Agreements</span></div>
                <p>All distribution and C&amp;F arrangements are governed by a separate written Principal Agreement. These Terms supplement but do not replace that Agreement. In case of conflict, the Principal Agreement prevails.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">5</span><span className="lg2-clause-title">Intellectual Property</span></div>
                <p>All content on this website — including the Shubhlabh Express name, logo, and text — is the intellectual property of Shubhlabh Express Pvt. Ltd. and may not be reproduced without prior written permission.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">6</span><span className="lg2-clause-title">Limitation of Liability</span></div>
                <p>Shubhlabh Express shall not be liable for indirect or consequential losses. Our total liability in any matter shall not exceed the value of the specific transaction in dispute per the Principal Agreement.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">7</span><span className="lg2-clause-title">Governing Law</span></div>
                <p>These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Gurgaon, Haryana.</p>
              </div>
            </div>
            <div id="lgsec-privacy" className={secCls('privacy')}>
              <div className="lg2-sec-head privacy">
                <div className="lg2-badge privacy">Privacy</div>
                <div className="lg2-sec-title">Privacy Policy</div>
                <div className="lg2-sec-date">Effective: 1 January 2026 &middot; Last Updated: 14 June 2026</div>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">1</span><span className="lg2-clause-title">Information We Collect</span></div>
                <p>When you use our website or submit an enquiry, we may collect: name, company name, designation, phone number, email address, and nature of business enquiry. We do not collect personal financial information.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">2</span><span className="lg2-clause-title">How We Use Your Information</span></div>
                <ul><li>To respond to business enquiries and partnership requests</li><li>For internal record-keeping and business development</li><li>To comply with applicable legal or regulatory obligations</li></ul>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">3</span><span className="lg2-clause-title">Data Sharing</span></div>
                <p>We do not sell or rent your personal information. We may share with trusted service providers under confidentiality obligations, or as required by law.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">4</span><span className="lg2-clause-title">Data Retention</span></div>
                <p>Business enquiry data is retained for 3 years. Active agreement data is retained for the agreement duration plus 7 years per statutory requirements.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">5</span><span className="lg2-clause-title">Your Rights</span></div>
                <p>You may request access to, correction of, or deletion of your information at <a href="mailto:contact@shublabh.ltd">contact@shublabh.ltd</a>. We respond within 30 calendar days.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">6</span><span className="lg2-clause-title">Contact</span></div>
                <p>Privacy matters: <a href="mailto:contact@shublabh.ltd">contact@shublabh.ltd</a> &middot; Shubhlabh Express Pvt. Ltd., Gurgaon, Haryana 122001.</p>
              </div>
            </div>
            <div id="lgsec-shipping" className={secCls('shipping')}>
              <div className="lg2-sec-head ops">
                <div className="lg2-badge ops">Operations</div>
                <div className="lg2-sec-title">Shipping &amp; Delivery Policy</div>
                <div className="lg2-sec-date">Effective: 1 January 2026 &middot; B2B Distribution Partners Only</div>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">1</span><span className="lg2-clause-title">Scope</span></div>
                <p>This policy applies exclusively to B2B distribution and C&amp;F arrangements between Shubhlabh Express and its principal companies. We do not provide consumer-facing delivery services.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">2</span><span className="lg2-clause-title">Inbound Logistics</span></div>
                <p>Principal companies are responsible for arranging transportation to our Gurgaon warehouse unless separately agreed. Goods must be accompanied by proper invoicing, e-way bills, and delivery challans. Receipt confirmation is provided within 24 hours of physical inspection.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">3</span><span className="lg2-clause-title">Outbound Distribution Timelines</span></div>
                <ul><li><strong>Primary distribution</strong> (to wholesalers): Same-day or next business day</li><li><strong>Secondary distribution</strong> (to retailers): Within 24–48 hours, subject to route schedules</li><li><strong>Institutional deliveries:</strong> Per agreed schedule in the Principal Agreement</li></ul>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">4</span><span className="lg2-clause-title">Proof of Delivery</span></div>
                <p>All deliveries are supported by signed delivery receipts, available to principal companies on request or via regular MIS reporting.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">5</span><span className="lg2-clause-title">Damaged or Shortage Claims</span></div>
                <p>Claims must be reported within 48 hours of delivery with photographic evidence. Claims after 48 hours may not be considered.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">6</span><span className="lg2-clause-title">Force Majeure</span></div>
                <p>Distribution may be affected by holidays, weather, civil disruptions, or other force majeure events. We will communicate disruptions promptly.</p>
              </div>
            </div>
            <div id="lgsec-refund" className={secCls('refund')}>
              <div className="lg2-sec-head ops">
                <div className="lg2-badge ops">Operations</div>
                <div className="lg2-sec-title">Cancellation &amp; Refund Policy</div>
                <div className="lg2-sec-date">Effective: 1 January 2026 &middot; B2B Service Arrangements Only</div>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">1</span><span className="lg2-clause-title">Scope</span></div>
                <p>This policy governs cancellations and refunds in B2B service arrangements. As Shubhlabh Express is not a consumer-facing business, consumer protection cancellation provisions do not apply to our B2B arrangements.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">2</span><span className="lg2-clause-title">Service Agreement Cancellations</span></div>
                <p>Either party may terminate the agreement as per the notice period in the signed Principal Agreement (typically 30–90 days written notice). Orders already dispatched are not cancellable.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">3</span><span className="lg2-clause-title">Pending Stock on Termination</span></div>
                <p>Upon termination, the principal's stock at our warehouse will be returned or transferred as directed, within the timeline agreed in the exit clause of the Principal Agreement.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">4</span><span className="lg2-clause-title">Service Fee Refunds</span></div>
                <p>Pre-paid service fees are non-refundable unless Shubhlabh Express fails to commence agreed services. Margin adjustments and credit reconciliations are governed by the Principal Agreement.</p>
              </div>
              <div className="lg2-clause">
                <div className="lg2-clause-hd"><span className="lg2-clause-num">5</span><span className="lg2-clause-title">Contact</span></div>
                <p>Refund and cancellation queries: <a href="mailto:contact@shublabh.ltd">contact@shublabh.ltd</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FooterHome />
    </div>
  );
}
