import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, ShieldCheck, MessageSquare, Heart } from 'lucide-react';
import './ProviderProfile.css';

const ProviderProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="provider-profile-page bg-light pb-5" style={{paddingBottom: '3rem'}}>
      <div className="provider-banner">
        <div className="container banner-content">
          <div className="avatar-wrapper">
             <img src={`https://i.pravatar.cc/150?img=${parseInt(id) + 15 || 25}`} alt="Provider Avatar" />
          </div>
          <div className="provider-header-info">
             <h1>Saman Kumara <ShieldCheck className="verified-icon" size={24} /></h1>
             <p className="provider-tagline">Expert Plumber & Handyman</p>
             <div className="provider-meta">
               <span><MapPin size={16}/> Colombo, Sri Lanka</span>
               <span><Star size={16} fill="var(--warning-orange)" color="var(--warning-orange)"/> 4.9 (150 Reviews)</span>
               <span>Level 2 Seller</span>
             </div>
          </div>
          <div className="provider-actions">
             <button onClick={() => navigate('/chat')} className="btn btn-primary" style={{color: 'white'}}><MessageSquare size={18} /> Contact Provider</button>
             <button 
                className={`btn ${isFavorite ? 'btn-primary' : 'btn-outline'}`} 
                onClick={() => setIsFavorite(!isFavorite)}
                style={{borderColor: isFavorite ? 'var(--danger-red)' : 'white', color: isFavorite ? 'white' : 'white', backgroundColor: isFavorite ? 'var(--danger-red)' : 'transparent'}}
             >
                <Heart size={18} fill={isFavorite ? "white" : "none"} color="white" /> 
                {isFavorite ? 'Saved to Favorites' : 'Add to Favorites'}
             </button>
          </div>
        </div>
      </div>

      <div className="container mt-4" style={{marginTop: '2rem'}}>
        <div className="provider-layout">
           <div className="provider-sidebar">
              <div className="card mb-4" style={{padding: '1.5rem'}}>
                 <h3>About Me</h3>
                 <p className="text-muted mt-2" style={{lineHeight: 1.6}}>Hi! I am a professional plumber with over 10 years of experience serving residential and commercial properties in Colombo. I ensure high-quality, durable fixes for any plumbing issue.</p>
                 
                 <div className="info-list mt-4" style={{marginTop: '1.5rem'}}>
                   <div className="info-item">
                     <strong>Languages</strong>
                     <p className="text-muted text-sm mt-1">English, Sinhala</p>
                   </div>
                   <div className="info-item mt-3" style={{marginTop: '1rem'}}>
                     <strong>Member Since</strong>
                     <p className="text-muted text-sm mt-1">Jan 2023</p>
                   </div>
                   <div className="info-item mt-3" style={{marginTop: '1rem'}}>
                     <strong>Recent Delivery</strong>
                     <p className="text-muted text-sm mt-1">2 hours ago</p>
                   </div>
                 </div>
              </div>
           </div>

           <div className="provider-main">
              <h3>Services by Saman</h3>
              <div className="results-grid mt-4" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
                 {[1, 2, 3].map(num => (
                  <div key={num} className="service-card card">
                    <div className="service-image">
                      <img src={`https://picsum.photos/400/250?random=${num+id+10}`} alt="Service" />
                    </div>
                    <div className="service-content">
                      <Link to={`/service/${num}`} className="service-title">Professional Plumbing Services</Link>
                      <div className="service-rating mt-2" style={{marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                        <Star size={16} fill="var(--warning-orange)" color="var(--warning-orange)" />
                        <strong>4.9</strong>
                        <span className="text-muted text-sm">(50 reviews)</span>
                      </div>
                    </div>
                    <div className="service-footer">
                      <div className="service-price">
                        <small>Starting at</small>
                        <strong>Rs. {num * 1500 + 2000}</strong>
                      </div>
                      <div className="service-actions">
                        <Link to={`/service/${num}`} className="btn btn-outline btn-sm" style={{padding: '0.4rem 0.8rem', fontSize: '0.75rem'}}>Details</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default ProviderProfile;
