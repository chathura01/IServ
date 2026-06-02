import React from 'react';
import { TrendingUp, Users, Star, Eye, Calendar, DollarSign } from 'lucide-react';
import './Seller.css';

const Dashboard = () => {
  return (
    <div className="seller-dashboard">
      <div className="dashboard-header mb-4">
        <h2>Welcome back, Saman!</h2>
        <p className="text-muted">Here's what's happening with your services today.</p>
      </div>

      {/* Summary Cards */}
      <div className="stats-grid mb-6">
        <div className="stat-card card">
          <div className="stat-icon bg-primary-light text-primary">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <p>Active Orders</p>
            <h3>12</h3>
          </div>
        </div>
        <div className="stat-card card">
          <div className="stat-icon bg-success-light text-success">
            <DollarSign size={24} />
          </div>
          <div className="stat-info">
            <p>Earnings (This Month)</p>
            <h3>Rs. 45,000</h3>
          </div>
        </div>
        <div className="stat-card card">
          <div className="stat-icon bg-warning-light text-warning">
            <Star size={24} />
          </div>
          <div className="stat-info">
            <p>Avg Rating</p>
            <h3>4.9</h3>
          </div>
        </div>
        <div className="stat-card card">
          <div className="stat-icon bg-gray-light text-muted">
            <Eye size={24} />
          </div>
          <div className="stat-info">
            <p>Profile Views</p>
            <h3>1,240</h3>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Recent Orders */}
        <div className="recent-orders card">
          <div className="card-header border-bottom">
            <div className="d-flex justify-between w-100 align-center">
               <h3>Recent Appointments</h3>
               <button className="text-primary fw-500 bg-transparent border-none cursor-pointer">View All</button>
            </div>
          </div>
          <div className="order-list">
             {[1,2,3].map(i => (
                <div key={i} className="order-item border-bottom">
                  <div className="d-flex align-center gap-3">
                    <img src={`https://i.pravatar.cc/150?img=${i+30}`} className="avatar-sm" alt="client"/>
                    <div>
                      <h4>Nimal Perera</h4>
                      <p className="text-muted text-sm mt-1">Plumbing Leak Repair</p>
                    </div>
                  </div>
                  <div className="text-right">
                     <span className={`badge mb-1 ${i === 1 ? 'badge-warning' : 'badge-success'}`}>
                       {i === 1 ? 'Pending' : 'Completed'}
                     </span>
                     <p className="text-muted text-sm mt-1">Today, 2:00 PM</p>
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Analytics Chart Placeholders */}
        <div className="analytics-card card">
          <div className="card-header border-bottom">
            <h3>Performance Overview</h3>
          </div>
          <div className="chart-placeholder">
             <div className="mock-chart">
                <div className="bar" style={{height: '30%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar" style={{height: '40%'}}></div>
                <div className="bar" style={{height: '60%'}}></div>
                <div className="bar" style={{height: '90%'}}></div>
                <div className="bar primary" style={{height: '100%'}}></div>
             </div>
             <div className="chart-labels">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
