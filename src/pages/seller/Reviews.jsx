import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import './Seller.css';

const Reviews = () => {
  return (
    <div className="seller-reviews">
      <div className="mb-6">
        <h2>Reviews & Ratings</h2>
        <p className="text-muted">Manage your client feedback and respond to reviews.</p>
      </div>

      {/* Analytics */}
      <div className="stats-grid mb-6">
        <div className="stat-card card">
          <div className="stat-info w-100 text-center">
            <h3 style={{fontSize: '2.5rem', color: 'var(--warning-orange)', marginBottom: '0.5rem', fontWeight: 800}}>4.9</h3>
            <div className="d-flex justify-center mb-2" style={{gap: '0.25rem', justifyContent: 'center'}}>
               {[1,2,3,4,5].map(s => <Star key={s} size={24} fill="var(--warning-orange)" color="var(--warning-orange)"/>)}
            </div>
            <p className="text-muted mt-3">150 Total Reviews</p>
          </div>
        </div>
        <div className="card d-flex flex-column" style={{gridColumn: 'span 1', padding: '1.5rem', gap: '0.75rem'}}>
           <h4 className="mb-3">Rating Breakdown</h4>
           <div className="d-flex align-center gap-3">
              <span style={{width: 30, display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600}}>5 <Star size={14} fill="var(--med-gray)" color="var(--med-gray)"/></span>
              <div style={{flex: 1, background: 'var(--light-gray)', height: 8, borderRadius: 4}}><div style={{width: '85%', background: 'var(--warning-orange)', height: '100%', borderRadius: 4}}></div></div>
              <span className="text-sm text-muted" style={{width: 30}}>130</span>
           </div>
           <div className="d-flex align-center gap-3">
              <span style={{width: 30, display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600}}>4 <Star size={14} fill="var(--med-gray)" color="var(--med-gray)"/></span>
              <div style={{flex: 1, background: 'var(--light-gray)', height: 8, borderRadius: 4}}><div style={{width: '10%', background: 'var(--warning-orange)', height: '100%', borderRadius: 4}}></div></div>
              <span className="text-sm text-muted" style={{width: 30}}>15</span>
           </div>
           <div className="d-flex align-center gap-3">
              <span style={{width: 30, display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600}}>3 <Star size={14} fill="var(--med-gray)" color="var(--med-gray)"/></span>
              <div style={{flex: 1, background: 'var(--light-gray)', height: 8, borderRadius: 4}}><div style={{width: '2%', background: 'var(--warning-orange)', height: '100%', borderRadius: 4}}></div></div>
              <span className="text-sm text-muted" style={{width: 30}}>3</span>
           </div>
           <div className="d-flex align-center gap-3">
              <span style={{width: 30, display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600}}>2 <Star size={14} fill="var(--med-gray)" color="var(--med-gray)"/></span>
              <div style={{flex: 1, background: 'var(--light-gray)', height: 8, borderRadius: 4}}><div style={{width: '1%', background: 'var(--warning-orange)', height: '100%', borderRadius: 4}}></div></div>
              <span className="text-sm text-muted" style={{width: 30}}>1</span>
           </div>
           <div className="d-flex align-center gap-3">
              <span style={{width: 30, display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600}}>1 <Star size={14} fill="var(--med-gray)" color="var(--med-gray)"/></span>
              <div style={{flex: 1, background: 'var(--light-gray)', height: 8, borderRadius: 4}}><div style={{width: '1%', background: 'var(--warning-orange)', height: '100%', borderRadius: 4}}></div></div>
              <span className="text-sm text-muted" style={{width: 30}}>1</span>
           </div>
        </div>
      </div>

      <div className="card" style={{padding: '1.5rem'}}>
         <h3 className="mb-4">Recent Reviews</h3>
         <div className="review-list">
            <div className="border-bottom pb-4 mb-4">
               <div className="d-flex justify-between align-center mb-3">
                  <div className="d-flex align-center gap-3">
                     <img src="https://i.pravatar.cc/150?img=11" className="avatar-sm" alt="User" />
                     <div>
                        <strong>Kasun S.</strong>
                        <div className="d-flex gap-1 mt-1">
                           {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--warning-orange)" color="var(--warning-orange)"/>)}
                        </div>
                     </div>
                  </div>
                  <span className="text-muted text-sm">2 days ago</span>
               </div>
               <p className="text-muted text-sm mb-3" style={{lineHeight: 1.6, fontSize: '0.95rem'}}>Saman was incredibly professional. Fixed my sink quickly and left the place clean. Highly recommended.</p>
               
               <div className="bg-light p-3 border-radius-md" style={{borderRadius: 'var(--radius-md)'}}>
                  <div className="d-flex align-center gap-2 mb-2">
                     <strong className="text-sm text-primary">Your Reply</strong>
                  </div>
                  <p className="text-muted text-sm">Thank you Kasun! Im glad I could help. Looking forward to working with you again.</p>
               </div>
            </div>

            <div className="pb-2">
               <div className="d-flex justify-between align-center mb-3">
                  <div className="d-flex align-center gap-3">
                     <img src="https://i.pravatar.cc/150?img=12" className="avatar-sm" alt="User" />
                     <div>
                        <strong>Amali P.</strong>
                        <div className="d-flex gap-1 mt-1">
                           {[1,2,3,4].map(s => <Star key={s} size={14} fill="var(--warning-orange)" color="var(--warning-orange)"/>)}
                           <Star size={14} color="var(--med-gray)" />
                        </div>
                     </div>
                  </div>
                  <span className="text-muted text-sm">5 days ago</span>
               </div>
               <p className="text-muted text-sm mb-3" style={{lineHeight: 1.6, fontSize: '0.95rem'}}>Good service, but arrived 15 minutes late.</p>
               
               <div className="mt-2">
                  <button className="btn btn-outline btn-sm" style={{padding: '0.5rem 1rem', fontSize: '0.85rem'}}><MessageSquare size={16}/> Reply to Review</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
export default Reviews;
