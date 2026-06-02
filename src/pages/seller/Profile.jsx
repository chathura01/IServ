import React from 'react';
import { Camera, Save, User, MapPin, Briefcase, Phone, Mail, Link as LinkIcon, DollarSign, Layers } from 'lucide-react';
import './Seller.css';

const Profile = () => {
  return (
    <div className="seller-profile-page pb-5">
      <div className="seller-profile-header mb-6">
        <div className="seller-profile-header-copy">
           <h2 className="seller-profile-title">Provider Profile Management</h2>
           <p className="text-muted seller-profile-subtitle">Manage your public profile, contact details, and primary service focus.</p>
        </div>
        <div className="seller-profile-actions">
           <button className="btn btn-primary profile-save-btn"><Save size={18}/> Save Changes</button>
        </div>
      </div>

      <div className="seller-profile-sections">

        {/* Media / Images */}
        <div className="card p-4 profile-card">
           <h3 className="mb-4 profile-section-title">Profile & Cover Media</h3>
           <div className="media-grid">
              <div>
                 <label className="fw-500 mb-2 d-block">Profile Image</label>
                 <div className="profile-upload-circle">
                    <Camera size={24} color="var(--text-muted)" className="mb-2" />
                    <span className="text-sm text-muted">Upload</span>
                 </div>
              </div>
              <div className="media-column">
                 <div>
                    <label className="fw-500 mb-2 d-block">Cover Image</label>
                    <div className="upload-dropzone cover-dropzone">
                       <Camera size={24} color="var(--text-muted)" className="mb-2" />
                       <span className="text-sm text-muted">Upload Cover Photo</span>
                    </div>
                 </div>
                 <div>
                    <label className="fw-500 mb-2 d-block">Portfolio Images (Optional)</label>
                    <div className="upload-dropzone portfolio-dropzone">
                       <Camera size={24} color="var(--text-muted)" className="mb-2" />
                       <span className="text-sm text-muted">Upload Portfolio Shots (Max 10)</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Basic Information */}
        <div className="card p-4 profile-card">
           <h3 className="mb-4 text-primary d-flex align-center gap-2 profile-section-title"><User size={20}/> Identity & Branding</h3>
           <div className="profile-form-grid">
              <div className="form-group">
                 <label className="fw-500">Provider Name *</label>
                 <input type="text" defaultValue="Saman Kumara" className="form-control profile-form-control" required />
              </div>
              <div className="form-group">
                 <label className="fw-500">Business Name (Optional)</label>
                 <input type="text" placeholder="e.g. SK Solutions" className="form-control profile-form-control" />
              </div>
              <div className="form-group span-2">
                 <label className="fw-500">About Me (Description) *</label>
                 <textarea defaultValue="Professional plumber with over 10 years experience." className="form-control profile-form-control profile-textarea" required></textarea>
              </div>
           </div>
        </div>

        {/* Contact Information */}
        <div className="card p-4 profile-card">
           <h3 className="mb-4 text-primary d-flex align-center gap-2 profile-section-title"><Phone size={20}/> Contact Information</h3>
           <div className="profile-form-grid">
              <div className="form-group">
                 <label className="fw-500">Contact Number *</label>
                 <div className="input-with-icon">
                    <Phone size={18} className="input-icon" />
                    <input className="profile-form-control" type="text" defaultValue="0771234567" required />
                 </div>
              </div>
              <div className="form-group">
                 <label className="fw-500">WhatsApp Number *</label>
                 <div className="input-with-icon">
                    <Phone size={18} className="input-icon" />
                    <input className="profile-form-control" type="text" defaultValue="0771234567" required />
                 </div>
              </div>
              <div className="form-group span-2">
                 <label className="fw-500">Email Address *</label>
                 <div className="input-with-icon">
                    <Mail size={18} className="input-icon" />
                    <input className="profile-form-control" type="email" defaultValue="saman@example.com" required />
                 </div>
              </div>
           </div>
        </div>

        {/* Core Offering Profile */}
        <div className="card p-4 profile-card">
           <h3 className="mb-4 text-primary d-flex align-center gap-2 profile-section-title"><Briefcase size={20}/> Primary Service Profile</h3>
           <p className="text-muted text-sm mb-4">Set up the primary services you provide. You can create specific gigs/ads for these in the Services tab.</p>
           <div className="profile-form-grid">
              <div className="form-group span-2">
                 <label className="fw-500">Primary Service Title *</label>
                 <input type="text" defaultValue="Expert Plumber" className="form-control profile-form-control" required />
              </div>
              <div className="form-group">
                 <label className="fw-500">Category *</label>
                 <div className="input-with-icon">
                    <Layers size={18} className="input-icon" />
                    <select className="profile-form-control profile-select with-icon-padding" required defaultValue="plumbing">
                       <option value="plumbing">Plumbing</option>
                       <option value="electrical">Electrical</option>
                    </select>
                 </div>
              </div>
              <div className="form-group">
                 <label className="fw-500">Subcategory *</label>
                 <div className="input-with-icon">
                    <Layers size={18} className="input-icon" />
                    <select className="profile-form-control profile-select with-icon-padding" required defaultValue="repairs">
                       <option value="repairs">Leak Repairs</option>
                    </select>
                 </div>
              </div>
              <div className="form-group">
                 <label className="fw-500">Service Area *</label>
                 <div className="input-with-icon">
                    <MapPin size={18} className="input-icon" />
                    <input className="profile-form-control" type="text" defaultValue="Colombo, Sri Lanka" required />
                 </div>
              </div>
              <div className="form-group">
                 <label className="fw-500">Experience (Years) *</label>
                 <input type="number" defaultValue="10" className="form-control profile-form-control" required />
              </div>
              <div className="form-group">
                 <label className="fw-500">Pricing Type *</label>
                 <select className="form-control profile-form-control profile-select" required defaultValue="fixed">
                    <option value="fixed">Fixed Rate</option>
                    <option value="hourly">Hourly Rate</option>
                    <option value="negotiable">Negotiable</option>
                 </select>
              </div>
              <div className="form-group">
                 <label className="fw-500">Starting Price (LKR) *</label>
                 <div className="input-with-icon">
                    <DollarSign size={18} className="input-icon" />
                    <input className="profile-form-control" type="number" defaultValue="2500" required />
                 </div>
              </div>
              <div className="form-group span-2">
                 <label className="fw-500">Availability Status *</label>
                 <select className="form-control profile-form-control profile-select" required defaultValue="available">
                    <option value="available">Available Now</option>
                    <option value="busy">Busy</option>
                 </select>
              </div>
           </div>
        </div>

        {/* Social Links */}
        <div className="card p-4 profile-card">
           <h3 className="mb-4 text-primary d-flex align-center gap-2 profile-section-title"><LinkIcon size={20}/> Social Links & Website</h3>
           <div className="profile-form-stack">
              <div className="form-group">
                 <label className="fw-500">Website</label>
                 <div className="input-with-icon">
                    <LinkIcon size={18} className="input-icon" />
                    <input className="profile-form-control" type="url" placeholder="https://" />
                 </div>
              </div>
              <div className="form-group">
                 <label className="fw-500">Facebook Link</label>
                 <div className="input-with-icon">
                    <LinkIcon size={18} className="input-icon" />
                    <input className="profile-form-control" type="url" placeholder="https://facebook.com/" />
                 </div>
              </div>
              <div className="form-group">
                 <label className="fw-500">Instagram Link</label>
                 <div className="input-with-icon">
                    <LinkIcon size={18} className="input-icon" />
                    <input className="profile-form-control" type="url" placeholder="https://instagram.com/" />
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
