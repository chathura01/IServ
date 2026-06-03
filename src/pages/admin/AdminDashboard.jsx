import React from 'react';
import { Home, Users, CheckSquare, Settings, Activity, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
           <h2>IServ<span>.admin</span></h2>
        </div>
        <nav className="admin-nav">
           <a href="#" className="admin-nav-link is-active"><Home size={18}/> Dashboard</a>
           <a href="#" className="admin-nav-link"><Users size={18}/> Users & Providers</a>
           <a href="#" className="admin-nav-link"><CheckSquare size={18}/> Approvals (12)</a>
           <a href="#" className="admin-nav-link"><Activity size={18}/> Revenue Analytics</a>
           <a href="#" className="admin-nav-link"><FileText size={18}/> Support Tickets</a>
           <a href="#" className="admin-nav-link"><Settings size={18}/> Platform Settings</a>
        </nav>
        <div className="admin-sidebar-footer">
           <Link to="/">Exit Admin</Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
           <h3>Super Admin Overview</h3>
           <span className="badge badge-success admin-status-badge">System Online</span>
        </header>
        <div className="admin-content">
           <div className="admin-stats-grid">
              <div className="card p-4">
                 <p className="text-muted text-sm">Total Revenue (MTD)</p>
                 <h2 className="admin-stat-value">Rs. 450,000</h2>
              </div>
              <div className="card p-4">
                 <p className="text-muted text-sm">Active Providers</p>
                 <h2 className="admin-stat-value">2,450</h2>
              </div>
              <div className="card p-4">
                 <p className="text-muted text-sm">Pending Verifications</p>
                 <h2 className="admin-stat-value text-primary">12</h2>
              </div>
              <div className="card p-4">
                 <p className="text-muted text-sm">Platform Health</p>
                 <h2 className="admin-stat-value text-success">100%</h2>
              </div>
           </div>

           <div className="card p-4 mb-4">
              <h3 className="admin-section-title">Recent Provider Approvals</h3>
              <div className="table-responsive">
                <table className="w-100 admin-table">
                   <thead>
                      <tr className="text-muted text-sm">
                         <th>Provider Name</th>
                         <th>Category</th>
                         <th>Submitted</th>
                         <th>Status</th>
                         <th>Action</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <td><strong>Upul Electronics</strong></td>
                         <td>A/C Repair</td>
                         <td>Today, 10:00 AM</td>
                         <td><span className="badge badge-warning">Pending</span></td>
                         <td><button type="button" className="btn btn-outline btn-sm">Review Docs</button></td>
                      </tr>
                   </tbody>
                </table>
              </div>
           </div>

           <div className="card p-4">
              <h3 className="admin-section-title text-danger-red">Flagged Ads & Reports Queue</h3>
              <div className="table-responsive">
                <table className="w-100 admin-table">
                   <thead>
                      <tr className="text-muted text-sm">
                         <th>Reported Service</th>
                         <th>Provider</th>
                         <th>Reason</th>
                         <th>Reported By</th>
                         <th>Action</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <td><strong>Professional Bathroom Plumbing...</strong></td>
                         <td>Saman Kumara</td>
                         <td><span className="badge badge-danger-soft">False Information</span></td>
                         <td>Kasun S.</td>
                         <td>
                            <button type="button" className="btn btn-outline btn-sm danger-outline-btn">Review Ticket</button>
                         </td>
                      </tr>
                   </tbody>
                </table>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};
export default AdminDashboard;
