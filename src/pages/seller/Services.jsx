import React from 'react';
import { Plus, Edit2, Trash2, Eye } from 'lucide-react';

const Services = () => {
  return (
    <div className="seller-services">
      <div className="d-flex justify-between align-center mb-6">
        <div>
          <h2>My Services</h2>
          <p className="text-muted">Manage your service listings and catalogues.</p>
        </div>
        <button className="btn btn-primary"><Plus size={18} /> Create New Service</button>
      </div>

      <div className="services-list" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        {[1, 2].map(i => (
          <div key={i} className="card p-0 d-flex flex-row overflow-hidden" style={{height: '160px', padding: 0}}>
             <img src={`https://picsum.photos/300/200?random=${i}`} alt="service" style={{width: '240px', objectFit: 'cover'}} />
             <div className="d-flex flex-column justify-between w-100" style={{padding: '1.5rem'}}>
                <div className="d-flex justify-between">
                   <div>
                      <h3 className="mb-1">{i===1 ? "Professional Bathroom Plumbing" : "A/C Repair & Installation"}</h3>
                      <span className="badge badge-success mb-2">Active</span>
                   </div>
                   <h3 className="text-primary">Rs. {i===1 ? '3,500' : '4,000'} <span className="text-muted text-sm fw-500">/ Starting</span></h3>
                </div>
                <div className="d-flex justify-between align-center pt-3 border-top mt-auto" style={{borderTop: '1px solid var(--med-gray)', paddingTop: '1rem', marginTop: 'auto'}}>
                   <div className="d-flex gap-3 text-muted text-sm" style={{gap: '1rem'}}>
                      <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Eye size={14}/> 342 views</span>
                      <span>12 orders</span>
                   </div>
                   <div className="d-flex gap-2" style={{gap: '0.5rem'}}>
                     <button className="icon-btn text-primary"><Edit2 size={16}/></button>
                     <button className="icon-btn text-danger" style={{color: 'var(--danger-red)'}}><Trash2 size={16}/></button>
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
