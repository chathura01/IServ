import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import './RootLayout.css';

const RootLayout = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  return (
    <div className="root-layout">
      <header className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="brand-logo">
            IServ<span>.lk</span>
          </Link>

          <button
            type="button"
            className="icon-btn mobile-menu-btn"
            onClick={() => setNavOpen((v) => !v)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-panel ${navOpen ? 'is-open' : ''}`}>
            <nav className="nav-links">
              <Link to="/search">Explore Services</Link>
              <Link to="/seller">Become a Provider</Link>
            </nav>

            <div className="nav-actions">
              {/* <button type="button" className="icon-btn" aria-label="Search"><Search size={20} /></button> */}
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </div>
          </div>
        </div>
      </header>

      {navOpen && (
        <div
          className="mobile-nav-backdrop is-visible"
          onClick={() => setNavOpen(false)}
          aria-hidden="false"
        />
      )}

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <h2 className="brand-logo">IServ<span>.lk</span></h2>
            <p>Your trusted Sri Lankan service marketplace.</p>
          </div>
          <div className="footer-links">
            <div>
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IServ.lk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
