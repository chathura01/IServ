import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, MapPin, ShieldCheck, MessageSquare, 
  Heart, Briefcase, Award, Clock, CheckCircle,
  Image as ImageIcon
} from 'lucide-react';
import './ProviderProfile.css';

const ProviderProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1607472586893-edb57cb61421?q=80&w=600&auto=format&fit=crop', title: 'Modern Bathroom Renovation' },
    { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop', title: 'Pipe Fitting Project' },
    { url: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=600&auto=format&fit=crop', title: 'Commercial Drainage Systems' },
    { url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop', title: 'Luxury Sink Installation' }
  ];

  return (
    <div className="provider-profile-page pb-5">
      {/* Hero Section */}
      <div className="provider-hero">
        <div className="provider-hero-overlay"></div>
        <div className="container hero-content">
          <div className="provider-header">
            <div className="avatar-container">
              <img src={`https://i.pravatar.cc/250?img=${parseInt(id) + 15 || 25}`} alt="Provider Avatar" />
              <div className="verified-badge">
                <ShieldCheck size={28} color="var(--success-green)" />
              </div>
            </div>
            <div className="header-info-content">
              <h1>Saman Kumara</h1>
              <p className="provider-tagline">Master Plumber & Renovation Expert</p>
              <div className="provider-meta-stats">
                <div className="meta-stat">
                  <MapPin size={18}/> Colombo, Sri Lanka
                </div>
                <div className="meta-stat">
                  <Star size={18} fill="var(--warning-orange)" color="var(--warning-orange)"/> 
                  <span><strong>4.9</strong> (150+ Reviews)</span>
                </div>
                <div className="meta-stat">
                  <Award size={18} color="var(--primary-light)"/> Level 2 Seller
                </div>
              </div>
            </div>
            <div className="header-actions">
               <button onClick={() => navigate('/chat')} className="btn btn-primary" style={{color: 'white', padding: '0.75rem 1.5rem', fontWeight: '600'}}>
                 <MessageSquare size={18} /> Hire Me
               </button>
               <button 
                  className="btn btn-outline" 
                   onClick={() => setIsFavorite(!isFavorite)}
                  style={{
                    backgroundColor: isFavorite ? 'var(--danger-red)' : 'rgba(255,255,255,0.15)', 
                    borderColor: isFavorite ? 'var(--danger-red)' : 'rgba(255,255,255,0.4)',
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    backdropFilter: 'blur(10px)',
                    fontWeight: '600'
                  }}
               >
                  <Heart size={18} fill={isFavorite ? "white" : "none"} color="white" /> 
                  {isFavorite ? 'Saved' : 'Save Profile'}
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop: '2.5rem'}}>
        <div className="portfolio-layout">
           
           {/* Sidebar */}
           <div className="portfolio-sidebar">
              <div className="card">
                 <h3 className="sidebar-title"><CheckCircle size={20} color="var(--primary-color)" /> Skills & Expertise</h3>
                 <div className="skills-wrapper mt-3">
                    <span className="skill-tag">Pipe Fitting</span>
                    <span className="skill-tag">Leak Repairs</span>
                    <span className="skill-tag">Water Heaters</span>
                    <span className="skill-tag">Drain Cleaning</span>
                    <span className="skill-tag">Bathroom Renovation</span>
                    <span className="skill-tag">Commercial Plumbing</span>
                 </div>
              </div>

              <div className="card">
                 <h3 className="sidebar-title"><Briefcase size={20} color="var(--primary-color)" /> Professional Info</h3>
                 <div className="info-list mt-3">
                   <div className="info-item">
                     <strong>Languages</strong>
                     <p className="text-muted text-sm mt-1">English (Fluent), Sinhala (Native)</p>
                   </div>
                   <div className="info-item">
                     <strong>Experience</strong>
                     <p className="text-muted text-sm mt-1">10+ Years in Industry</p>
                   </div>
                   <div className="info-item">
                     <strong>Member Since</strong>
                     <p className="text-muted text-sm mt-1">January 2022</p>
                   </div>
                   <div className="info-item">
                     <strong>Typical Response Time</strong>
                     <p className="text-muted text-sm mt-1" style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                        <Clock size={14} className="text-muted"/> Under 1 hour
                     </p>
                   </div>
                 </div>
              </div>
           </div>

           {/* Main Content */}
           <div className="portfolio-main">
              
              {/* About Section */}
              <div className="portfolio-section">
                <div className="section-header">
                  <h2>About the Professional</h2>
                </div>
                <p style={{lineHeight: 1.8, color: '#475569', fontSize: '1.05rem'}}>
                  Hello! I am a certified Master Plumber with over a decade of hands-on experience in residential and commercial plumbing systems. 
                  My expertise ranges from fixing minor leaks and unclogging drains to full-scale bathroom remodeling and complex piping installations. 
                  <br/><br/>
                  I pride myself on delivering high-quality workmanship, transparent pricing, and punctual service. 
                  No job is too big or too small. I use the latest tools and industry-standard materials to ensure durable, long-lasting solutions for my clients.
                </p>
              </div>

              {/* Services Offered */}
              <div className="portfolio-section">
                <div className="section-header">
                  <h2>Services Offered by Saman</h2>
                </div>
                <div className="results-grid">
                   {[1, 2].map(num => (
                    <div key={num} className="service-card card">
                      <div className="service-image" style={{height: '180px'}}>
                        <img src={`https://picsum.photos/400/250?random=${num+10}`} alt="Service" />
                      </div>
                      <div className="service-content">
                        <Link to={`/service/${num}`} className="service-title">Complete {num === 1 ? 'Bathroom ' : 'Kitchen '} Plumbing & Repair</Link>
                        <div className="service-rating mt-2" style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                          <Star size={16} fill="var(--warning-orange)" color="var(--warning-orange)" />
                          <strong>4.9</strong>
                          <span className="text-muted text-sm">(50 reviews)</span>
                        </div>
                      </div>
                      <div className="service-footer">
                        <div className="service-price">
                          <small>Starting at</small>
                          <strong>Rs. {num * 2500 + 3000}</strong>
                        </div>
                        <div className="service-actions">
                          <Link to={`/service/${num}`} className="btn btn-outline btn-sm" style={{padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)'}}>View Details</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Gallery */}
              <div className="portfolio-section">
                <div className="section-header">
                  <h2><ImageIcon size={24} style={{verticalAlign: 'bottom', marginRight: '0.5rem', color: 'var(--primary-color)'}}/> Past Projects Portfolio</h2>
                </div>
                <div className="gallery-grid">
                  {galleryImages.map((img, idx) => (
                    <div className="gallery-item" key={idx}>
                      <img src={img.url} alt={img.title} />
                      <div className="gallery-overlay">
                        <span>{img.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
