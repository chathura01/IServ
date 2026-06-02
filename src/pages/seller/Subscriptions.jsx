import React from 'react';
import { CheckCircle, Zap, Shield, Crown, AlertTriangle, BarChart } from 'lucide-react';
import './Seller.css';

const Subscriptions = () => {
   return (
      <div className="seller-subscriptions pb-5">
         <div className="subscriptions-header mb-6">
            <h2 className="subscriptions-title">Subscription Management</h2>
            <p className="text-muted subscriptions-description">Manage your marketing power, track available ad credits, and unlock exclusive pro features to scale your business.</p>
         </div>

         {/* Current Plan Overview (Function 03) */}
         <div className="card p-5 mb-6 plan-overview-card">
            <div className="plan-overview-top">
               <div>
                  <div className="active-chip">
                     <Zap size={16} /> ACTIVE SUBSCRIPTION
                  </div>
                  <h2 className="fw-700 current-plan-title">Pro Tier</h2>
                  <p className="text-muted renewal-copy">Renews automatically on <strong>June 25, 2026</strong> for LKR 3,750</p>
               </div>
               <div className="plan-cta-group">
                  <button className="btn btn-primary">Manage Billing</button>
                  <button className="btn btn-outline danger-outline-btn">Cancel Package</button>
               </div>
            </div>

            <div className="usage-card">
               <div className="usage-header">
                  <h4 className="fw-600 m-0 usage-title"><BarChart size={20} color="var(--primary-color)" /> Remaining Ad Credits</h4>
                  <span className="usage-count">3 / 10 Ads</span>
               </div>

               <div className="usage-progress-track">
                  <div className="usage-progress-fill"></div>
               </div>

               <div className="usage-warning">
                  <AlertTriangle size={20} style={{ flexShrink: 0 }} />
                  <p className="m-0 text-sm fw-500">You are approaching your ad limit. Upgrade to <strong>Premium Elite</strong> to post more ads and unlock portfolio mapping.</p>
               </div>
            </div>
         </div>

         <div className="packages-heading">
            <h2 className="packages-title">Upgrade Your Reach</h2>
            <p className="text-muted">Choose the package that fits your business scale.</p>
         </div>

         {/* Package Selection (Function 02) */}
         <div className="pricing-grid">

            {/* Package 1 */}
            <div className="pricing-card card p-5">
               <h4 className="fw-600 mb-2 text-muted pricing-name">Starter</h4>
               <div className="price-row">
                  <h2 className="fw-700 pricing-amount">LKR 1,500</h2>
                  <span className="text-muted fw-500">/mo</span>
               </div>
               <p className="text-muted plan-description">Essential features for individual freelancers starting out.</p>

               <ul className="plan-features">
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--success-green)" /> <span className="fw-500">Post up to 5 Ads</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--success-green)" /> <span>Standard Analytics</span></li>
                  <li className="plan-feature-item text-muted"><Shield size={20} /> <span>Basic System Support</span></li>
               </ul>
               <button className="btn btn-outline pricing-action">Downgrade to Starter</button>
            </div>

            {/* Package 2 */}
            <div className="pricing-card active card p-5">
               <div className="plan-badge">ACTIVE PLAN</div>

               <h4 className="fw-600 mb-2 text-primary pricing-name">Pro Tier</h4>
               <div className="price-row">
                  <h2 className="fw-700 pricing-amount">LKR 3,750</h2>
                  <span className="text-muted fw-500">/mo</span>
               </div>
               <p className="plan-description">Our most popular package for growing service businesses.</p>

               <ul className="plan-features">
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-color)" /> <span className="fw-600">Post up to 10 Ads</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-color)" /> <span>Link Social Media Profiles</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-color)" /> <span>Advanced Verification Badge</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-color)" /> <span>Fast Email Support</span></li>
               </ul>
               <button className="btn pricing-action" disabled>Current Plan</button>
            </div>

            {/* Package 3 */}
            <div className="pricing-card premium card p-5">
               <h4 className="fw-600 mb-2 pricing-name" style={{ color: 'var(--primary-light)' }}><Crown size={20} style={{ verticalAlign: 'bottom', marginRight: '0.5rem' }} />Premium Elite</h4>
               <div className="price-row">
                  <h2 className="fw-700 pricing-amount">LKR 6,500</h2>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }} className="fw-500">/mo</span>
               </div>
               <p className="plan-description" style={{ borderBottomColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>Maximize your bookings with full portfolio showcases.</p>

               <ul className="plan-features">
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-light)" /> <span className="fw-600">Post up to 20 Ads</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-light)" /> <span className="fw-600">Advanced Portfolio Showcase</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-light)" /> <span className="fw-600">Service Catalogues Engine</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-light)" /> <span>Complete Social Hooks</span></li>
                  <li className="plan-feature-item"><CheckCircle size={20} color="var(--primary-light)" /> <span>Dedicated Priority Support</span></li>
               </ul>
               <button className="btn btn-primary pricing-action">Upgrade to Elite</button>
            </div>

         </div>
      </div>
   );
};

export default Subscriptions;
