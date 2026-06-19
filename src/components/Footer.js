import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { PAGE_TO_PATH } from './Header';

/*
  NOTE: the original site has TWO distinct footer markups:
  - Home page ("page-index") uses the rich `.ft2-*` 4-column footer (FooterHome below)
  - All other 6 pages use a simpler `.ft-*` footer (FooterSimple below, the default export)
  They were verified byte-identical across about/services/coverage/faq/distribute/legal.
*/

function navTo(navigate, page, anchor) {
  navigate(PAGE_TO_PATH[page] || '/', anchor ? { state: { anchor } } : undefined);
}

export default function Footer() {
  const navigate = useNavigate();
  const nav = (page, anchor) => navTo(navigate, page, anchor);

  return (
    <footer className="ft">
      <div className="ft-in">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="ft-logo"><div className="logo-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><img src={logo} alt="SE" width="28" height="28" style={{ objectFit: 'contain' }} /><div className="logo-txt"><b className="lname">Shubhlabh Express</b><span className="ltag">Prosperity in Motion</span></div></div></div>
            <p className="ft-desc" style={{ color: '#fff' }}>Gurgaon's dedicated B2B distribution &amp; C&amp;F partner — connecting manufacturers with 2,000+ retail touchpoints across Gurgaon NCR. A new age company founded in 2026.</p>
            <div className="ft-contact"><a href="mailto:contact@shublabh.ltd">contact@shublabh.ltd</a><a href="https://shublabh.ltd">shublabh.ltd</a><span>Gurgaon, Haryana 122001</span><span style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginTop: 4 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2, opacity: .7 }}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>Plot No 780, Wazirabad, Main Market, Sector 52, Gurugram 122003</span></div>
          </div>
          <div className="ft-cols">
            <div className="ft-col"><div className="ft-ct">Company</div><a onClick={() => nav('about')}>About Us</a><a onClick={() => nav('services')}>Services</a><a onClick={() => nav('coverage')}>Coverage</a><a onClick={() => nav('faq')}>FAQ</a><a onClick={() => nav('distribute')}>Hire Us</a></div>
            <div className="ft-col"><div className="ft-ct">Legal</div><a onClick={() => nav('legal', 'terms')}>Terms &amp; Conditions</a><a onClick={() => nav('legal', 'privacy')}>Privacy Policy</a><a onClick={() => nav('legal', 'shipping')}>Shipping Policy</a><a onClick={() => nav('legal', 'refund')}>Refund Policy</a></div>
            <div className="ft-col"><div className="ft-ct">Contact</div><a href="mailto:contact@shublabh.ltd">contact@shublabh.ltd</a><a href="https://wa.me/919999988888">+91 99999 88888</a><a href="https://shublabh.ltd">shublabh.ltd</a></div>
          </div>
        </div>
        <div className="ft-bot">
          <span>&copy; 2026 Shubhlabh Express Pvt. Ltd. All rights reserved.</span>
          <div className="ft-legal"><a onClick={() => nav('legal', 'terms')}>Terms</a><a onClick={() => nav('legal', 'privacy')}>Privacy</a><a onClick={() => nav('legal', 'shipping')}>Shipping</a><a onClick={() => nav('legal', 'refund')}>Refunds</a></div>
        </div>
      </div>
    </footer>
  );
}

export function FooterHome() {
  const navigate = useNavigate();
  const nav = (page, anchor) => navTo(navigate, page, anchor);

  return (
    <footer className="ft">
      <div className="ft-main">
        <div className="ft2-brand">
          <div className="ft2-logo">
            <div className="ft2-logo-pill"><img src={logo} className="ft2-logo-img" width="26" height="26" alt="SE" /></div>
            <div><div className="ft2-logo-name">Shubhlabh Express</div><div className="ft2-logo-tag">Prosperity in Motion</div></div>
          </div>
          <p className="ft2-desc">Gurgaon&rsquo;s dedicated B2B distribution &amp; C&amp;F partner &mdash; connecting manufacturers with 2,000+ retail touchpoints across NCR. Founded 2026.</p>
          <div className="ft2-info">
            <a href="mailto:contact@shublabh.ltd" className="ft2-info-row"><svg className="ft2-info-ico" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" /></svg><span>contact@shublabh.ltd</span></a>
            <a href="tel:+919999988888" className="ft2-info-row"><svg className="ft2-info-ico" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.36 8.5a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg><span>+91 99999 88888</span></a>
            <a href="https://shublabh.ltd" target="_blank" rel="noopener noreferrer" className="ft2-info-row"><svg className="ft2-info-ico" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg><span>shublabh.ltd</span></a>
            <div className="ft2-info-row"><svg className="ft2-info-ico" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg><span>Plot No 780, Wazirabad, Main Market, Sector 52, Gurugram 122003</span></div>
          </div>
          <div className="ft2-social">
            <a href="https://www.linkedin.com/in/shubhlabh-express-private-limited-8a7ba1415/" target="_blank" rel="noopener noreferrer" className="ft2-soc" aria-label="LinkedIn"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ft2-soc" aria-label="Instagram"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="ft2-soc" aria-label="Facebook"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
          </div>
        </div>
        <div>
          <div className="ft2-col-title">Company</div>
          <nav className="ft2-nav">
            <button className="ft2-link" onClick={() => nav('index')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" /></svg>Home</button>
            <button className="ft2-link" onClick={() => nav('about')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>About Us</button>
            <button className="ft2-link" onClick={() => nav('services')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>Services</button>
            <button className="ft2-link" onClick={() => nav('coverage')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6" /></svg>Coverage</button>
            <button className="ft2-link" onClick={() => nav('faq')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3 M12 17h.01" /></svg>FAQ</button>
            <button className="ft2-link" onClick={() => nav('distribute')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" /></svg>Hire Us</button>
          </nav>
        </div>
        <div>
          <div className="ft2-col-title">Legal</div>
          <nav className="ft2-nav">
            <button className="ft2-link" onClick={() => nav('legal', 'terms')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8" /></svg>Terms &amp; Conditions</button>
            <button className="ft2-link" onClick={() => nav('legal', 'privacy')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Privacy Policy</button>
            <button className="ft2-link" onClick={() => nav('legal', 'shipping')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3 M9 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0 M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0 M13 9h8l1 5H13V9z" /></svg>Shipping Policy</button>
            <button className="ft2-link" onClick={() => nav('legal', 'refund')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4v6h6 M23 20v-6h-6 M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" /></svg>Refund Policy</button>
          </nav>
        </div>
        <div>
          <div className="ft2-col-title">Work With Us</div>
          <nav className="ft2-nav">
            <button className="ft2-link" onClick={() => nav('distribute')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" /></svg>Distribute With Us</button>
            <button className="ft2-link" onClick={() => nav('distribute')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>C&amp;F Partnership</button>
            <button className="ft2-link" onClick={() => nav('distribute')}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3 M9 17a2 2 0 1 0 4 0 M17 17a2 2 0 1 0 4 0 M13 9h8l1 5H13V9z" /></svg>Logistics Enquiry</button>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="ft2-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .50, flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>Employee Login</a>
          </nav>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="ft2-bot">
          <span className="ft2-copy">&copy; 2026 Shubhlabh Express Pvt. Ltd. All rights reserved.</span>
          <div className="ft2-bot-links">
            <button className="ft2-bot-link" onClick={() => nav('legal', 'terms')}>Terms</button>
            <button className="ft2-bot-link" onClick={() => nav('legal', 'privacy')}>Privacy</button>
            <button className="ft2-bot-link" onClick={() => nav('legal', 'shipping')}>Shipping</button>
            <button className="ft2-bot-link" onClick={() => nav('legal', 'refund')}>Refunds</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
