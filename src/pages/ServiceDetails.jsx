import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, ShieldCheck, Clock, MessageSquare, Heart, Flag, Calendar } from 'lucide-react';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setShowReportModal(false);
      setReportSubmitted(false);
    }, 2000);
  };

  return (
    <div className="service-details-page bg-light">
      <div className="container service-details-layout">
        
        {/* Left Column - Main Details */}
        <div className="service-main-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &gt; <Link to="/search">Plumbing</Link> &gt; <span>Professional Bathroom Plumbing</span>
          </nav>

          <h1 className="detail-title">Professional Bathroom Plumbing & Leak Repairs</h1>
          
          <div className="detail-meta">
            <Link to={`/provider/${id}`} className="seller-meta-large" style={{textDecoration: 'none', color: 'inherit'}}>
              <img src={`https://i.pravatar.cc/150?img=${parseInt(id) + 15 || 25}`} alt="Pro" className="seller-avatar" />
              <div className="seller-info">
                <h3>Saman Kumara <ShieldCheck size={16} color="var(--success-green)" /></h3>
                <span>Level 2 Seller | 5 Years Experience</span>
              </div>
            </Link>
            <div className="stats-divider"></div>
            <div className="meta-stats">
              <span><Star size={18} fill="var(--warning-orange)" color="var(--warning-orange)" /> <strong>4.9</strong> (84 reviews)</span>
              <span><MessageSquare size={16} /> 2 pending orders</span>
            </div>
          </div>

          <div className="service-gallery">
            <img src={`https://picsum.photos/800/450?random=${id || 1}`} alt="Main Service" className="main-image" />
            <div className="gallery-thumbnails">
              <img src={`https://picsum.photos/800/450?random=${(parseInt(id) || 1)+1}`} alt="Thumb 1" />
              <img src={`https://picsum.photos/800/450?random=${(parseInt(id) || 1)+2}`} alt="Thumb 2" />
              <img src={`https://picsum.photos/800/450?random=${(parseInt(id) || 1)+3}`} alt="Thumb 3" />
            </div>
          </div>

          <div className="service-description card section-block">
            <h2>About This Service</h2>
            <p>I offer professional and reliable bathroom plumbing services in Colombo and suburbs. With over 5 years of experience handling commercial and residential plumbing, I guarantee 100% satisfaction and a leak-free guarantee.</p>
            <ul>
              <li>Leak detection and fixing</li>
              <li>Pipe replacements (PPR, PVC)</li>
              <li>Water pressure troubleshooting</li>
              <li>Modern bathroom fitting installations</li>
            </ul>
          </div>

          <div className="service-portfolio card section-block">
            <h2>Previous Projects</h2>
            <div className="portfolio-grid">
               {[1,2,3].map(p => (
                 <div key={p} className="portfolio-item">
                   <img src={`https://picsum.photos/300/200?random=${p+10}`} alt="Project" />
                   <h4>Luxury Villa Bathroom</h4>
                   <p>Colombo 07</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="service-reviews card section-block">
            <div className="reviews-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                 <h2>Client Reviews</h2>
                 <div className="overall-rating">
                   <Star size={24} fill="var(--warning-orange)" color="var(--warning-orange)"/>
                   <span>4.9</span>
                 </div>
               </div>
            </div>
            
            {/* Write a Review Block */}
            <div className="write-review-box bg-light" style={{padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem'}}>
               <h4 style={{marginBottom: '1rem', fontSize: '1.1rem'}}>Write a Review</h4>
               <div style={{display: 'flex', gap: '0.25rem', marginBottom: '1rem'}}>
                  <Star size={24} color="var(--med-gray)" style={{cursor: 'pointer'}} />
                  <Star size={24} color="var(--med-gray)" style={{cursor: 'pointer'}} />
                  <Star size={24} color="var(--med-gray)" style={{cursor: 'pointer'}} />
                  <Star size={24} color="var(--med-gray)" style={{cursor: 'pointer'}} />
                  <Star size={24} color="var(--med-gray)" style={{cursor: 'pointer'}} />
               </div>
               <textarea placeholder="Describe your experience with this service provider..." style={{width: '100%', minHeight: '100px', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--med-gray)', fontFamily: 'inherit', marginBottom: '1rem', outline: 'none', resize: 'vertical'}}></textarea>
               <button className="btn btn-primary">Submit Review</button>
            </div>

            <div className="review-list">
               {/* Current User's Own Review */}
               <div className="review-item" style={{border: '1px solid var(--primary-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', background: 'var(--white)'}}>
                  <div className="reviewer-meta" style={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <div className="seller-meta-large">
                       <img src="https://i.pravatar.cc/150?img=1" alt="Me" className="reviewer-avatar" />
                       <div>
                         <strong style={{color: 'var(--text-main)'}}>You (Verified Client)</strong>
                         <div className="review-stars" style={{marginTop: '0.25rem'}}>
                           {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--warning-orange)" color="var(--warning-orange)"/>)}
                         </div>
                       </div>
                    </div>
                    <div style={{display: 'flex', gap: '1rem'}}>
                       <button className="text-btn text-primary" style={{fontSize: '0.875rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-color)'}}>Edit</button>
                       <button className="text-btn text-danger" style={{fontSize: '0.875rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--danger-red)'}}>Delete</button>
                    </div>
                  </div>
                  <p style={{marginTop: '1rem', color: 'var(--text-main)'}}>Exceptional work on my bathroom pipes. Finished ahead of schedule and the price was exactly as quoted.</p>
               </div>

               {/* Another User's Review with Seller Reply */}
               <div className="review-item" style={{padding: '1.5rem 0', borderBottom: 'none'}}>
                  <div className="reviewer-meta">
                    <div className="seller-meta-large">
                       <img src="https://i.pravatar.cc/150?img=5" alt="User" className="reviewer-avatar" />
                       <div>
                         <strong style={{color: 'var(--text-main)'}}>Kavindu M.</strong>
                         <div className="review-stars" style={{marginTop: '0.25rem'}}>
                           {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--warning-orange)" color="var(--warning-orange)"/>)}
                         </div>
                       </div>
                    </div>
                  </div>
                  <p style={{marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.6}}>Very fast and professional service. Highly recommended for any urgent plumbing work. Will definitely hire again.</p>
                  
                  {/* Seller Reply */}
                  <div className="seller-reply" style={{background: 'var(--light-gray)', padding: '1rem', borderRadius: 'var(--radius-md)', marginTop: '1.25rem', borderLeft: '3px solid var(--success-green)'}}>
                     <strong style={{fontSize: '0.85rem', color: 'var(--success-green)', display: 'block', marginBottom: '0.5rem'}}>Saman Kumara (Provider) Replied:</strong>
                     <p style={{fontSize: '0.85rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.5}}>Thank you Kavindu! Always happy to help with any emergencies. Feel free to reach out anytime.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking & Sidebar */}
        <div className="service-sidebar">
          <div className="booking-card card">
            <div className="booking-tabs">
              <button className="tab active">Standard</button>
              <button className="tab">Emergency</button>
            </div>
            <div className="booking-content">
              <div className="price-header" style={{flexWrap: 'wrap', gap: '0.5rem'}}>
                <h3 style={{margin: 0}}>Standard Call Out</h3>
                <span className="price-tag">Rs. 3,500</span>
              </div>
              <p className="package-desc">Inspection and minor repairs within 1 hour timeframe. Excludes material costs.</p>
              
              <ul className="package-features">
                <li><Clock size={16}/> 1-2 Days response</li>
                <li><ShieldCheck size={16}/> 3 Months Warranty</li>
                <li><Calendar size={16}/> Available Weekend</li>
              </ul>

              <Link to="/seller/orders" className="btn btn-primary w-100 mb-3" style={{width: '100%', marginBottom: '1rem'}}>
                Book Appointment
              </Link>
              <button className="btn btn-outline w-100" style={{width: '100%'}}>
                <MessageSquare size={18}/> Contact Seller
              </button>
            </div>
          </div>

          <div className="action-links text-center">
             <button className="text-btn"><Heart size={16}/> Save to Favorites</button>
             <button className="text-btn text-danger" onClick={() => setShowReportModal(true)}><Flag size={16}/> Report this service</button>
          </div>
        </div>

      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}>
          <div className="card" style={{width: '90%', maxWidth: '400px', padding: '2rem'}}>
            {!reportSubmitted ? (
               <>
                  <h3 style={{marginBottom: '1rem'}}>Report Service</h3>
                  <p className="text-muted text-sm" style={{marginBottom: '1.5rem', lineHeight: 1.5}}>Please let us know why you are reporting this service ad. Our admin team will investigate within 24 hours.</p>
                  <form onSubmit={handleReportSubmit}>
                     <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem'}}>
                        <label className="checkbox-label" style={{alignItems: 'flex-start'}}><input type="radio" name="reason" style={{marginTop: '4px'}} required/> <span style={{color: 'var(--text-main)'}}>False or misleading information</span></label>
                        <label className="checkbox-label" style={{alignItems: 'flex-start'}}><input type="radio" name="reason" style={{marginTop: '4px'}}/> <span style={{color: 'var(--text-main)'}}>Spam or scam</span></label>
                        <label className="checkbox-label" style={{alignItems: 'flex-start'}}><input type="radio" name="reason" style={{marginTop: '4px'}}/> <span style={{color: 'var(--text-main)'}}>Inappropriate content or imagery</span></label>
                     </div>
                     <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end'}}>
                        <button type="button" className="btn btn-outline" onClick={() => setShowReportModal(false)}>Cancel</button>
                        <button type="submit" className="btn btn-primary" style={{background: 'var(--danger-red)', borderColor: 'var(--danger-red)', color: 'white'}}>Submit Report</button>
                     </div>
                  </form>
               </>
            ) : (
               <div style={{textAlign: 'center', padding: '2rem 0'}}>
                  <ShieldCheck size={48} color="var(--success-green)" style={{marginBottom: '1rem'}} />
                  <h3 style={{color: 'var(--text-main)'}}>Report Submitted</h3>
                  <p className="text-muted text-sm mt-2" style={{lineHeight: 1.5}}>Thank you. Our moderation team has received your request and will review this service shortly.</p>
               </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
export default ServiceDetails;
