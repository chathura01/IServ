import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Search, User, Menu } from 'lucide-react';
import './RootLayout.css';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="brand-logo">
            IServ<span>.lk</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/search">Explore Services</Link>
            <Link to="/seller">Become a Provider</Link>
          </div>

          <div className="nav-actions">
            <button className="icon-btn"><Search size={20} /></button>
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </header>

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
              <h3>Services</h3>
              <ul>
                <li>Home Repair</li>
                <li>Cleaning</li>
                <li>Tutors</li>
              </ul>
            </div>
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
