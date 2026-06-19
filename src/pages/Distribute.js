import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const Chk = () => (
  <div className="echk"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></div>
);

export default function Distribute() {
  const navigate = useNavigate();
  const nav = (page, anchor) =>
    navigate(page === 'index' ? '/' : `/${page}`, anchor ? { state: { anchor } } : undefined);
  useRevealOnScroll();

  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', cat: '', vol: '', msg: '' });
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');
  const errRef = useRef(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const doSubmit = () => {
    var name = form.name.trim();
    var company = form.company.trim();
    var phone = form.phone.trim();
    var email = form.email.trim();
    var cat = form.cat;
    var msg = form.msg.trim();

    var errs = [];
    if (!name) errs.push('Your Name is required.');
    if (!company) errs.push('Company is required.');
    if (!phone || !/^[+\d\s\-()]{7,15}$/.test(phone)) errs.push('A valid phone number is required.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('A valid email address is required.');
    if (!cat) errs.push('Please select a product category.');

    if (errs.length) {
      setErrors(errs);
      setShowErrors(true);
      setTimeout(function () {
        if (errRef.current) errRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 0);
      return;
    }
    setShowErrors(false);
    setSendError('');
    setSubmitting(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          company: company,
          phone: phone,
          email: email,
          category: cat,
          volume: form.vol || 'Not specified',
          message: msg,
          to_email: process.env.REACT_APP_TO_EMAIL,
        },
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(function () {
        setSubmitting(false);
        setSent(true);
        setTimeout(function () {
          setSent(false);
        }, 5000);
      })
      .catch(function (err) {
        setSubmitting(false);
        setSendError('Something went wrong sending your enquiry. Please try again or email us directly.');
        console.error('EmailJS error:', err);
      });
  };

  return (
    <div className="page-section pg active" id="page-distribute">
      <div className="phero"><div className="phero-in"><div className="peb r">Partner With Us</div><h1 className="r d1">Hire us for your<br /><span>Gurgaon distribution</span></h1><p className="plead r d2">Tell us your product and distribution requirements. Our team responds within one business day with a tailored proposal.</p></div></div>
      <section className="sec" style={{ background: '#fff' }}><div className="sec-in"><div className="dg">
        <div className="r">
          <div className="div"></div>
          <h2 className="sh" style={{ marginBottom: 12 }}>Get in touch</h2>
          <p className="sp" style={{ marginBottom: 24 }}>Reach us directly or fill the form — we respond within one business day.</p>
          <div className="ccrd"><div className="ccrd-ico"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 8 8l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18z" /></svg></div><div><div className="cclbl">Phone &amp; WhatsApp</div><div className="ccval">+91 99999 88888</div><div className="ccsub">Mon–Sat, 9 AM – 7 PM IST</div></div></div>
          <div className="ccrd"><div className="ccrd-ico"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div><div><div className="cclbl">Email</div><div className="ccval">contact@shublabh.ltd</div><div className="ccsub">Business &amp; partnership enquiries</div></div></div>
          <div className="ccrd"><div className="ccrd-ico"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><div className="cclbl">Location</div><div className="ccval">Gurgaon, Haryana 122001</div><div className="ccsub">Serving all of Gurgaon NCR</div></div></div>
          <div className="ebox" style={{ marginTop: 8 }}>
            <div className="ebox-t">Who should contact us</div>
            <div className="ei"><Chk />Manufacturers &amp; FMCG companies</div>
            <div className="ei"><Chk />Pet food &amp; pet care brands</div>
            <div className="ei"><Chk />Importers &amp; consumer goods companies</div>
            <div className="ei"><Chk />Brands entering Gurgaon market</div>
            <div className="ei"><Chk />Companies seeking C&amp;F agent in Gurgaon</div>
          </div>
        </div>
        <div className="fcard r d1">
          <div className="peb" style={{ display: 'inline-flex', marginBottom: 12 }}>Distribution Enquiry</div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)', marginBottom: 5, letterSpacing: '-.02em' }}>Tell us your requirements</h3>
          <p style={{ fontSize: 14, color: '#334155', marginBottom: 22 }}>We respond within one business day.</p>
          <div className="f2c"><div className="fg2"><label htmlFor="fi-name">Your Name *</label><input id="fi-name" type="text" placeholder="Full name" autoComplete="name" value={form.name} onChange={set('name')} /></div><div className="fg2"><label htmlFor="fi-company">Company *</label><input id="fi-company" type="text" placeholder="Company / Brand" autoComplete="organization" value={form.company} onChange={set('company')} /></div></div>
          <div className="f2c"><div className="fg2"><label htmlFor="fi-phone">Phone *</label><input id="fi-phone" type="tel" placeholder="+91 XXXXX XXXXX" autoComplete="tel" value={form.phone} onChange={set('phone')} /></div><div className="fg2"><label htmlFor="fi-email">Email *</label><input id="fi-email" type="email" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={set('email')} /></div></div>
          <div className="fg2"><label htmlFor="fi-cat">Product Category *</label><select id="fi-cat" value={form.cat} onChange={set('cat')}><option value="" disabled>Select category</option><option>FMCG – Food &amp; Beverages</option><option>FMCG – Personal Care</option><option>FMCG – Home Care</option><option>Pet Food &amp; Pet Care</option><option>Packaged Water &amp; Beverages</option><option>Institutional &amp; B2B Goods</option><option>Other Consumer Goods</option></select></div>
          <div className="fg2"><label htmlFor="fi-vol">Monthly Volume (approx.)</label><select id="fi-vol" value={form.vol} onChange={set('vol')}><option value="" disabled>Select range</option><option>Under 500 units/month</option><option>500–2,000 units/month</option><option>2,000–10,000 units/month</option><option>10,000+ units/month</option><option>To be discussed</option></select></div>
          <div className="fg2"><label htmlFor="fi-msg">Requirements</label><textarea id="fi-msg" placeholder="Tell us about your product, target zones, current distribution setup, and what you need from a distribution partner..." value={form.msg} onChange={set('msg')}></textarea></div>
          <div ref={errRef} id="form-errors" style={{ display: showErrors ? 'block' : 'none', background: '#FFF0F0', border: '1.5px solid #F87171', borderRadius: 9, padding: '12px 14px', fontSize: 13, color: '#B91C1C', marginBottom: 12 }}>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
          {sendError && (
            <div style={{ background: '#FFF0F0', border: '1.5px solid #F87171', borderRadius: 9, padding: '12px 14px', fontSize: 13, color: '#B91C1C', marginBottom: 12 }}>
              {sendError}
            </div>
          )}
          <button id="sb" className="btn btn-t" style={{ width: '100%', justifyContent: 'center', background: submitting || sent ? 'linear-gradient(135deg,#007A72,#005F5A)' : '' }} onClick={doSubmit} disabled={submitting}>
            {sent ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg> Enquiry Sent — We'll Be in Touch
              </>
            ) : submitting ? (
              <>Sending…</>
            ) : (
              <>
                Send Enquiry <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </>
            )}
          </button>
          <p className="fnote">We respect your privacy. <a onClick={() => nav('legal', 'privacy')} style={{ color: 'var(--teal)' }}>Privacy Policy</a></p>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: 'var(--navy)' }}>
        <div className="sec-in">
          <div className="div" style={{ background: 'linear-gradient(90deg,#00A99D,#4ABCF5)' }}></div>
          <div className="eb r" style={{ color: '#00D4C5' }}>How We Work</div>
          <h2 className="sh r d1" style={{ color: '#fff', marginBottom: 10 }}>From first call to full distribution<br /><span>in five clear steps</span></h2>
          <p className="sp r d2" style={{ color: 'rgba(255,255,255,.90)', marginBottom: 48 }}>A transparent, structured onboarding designed so you always know what happens next.</p>

          <div className="proc-steps r d3">

            <div className="proc-row">
              <div className="proc-ncol">
                <div className="proc-badge">1</div>
                <div className="proc-vstem"></div>
              </div>
              <div className="proc-card">
                <div className="proc-slabel">Step 1</div>
                <div className="proc-title">Initial Discussion &amp; Alignment</div>
                <p className="proc-desc">We understand your product category, target zones, pricing norms, and SOP requirements. We share our capabilities and discuss fit transparently.</p>
              </div>
            </div>

            <div className="proc-row">
              <div className="proc-ncol">
                <div className="proc-badge">2</div>
                <div className="proc-vstem"></div>
              </div>
              <div className="proc-card">
                <div className="proc-slabel">Step 2</div>
                <div className="proc-title">Principal Agreement Signing</div>
                <p className="proc-desc">We execute a formal C&amp;F or distribution agreement covering territory, margins, SLAs, MIS requirements, credit terms, and exit provisions.</p>
              </div>
            </div>

            <div className="proc-row">
              <div className="proc-ncol">
                <div className="proc-badge">3</div>
                <div className="proc-vstem"></div>
              </div>
              <div className="proc-card">
                <div className="proc-slabel">Step 3</div>
                <div className="proc-title">Stock Transfer &amp; Onboarding</div>
                <p className="proc-desc">Your first consignment arrives at our Gurgaon warehouse. We complete inward documentation, inventory setup, and systems within 24 hours.</p>
              </div>
            </div>

            <div className="proc-row">
              <div className="proc-ncol">
                <div className="proc-badge">4</div>
                <div className="proc-vstem"></div>
              </div>
              <div className="proc-card">
                <div className="proc-slabel">Step 4</div>
                <div className="proc-title">Market Activation</div>
                <p className="proc-desc">Our sales team begins active distribution — reaching existing retail relationships and onboarding new outlets, executing your planogram from day one.</p>
              </div>
            </div>

            <div className="proc-row">
              <div className="proc-ncol">
                <div className="proc-badge proc-badge-sky">5</div>
              </div>
              <div className="proc-card proc-card-sky">
                <div className="proc-slabel proc-slabel-sky">Step 5</div>
                <div className="proc-title">Ongoing MIS &amp; Growth</div>
                <p className="proc-desc">Regular reports, collections statements, and performance reviews keep you fully informed. As volumes grow, we scale infrastructure to match.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#040A08' }}>
        <div className="sec-in">
          <div className="div" style={{ background: 'linear-gradient(90deg,#1D9E75,#185FA5)' }}></div>
          <div className="eb r" style={{ color: '#1D9E75' }}>Why choose us</div>
          <h2 className="sh r d1" style={{ color: '#fff', marginBottom: 10 }}>Six reasons manufacturers<br /><span>choose us</span></h2>
          <p className="sp r d2" style={{ color: 'rgba(255,255,255,.90)', marginBottom: 48 }}>What makes Shubhlabh Express the right distribution partner for your brand in Gurgaon.</p>

          <div className="rsn-grid r d3">

            <div className="rsn-cell">
              <div className="rsn-top rsn-top-teal"></div>
              <div className="rsn-num">01</div>
              <div className="rsn-title">Gurgaon Market Depth</div>
              <p className="rsn-body">Specialists, not generalists. Our team knows every zone, buyer, and channel in the city.</p>
            </div>

            <div className="rsn-cell">
              <div className="rsn-top rsn-top-teal"></div>
              <div className="rsn-num">02</div>
              <div className="rsn-title">Principal-First Approach</div>
              <p className="rsn-body">We follow your planogram, pricing, and SOPs. Your secondary sales is our success metric.</p>
            </div>

            <div className="rsn-cell">
              <div className="rsn-top rsn-top-teal"></div>
              <div className="rsn-num">03</div>
              <div className="rsn-title">Multi-Category Capability</div>
              <p className="rsn-body">FMCG, beverages, food, pet care — we handle multiple categories with the same rigour.</p>
            </div>

            <div className="rsn-cell">
              <div className="rsn-top rsn-top-teal"></div>
              <div className="rsn-num">04</div>
              <div className="rsn-title">Full Compliance</div>
              <p className="rsn-body">GST-compliant invoicing, proper C&amp;F documentation, and regulatory adherence — no shortcuts.</p>
            </div>

            <div className="rsn-cell">
              <div className="rsn-top rsn-top-sky"></div>
              <div className="rsn-num">05</div>
              <div className="rsn-title">Fast Activation</div>
              <p className="rsn-body">New principals are typically market-ready within 24–48 hours of agreement signing.</p>
            </div>

            <div className="rsn-cell">
              <div className="rsn-top rsn-top-sky"></div>
              <div className="rsn-num">06</div>
              <div className="rsn-title">Dedicated Contact</div>
              <p className="rsn-body">Every principal gets a named account manager with direct access and clear accountability.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
