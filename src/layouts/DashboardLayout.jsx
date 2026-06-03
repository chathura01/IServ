import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Calendar, MessageSquare, Star, Settings, LogOut, Bell, User, Menu, X } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <div className="dashboard-layout">
      <div
        className={`mobile-nav-backdrop ${sidebarOpen ? 'is-visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      <aside className={`sidebar ${sidebarOpen ? 'is-open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="brand-logo">IServ<span>.pro</span></Link>
          <button
            type="button"
            className="icon-btn sidebar-close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/seller"><LayoutDashboard size={18} /> Dashboard</Link>
          <Link to="/seller/profile"><User size={18} /> Profile</Link>
          <Link to="/seller/services"><Package size={18} /> My Services</Link>
          <Link to="/seller/orders"><Calendar size={18} /> Orders</Link>
          <Link to="/seller/subscriptions"><Star size={18} /> Subscriptions</Link>
          <Link to="/seller/chat"><MessageSquare size={18} /> Chats</Link>
          <Link to="/seller/reviews"><Star size={18} /> Reviews</Link>
          <Link to="/seller/settings"><Settings size={18} /> Settings</Link>
        </nav>
        <div className="sidebar-footer">
          <Link to="/"><LogOut size={18} /> Switch to User</Link>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="topbar">
          <button
            type="button"
            className="icon-btn mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <div className="topbar-search" />
          <div className="topbar-actions">
            <button type="button" className="icon-btn" aria-label="Notifications"><Bell size={20} /></button>
            <div className="user-profile">
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="avatar" />
              <div className="user-info">
                <span className="user-name">Kamal Perera</span>
                <span className="user-role">Pro Seller</span>
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
