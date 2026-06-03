import React from 'react';
import { Plus, Edit2, Trash2, Eye } from 'lucide-react';

const Services = () => {
  return (
    <div className="seller-services">
      <div className="page-header-row">
        <div>
          <h2>My Services</h2>
          <p className="text-muted">Manage your service listings and catalogues.</p>
        </div>
        <button className="btn btn-primary"><Plus size={18} /> Create New Service</button>
      </div>

      <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {[1, 2].map(i => (
          <div key={i} className="card p-0 service-list-card">
             <img src={`https://picsum.photos/300/200?random=${i}`} alt="service" className="service-list-card__image" />
             <div className="service-list-card__body">
                <div className="service-list-card__top">
                   <div>
                      <h3 className="mb-1">{i===1 ? "Professional Bathroom Plumbing" : "A/C Repair & Installation"}</h3>
                      <span className="badge badge-success mb-2">Active</span>
                   </div>
                   <h3 className="text-primary m-0">Rs. {i===1 ? '3,500' : '4,000'} <span className="text-muted text-sm fw-500">/ Starting</span></h3>
                </div>
                <div className="d-flex justify-between align-center border-top pt-3 mt-auto" style={{ borderTop: '1px solid var(--med-gray)', paddingTop: '1rem' }}>
                   <div className="d-flex gap-3 text-muted text-sm">
                      <span className="d-flex align-center gap-2"><Eye size={14}/> 342 views</span>
                      <span>12 orders</span>
                   </div>
                   <div className="d-flex gap-2">
                     <button type="button" className="icon-btn text-primary"><Edit2 size={16}/></button>
                     <button type="button" className="icon-btn text-danger-red"><Trash2 size={16}/></button>
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
