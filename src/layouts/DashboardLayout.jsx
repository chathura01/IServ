import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Package, Calendar, MessageSquare, Star, Settings, LogOut, Bell, User } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="brand-logo">IServ<span>.pro</span></Link>
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

      {/* Main Container */}
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-search">
            {/* Search Placeholder */}
          </div>
          <div className="topbar-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <div className="user-profile">
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="avatar" />
              <div className="user-info">
                <span className="user-name">Kamal Perera</span>
                <span className="user-role">Pro Seller</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
