import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Briefcase, MapPin, Phone, Mail, Globe, Camera, Layers, CheckCircle } from 'lucide-react';
import './Auth.css'; // Inheriting styling from standard auth

const ProviderRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/seller'); // Simulate successful registration
    }
  };

  return (
    <div className="auth-layout container bg-light" style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
      <div className="auth-card card" style={{maxWidth: '800px', margin: '0 auto', padding: '2.5rem'}}>
        <div className="text-center mb-6">
          <h1 style={{fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-main)'}}>Become a Service Provider</h1>
          <p className="text-muted">Register your business and connect with thousands of clients in Sri Lanka.</p>
        </div>

        {/* Step Indicator */}
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', position: 'relative'}}>
           <div style={{position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: 'var(--med-gray)', zIndex: 1}}></div>
           
           <div style={{position: 'relative', zIndex: 2, background: 'var(--white)', padding: '0 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: step >= 1 ? 'var(--primary-color)' : 'var(--text-muted)'}}>
              <div style={{width: 32, height: 32, borderRadius: '50%', background: step >= 1 ? 'var(--primary-color)' : 'var(--light-gray)', color: step >= 1 ? 'white' : 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>1</div>
              <span className="text-sm">Basic Info</span>
           </div>
           <div style={{position: 'relative', zIndex: 2, background: 'var(--white)', padding: '0 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: step >= 2 ? 'var(--primary-color)' : 'var(--text-muted)'}}>
              <div style={{width: 32, height: 32, borderRadius: '50%', background: step >= 2 ? 'var(--primary-color)' : 'var(--light-gray)', color: step >= 2 ? 'white' : 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>2</div>
              <span className="text-sm">Service Details</span>
           </div>
           <div style={{position: 'relative', zIndex: 2, background: 'var(--white)', padding: '0 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: step >= 3 ? 'var(--primary-color)' : 'var(--text-muted)'}}>
              <div style={{width: 32, height: 32, borderRadius: '50%', background: step >= 3 ? 'var(--primary-color)' : 'var(--light-gray)', color: step >= 3 ? 'white' : 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>3</div>
              <span className="text-sm">Pricing & Extra</span>
           </div>
        </div>

        <form onSubmit={handleSubmit}>
          
          {step === 1 && (
             <div className="registration-step">
                <h3 className="mb-4">1. Personal & Business Information</h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                   <div className="form-group">
                      <label>Provider Name *</label>
                      <div className="input-with-icon">
                         <User size={18} className="input-icon" />
                         <input type="text" placeholder="Your full name" required />
                      </div>
                   </div>
                   <div className="form-group">
                      <label>Business Name (Optional)</label>
                      <div className="input-with-icon">
                         <Briefcase size={18} className="input-icon" />
                         <input type="text" placeholder="Company or trade name" />
                      </div>
                   </div>
                   <div className="form-group">
                      <label>Contact Number *</label>
                      <div className="input-with-icon">
                         <Phone size={18} className="input-icon" />
                         <input type="tel" placeholder="07XXXXXXXX" required />
                      </div>
                   </div>
                   <div className="form-group">
                      <label>WhatsApp Number (Optional)</label>
                      <div className="input-with-icon">
                         <Phone size={18} className="input-icon" />
                         <input type="tel" placeholder="07XXXXXXXX" />
                      </div>
                   </div>
                   <div className="form-group" style={{gridColumn: 'span 2'}}>
                      <label>Email Address *</label>
                      <div className="input-with-icon">
                         <Mail size={18} className="input-icon" />
                         <input type="email" placeholder="example@email.com" required />
                      </div>
                   </div>
                   <div className="form-group" style={{gridColumn: 'span 2'}}>
                      <label>Profile Image / Avatar</label>
                      <div style={{border: '2px dashed var(--med-gray)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius-md)', cursor: 'pointer', background: 'var(--light-gray)'}}>
                         <Camera size={32} color="var(--text-muted)" style={{marginBottom: '0.5rem'}}/>
                         <p className="text-muted text-sm">Click to upload your profile image (JPG, PNG)</p>
                      </div>
                   </div>
                </div>
             </div>
          )}

          {step === 2 && (
             <div className="registration-step">
                <h3 className="mb-4">2. Service Details</h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                   <div className="form-group" style={{gridColumn: 'span 2'}}>
                      <label>Service Title *</label>
                      <input type="text" placeholder="e.g. Professional Bathroom Plumbing Services" className="form-control" required style={{width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)'}}/>
                      <small className="text-muted text-sm">Keep it clear and descriptive.</small>
                   </div>
                   <div className="form-group">
                      <label>Category *</label>
                      <div className="input-with-icon">
                         <Layers size={18} className="input-icon" />
                         <select required style={{width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)', WebkitAppearance: 'none'}}>
                            <option value="">Select Category</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="electrical">Electrical</option>
                            <option value="cleaning">Cleaning</option>
                         </select>
                      </div>
                   </div>
                   <div className="form-group">
                      <label>Subcategory *</label>
                      <div className="input-with-icon">
                         <Layers size={18} className="input-icon" />
                         <select required style={{width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)', WebkitAppearance: 'none'}}>
                            <option value="">Select Subcategory</option>
                            <option value="repairs">Leak Repairs</option>
                            <option value="installation">Installation</option>
                         </select>
                      </div>
                   </div>
                   <div className="form-group">
                      <label>Service Area *</label>
                      <div className="input-with-icon">
                         <MapPin size={18} className="input-icon" />
                         <input type="text" placeholder="e.g. Colombo, Kandy" required />
                      </div>
                   </div>
                   <div className="form-group">
                      <label>Experience (Years) [Optional]</label>
                      <input type="number" placeholder="0" className="form-control" style={{width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)'}}/>
                   </div>
                   <div className="form-group" style={{gridColumn: 'span 2'}}>
                      <label>Cover Image & Portfolio Images (Optional)</label>
                      <div style={{border: '2px dashed var(--med-gray)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius-md)', cursor: 'pointer', background: 'var(--light-gray)'}}>
                         <Camera size={32} color="var(--text-muted)" style={{marginBottom: '0.5rem'}}/>
                         <p className="text-muted text-sm">Upload a cover image and multiple portfolio shots</p>
                      </div>
                   </div>
                   <div className="form-group" style={{gridColumn: 'span 2'}}>
                      <label>Full Description *</label>
                      <textarea placeholder="Describe your service in detail..." required style={{width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)', minHeight: '120px', resize: 'vertical'}}></textarea>
                   </div>
                </div>
             </div>
          )}

          {step === 3 && (
             <div className="registration-step">
                <h3 className="mb-4">3. Pricing, Socials & Extras</h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                   <div className="form-group">
                      <label>Pricing Type (v2) *</label>
                      <select required className="form-control" style={{width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)', WebkitAppearance: 'none'}}>
                         <option value="fixed">Fixed Rate</option>
                         <option value="hourly">Hourly Rate</option>
                         <option value="negotiable">Negotiable</option>
                      </select>
                   </div>
                   <div className="form-group">
                      <label>Starting Price (v2) *</label>
                      <input type="number" placeholder="LKR" required className="form-control" style={{width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)'}}/>
                   </div>
                   <div className="form-group">
                      <label>Warranty (Optional)</label>
                      <input type="text" placeholder="e.g. 6 Months Warranty" className="form-control" style={{width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)'}}/>
                   </div>
                   <div className="form-group">
                      <label>Response Time (v2)</label>
                      <select className="form-control" style={{width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)', WebkitAppearance: 'none'}}>
                         <option value="under_1_hour">Under 1 Hour</option>
                         <option value="under_24_hours">Under 24 Hours</option>
                         <option value="few_days">Few Days</option>
                      </select>
                   </div>
                   
                   <div className="form-group" style={{gridColumn: 'span 2'}}>
                      <label>Availability Status *</label>
                      <select required className="form-control" style={{width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)', WebkitAppearance: 'none'}}>
                         <option value="available">Available Now</option>
                         <option value="busy">Busy / Fully Booked</option>
                      </select>
                   </div>

                   <hr style={{gridColumn: 'span 2', borderColor: 'var(--light-gray)', margin: '1rem 0'}} />

                   <div className="form-group">
                      <label>Website URL (Optional)</label>
                      <div className="input-with-icon">
                         <Globe size={18} className="input-icon" />
                         <input type="url" placeholder="https://" />
                      </div>
                   </div>
                   <div className="form-group">
                      <label>Facebook / Instagram Link (Optional)</label>
                      <div className="input-with-icon">
                         <Globe size={18} className="input-icon" />
                         <input type="url" placeholder="https://" />
                      </div>
                   </div>
                </div>
             </div>
          )}

          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem'}}>
             {step > 1 ? (
                <button type="button" className="btn btn-outline" onClick={() => setStep(step - 1)}>Back</button>
             ) : <div></div>}
             
             <button type="submit" className="btn btn-primary" style={{padding: '0.75rem 2rem'}}>
                {step < 3 ? 'Continue' : 'Complete Registration'}
             </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ProviderRegistration;
