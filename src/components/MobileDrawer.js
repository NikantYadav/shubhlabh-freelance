import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { PAGE_TO_PATH, PATH_TO_PAGE } from './Header';

export default function MobileDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = PATH_TO_PAGE[location.pathname] || 'index';

  const nav = (page) => {
    navigate(PAGE_TO_PATH[page] || '/');
    onClose();
  };

  return (
    <>
      <div className={`md-overlay${open ? ' show' : ''}`} id="mdOverlay" onClick={onClose}></div>
      <aside className={`md${open ? ' show' : ''}`} id="md" aria-hidden={!open} aria-label="Navigation menu">
        <div className="md-head">
          <a onClick={() => nav('index')} className="logo-a" aria-label="Shubhlabh Express">
            <div className="logo-pill" style={{ background: '#fff' }}><img src={logo} className="logo-img" width="30" height="30" alt="" /><div className="logo-txt"><b className="lname" style={{ color: '#0A1628' }}>Shubhlabh Express</b><span className="ltag">Prosperity in Motion</span></div></div>
          </a>
          <button className="md-close" onClick={onClose} aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
        </div>
        <nav className="md-nav">
          <button className={`md-link${activePage === 'index' ? ' md-active' : ''}`} data-page="index" onClick={() => nav('index')}><span className="md-ico"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span><span className="md-txt">Home</span></button>
          <button className={`md-link${activePage === 'about' ? ' md-active' : ''}`} data-page="about" onClick={() => nav('about')}><span className="md-ico"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg></span><span className="md-txt">About Us</span></button>
          <button className={`md-link${activePage === 'services' ? ' md-active' : ''}`} data-page="services" onClick={() => nav('services')}><span className="md-ico"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></span><span className="md-txt">Services</span></button>
          <button className={`md-link${activePage === 'coverage' ? ' md-active' : ''}`} data-page="coverage" onClick={() => nav('coverage')}><span className="md-ico"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span><span className="md-txt">Coverage</span></button>
          <button className={`md-link${activePage === 'faq' ? ' md-active' : ''}`} data-page="faq" onClick={() => nav('faq')}><span className="md-ico"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg></span><span className="md-txt">FAQ</span></button>
          <button className={`md-link${activePage === 'distribute' ? ' md-active' : ''}`} data-page="distribute" onClick={() => nav('distribute')}><span className="md-ico"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span><span className="md-txt">Hire Us</span></button>
          <button className={`md-link${activePage === 'legal' ? ' md-active' : ''}`} data-page="legal" onClick={() => nav('legal')}><span className="md-ico"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></span><span className="md-txt">Legal</span></button>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="md-link md-emp"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><span className="md-txt">Employee Login</span></a>
        </nav>
        <div className="md-foot">
          <button className="md-cta" onClick={() => nav('distribute')}>Hire Us for Distribution <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></button>
          <p className="md-note">contact@shublabh.ltd &nbsp;&middot;&nbsp; shublabh.ltd</p>
        </div>
      </aside>
    </>
  );
}
