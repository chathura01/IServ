import React from 'react';
import { Clock } from 'lucide-react';

const Orders = () => {
  return (
    <div className="seller-orders">
      <div className="mb-6">
        <h2>Orders & Appointments</h2>
        <p className="text-muted">Manage your bookings and client requests.</p>
      </div>

      <div className="card" style={{padding: 0}}>
        <div className="booking-tabs w-100 d-flex" style={{borderBottom: '1px solid var(--med-gray)'}}>
           <button className="tab flex-1 pb-3 pt-3 fw-600 text-primary" style={{flex: 1, padding: '1rem', borderBottom: '2px solid var(--primary-color)', color: 'var(--primary-color)', fontWeight: 600}}>Active (2)</button>
           <button className="tab flex-1 pb-3 pt-3 fw-600 text-muted" style={{flex: 1, padding: '1rem', fontWeight: 600}}>Completed (45)</button>
           <button className="tab flex-1 pb-3 pt-3 fw-600 text-muted" style={{flex: 1, padding: '1rem', fontWeight: 600}}>Cancelled (1)</button>
        </div>
        
        <div className="table-responsive">
          <table className="w-100" style={{borderCollapse: 'collapse', textAlign: 'left', minWidth: '720px'}}>
             <thead>
               <tr className="bg-light text-muted text-sm">
                 <th className="p-4 border-bottom" style={{padding: '1rem'}}>Client</th>
                 <th className="p-4 border-bottom" style={{padding: '1rem'}}>Service</th>
                 <th className="p-4 border-bottom" style={{padding: '1rem'}}>Date & Time</th>
                 <th className="p-4 border-bottom" style={{padding: '1rem'}}>Amount</th>
                 <th className="p-4 border-bottom" style={{padding: '1rem'}}>Status</th>
                 <th className="p-4 border-bottom" style={{padding: '1rem'}}>Action</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td className="p-4 border-bottom d-flex align-center gap-3" style={{padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                   <img src="https://i.pravatar.cc/150?img=11" className="avatar-sm" alt="C" style={{width: '32px', height: '32px'}} />
                   <strong>Kasun S.</strong>
                 </td>
                 <td className="border-bottom" style={{padding: '1rem'}}>Plumbing Leak Repair</td>
                 <td className="border-bottom" style={{padding: '1rem'}}>
                   <div className="d-flex align-center text-sm" style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Clock size={14}/> Today, 2:00 PM</div>
                 </td>
                 <td className="border-bottom fw-600" style={{padding: '1rem', fontWeight: 600}}>Rs. 3,500</td>
                 <td className="border-bottom" style={{padding: '1rem'}}><span className="badge badge-warning">Pending</span></td>
                 <td className="border-bottom" style={{padding: '1rem'}}>
                    <button className="btn btn-outline" style={{padding:'0.4rem 0.8rem', fontSize: '0.875rem'}}>View</button>
                 </td>
               </tr>
               <tr>
                 <td className="p-4 border-bottom d-flex align-center gap-3" style={{padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                   <img src="https://i.pravatar.cc/150?img=12" className="avatar-sm" alt="C" style={{width: '32px', height: '32px'}} />
                   <strong>Amali P.</strong>
                 </td>
                 <td className="border-bottom" style={{padding: '1rem'}}>Pipe Installation</td>
                 <td className="border-bottom" style={{padding: '1rem'}}>
                   <div className="d-flex align-center text-sm" style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Clock size={14}/> Tomorrow, 10:00 AM</div>
                 </td>
                 <td className="border-bottom fw-600" style={{padding: '1rem', fontWeight: 600}}>Rs. 12,000</td>
                 <td className="border-bottom" style={{padding: '1rem'}}><span className="badge badge-warning">Scheduled</span></td>
                 <td className="border-bottom" style={{padding: '1rem'}}>
                    <button className="btn btn-outline" style={{padding:'0.4rem 0.8rem', fontSize: '0.875rem'}}>View</button>
                 </td>
               </tr>
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Orders;
