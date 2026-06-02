import React from 'react';
import { Home, Users, CheckSquare, Settings, Activity, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-layout" style={{display: 'flex', height: '100vh', background: 'var(--light-gray)'}}>
      <aside className="admin-sidebar" style={{width: 250, background: 'var(--accent-navy)', color: 'white', display: 'flex', flexDirection: 'column'}}>
        <div style={{padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
           <h2 style={{fontSize: '1.5rem', color: 'white'}}>IServ<span style={{color: 'var(--primary-color)'}}>.admin</span></h2>
        </div>
        <nav style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', flex: 1}}>
           <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: 'white', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)'}}><Home size={18}/> Dashboard</a>
           <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: 'inherit'}}><Users size={18}/> Users & Providers</a>
           <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: 'inherit'}}><CheckSquare size={18}/> Approvals (12)</a>
           <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: 'inherit'}}><Activity size={18}/> Revenue Analytics</a>
           <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: 'inherit'}}><FileText size={18}/> Support Tickets</a>
           <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: 'inherit'}}><Settings size={18}/> Platform Settings</a>
        </nav>
        <div style={{padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
           <Link to="/" style={{color: 'var(--text-muted)'}}>Exit Admin</Link>
        </div>
      </aside>

      <main style={{flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
        <header style={{height: '4.5rem', background: 'white', borderBottom: '1px solid var(--med-gray)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem'}}>
           <h3 style={{fontSize: '1.125rem'}}>Super Admin Overview</h3>
           <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
              <span className="badge badge-success">System Online - All systems operational</span>
           </div>
        </header>
        <div style={{flex: 1, padding: '2rem', overflowY: 'auto'}}>
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem'}}>
              <div className="card" style={{padding: '1.5rem'}}>
                 <p className="text-muted text-sm">Total Revenue (MTD)</p>
                 <h2 style={{fontSize: '1.75rem', color: 'var(--text-main)', marginTop: '0.5rem'}}>Rs. 450,000</h2>
              </div>
              <div className="card" style={{padding: '1.5rem'}}>
                 <p className="text-muted text-sm">Active Providers</p>
                 <h2 style={{fontSize: '1.75rem', color: 'var(--text-main)', marginTop: '0.5rem'}}>2,450</h2>
              </div>
              <div className="card" style={{padding: '1.5rem'}}>
                 <p className="text-muted text-sm">Pending Verifications</p>
                 <h2 style={{fontSize: '1.75rem', color: 'var(--primary-color)', marginTop: '0.5rem'}}>12</h2>
              </div>
              <div className="card" style={{padding: '1.5rem'}}>
                 <p className="text-muted text-sm">Platform Health</p>
                 <h2 style={{fontSize: '1.75rem', color: 'var(--success-green)', marginTop: '0.5rem'}}>100%</h2>
              </div>
           </div>

           <div className="card" style={{padding: '1.5rem'}}>
              <h3 style={{marginBottom: '1rem', borderBottom: '1px solid var(--med-gray)', paddingBottom: '1rem'}}>Recent Provider Approvals</h3>
              <table className="w-100" style={{textAlign: 'left', borderCollapse: 'collapse'}}>
                 <thead>
                    <tr className="text-muted text-sm border-bottom">
                       <th style={{padding: '1rem 0'}}>Provider Name</th>
                       <th style={{padding: '1rem 0'}}>Category</th>
                       <th style={{padding: '1rem 0'}}>Submitted</th>
                       <th style={{padding: '1rem 0'}}>Status</th>
                       <th style={{padding: '1rem 0'}}>Action</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td style={{padding: '1rem 0'}}><strong>Upul Electronics</strong></td>
                       <td style={{padding: '1rem 0'}}>A/C Repair</td>
                       <td style={{padding: '1rem 0'}}>Today, 10:00 AM</td>
                       <td style={{padding: '1rem 0'}}><span className="badge badge-warning">Pending</span></td>
                       <td style={{padding: '1rem 0'}}><button className="btn btn-outline btn-sm" style={{padding: '0.4rem 0.8rem'}}>Review Docs</button></td>
                    </tr>
                 </tbody>
              </table>
           </div>

           <div className="card" style={{padding: '1.5rem', marginTop: '1.5rem'}}>
              <h3 style={{marginBottom: '1rem', borderBottom: '1px solid var(--med-gray)', paddingBottom: '1rem', color: 'var(--danger-red)'}}>Flagged Ads & Reports Queue</h3>
              <table className="w-100" style={{textAlign: 'left', borderCollapse: 'collapse'}}>
                 <thead>
                    <tr className="text-muted text-sm border-bottom">
                       <th style={{padding: '1rem 0'}}>Reported Service</th>
                       <th style={{padding: '1rem 0'}}>Provider</th>
                       <th style={{padding: '1rem 0'}}>Reason</th>
                       <th style={{padding: '1rem 0'}}>Reported By</th>
                       <th style={{padding: '1rem 0'}}>Action</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td style={{padding: '1rem 0', fontWeight: 500}}>Professional Bathroom Plumbing...</td>
                       <td style={{padding: '1rem 0'}}>Saman Kumara</td>
                       <td style={{padding: '1rem 0'}}><span className="badge" style={{background: '#fee2e2', color: 'var(--danger-red)'}}>False Information</span></td>
                       <td style={{padding: '1rem 0'}}>Kasun S.</td>
                       <td style={{padding: '1rem 0'}}>
                          <button className="btn btn-outline btn-sm" style={{padding: '0.4rem 0.8rem', color: 'var(--danger-red)', borderColor: 'var(--danger-red)'}}>Review Ticket</button>
                       </td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>
      </main>
    </div>
  );
};
export default AdminDashboard;
