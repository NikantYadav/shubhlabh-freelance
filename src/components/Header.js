import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const PAGE_TO_PATH = {
  index: '/',
  about: '/about',
  services: '/services',
  coverage: '/coverage',
  faq: '/faq',
  distribute: '/distribute',
  legal: '/legal',
};

const PATH_TO_PAGE = {
  '/': 'index',
  '/about': 'about',
  '/services': 'services',
  '/coverage': 'coverage',
  '/faq': 'faq',
  '/distribute': 'distribute',
  '/legal': 'legal',
};

export default function Header({ hidden, onToggleDrawer }) {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = PATH_TO_PAGE[location.pathname] || 'index';

  const nav = (page, anchor) => {
    const path = PAGE_TO_PATH[page] || '/';
    navigate(path, anchor ? { state: { anchor } } : undefined);
  };

  return (
    <header id="hdr" style={hidden ? { transform: 'translateY(-100%)' } : undefined}>
      <div className="hdr-top">
        <div className="hdr-top-in">

          {/* Logo */}
          <a onClick={() => nav('index')} className="logo-a" aria-label="Shubhlabh Express">
            <div className="logo-pill" style={{ background: '#fff' }}>
              <img src={logo} className="logo-img" width="30" height="30" alt="Shubhlabh Express" />
              <div className="logo-txt">
                <b className="lname" style={{ color: '#0A1628' }}>Shubhlabh Express</b>
                <span className="ltag">Prosperity in Motion</span>
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="dt-nav" aria-label="Main">
            <button className={`dn-link${activePage === 'index' ? ' dn-active' : ''}`} onClick={() => nav('index')}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4, verticalAlign: '-2px' }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>Home</button>
            <button className={`dn-link${activePage === 'about' ? ' dn-active' : ''}`} onClick={() => nav('about')}>About Us</button>
            <button className={`dn-link${activePage === 'services' ? ' dn-active' : ''}`} onClick={() => nav('services')}>Services</button>
            <button className={`dn-link${activePage === 'coverage' ? ' dn-active' : ''}`} onClick={() => nav('coverage')}>Coverage</button>
            <button className={`dn-link${activePage === 'faq' ? ' dn-active' : ''}`} onClick={() => nav('faq')}>FAQ</button>
            <button className="dn-hire" onClick={() => nav('distribute')}>Hire Us</button>
            <button className={`dn-link${activePage === 'legal' ? ' dn-active' : ''}`} onClick={() => nav('legal')}>Legal</button>
          </nav>

          {/* Right: social + employee login + hamburger */}
          <div className="hdr-right">
            {/* Social icons – desktop only */}
            <div className="hdr-socials">
              <a href="https://www.linkedin.com/in/shubhlabh-express-private-limited-8a7ba1415/" target="_blank" rel="noopener noreferrer" className="hdr-soc" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hdr-soc" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hdr-soc" aria-label="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
            {/* Employee login */}
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="dn-emp">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Employee Login
            </a>
            {/* Hamburger */}
            <button className="hbtn" id="hbtn" onClick={onToggleDrawer} aria-label="Menu" aria-expanded="false">
              <span className="hb"></span><span className="hb"></span><span className="hb"></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export { PAGE_TO_PATH, PATH_TO_PAGE };
