import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, Wrench, Monitor, Paintbrush, Scissors, Camera, Briefcase, 
  ChevronRight, ChevronLeft, CheckCircle, UploadCloud, Plus, X, Image as ImageIcon 
} from 'lucide-react';
import './Seller.css';

const CreateAd = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const stepLabels = ['Classification', 'Basic Details', 'Media & Pricing', 'Pro Features'];
  
  // Form State mapping exactly to user request schema
  const [formData, setFormData] = useState({
    // Step 1
    category_id: null,
    subcategory_id: null,
    
    // Step 2
    ad_title: '',
    district: '',
    city: '',
    service_description: '',
    
    // Step 3
    pricing_type: 'Fixed',
    price: '',
    negotiable_status: false,
    availability_schedule: '',
    service_images: [],
    service_video: '',
    
    // Step 4 (Pro Features)
    avg_response_time: '',
    service_catalogue: [],
    previous_projects: []
  });

  const categories = [
     { id: 'electrical', name: 'Electrical & Wiring', icon: <Zap size={28} />, desc: 'A/C, House wiring, Repairs' },
     { id: 'plumbing', name: 'Plumbing Solutions', icon: <Wrench size={28} />, desc: 'Pipes, Bathrooms, Leaks' },
     { id: 'tech', name: 'IT & Technical', icon: <Monitor size={28} />, desc: 'Computers, Networks' },
     { id: 'cleaning', name: 'Cleaning & Janitorial', icon: <Paintbrush size={28} />, desc: 'Deep clean, Housekeeping' },
     { id: 'beauty', name: 'Salon & Beauty', icon: <Scissors size={28} />, desc: 'Hair, Makeup, Spa' },
     { id: 'events', name: 'Events & Photography', icon: <Camera size={28} />, desc: 'Photoshoots, Planning' }
  ];

  const subCategoriesData = {
     'plumbing': ['Leak Repair', 'Pipe Installation', 'Bathroom Fitting', 'Waterproofing'],
     'electrical': ['House Wiring', 'A/C Repair & Service', 'Generator Diagnostics', 'Appliance Fixing'],
     'tech': ['Computer Repair', 'Network Setup', 'Software Installation', 'CCTV System'],
     'cleaning': ['Home Deep Cleaning', 'Sofa & Carpet Cleaning', 'Office Janitorial', 'Pest Control'],
     'beauty': ['Bridal Makeup', 'Hair Dressing', 'Facial & Skincare', 'Mehendi Artist'],
     'events': ['Wedding Photography', 'Event Planning', 'Catering Services', 'DJ & Music']
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // -------------------------------------------------------------
  // Dynamic Arrays Logic
  // -------------------------------------------------------------
  const handleAddCatalogue = () => {
    setFormData(prev => ({
      ...prev,
      service_catalogue: [...prev.service_catalogue, { category_name: '', image: '', description: '', price: '', warranty: '' }]
    }));
  };

  const handleUpdateCatalogue = (index, field, value) => {
    const newCat = [...formData.service_catalogue];
    newCat[index][field] = value;
    setFormData(prev => ({ ...prev, service_catalogue: newCat }));
  };

  const handleRemoveCatalogue = (index) => {
    setFormData(prev => ({
      ...prev,
      service_catalogue: prev.service_catalogue.filter((_, i) => i !== index)
    }));
  };

  const handleAddProject = () => {
    setFormData(prev => ({
      ...prev,
      previous_projects: [...prev.previous_projects, { service_name: '', location: '', client_name: '', images: [] }]
    }));
  };

  const handleUpdateProject = (index, field, value) => {
    const newProj = [...formData.previous_projects];
    newProj[index][field] = value;
    setFormData(prev => ({ ...prev, previous_projects: newProj }));
  };

  const handleRemoveProject = (index) => {
    setFormData(prev => ({
      ...prev,
      previous_projects: prev.previous_projects.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Ad Payload:", formData);
    navigate('/seller/services');
  };

  // -------------------------------------------------------------
  // Render Steps
  // -------------------------------------------------------------
  
  const renderStepIcon = (num, label) => {
    const isActive = step === num;
    const isCompleted = step > num;
    return (
      <div className={`step-node ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-complete' : ''}`}>
        <div className={`step-dot ${isCompleted ? 'is-complete' : ''} ${isActive ? 'is-active' : ''}`}>
          {isCompleted ? <CheckCircle size={16} color="white"/> : String(num).padStart(2, '0')}
        </div>
        <span className="step-label fw-600 text-sm">{label}</span>
      </div>
    );
  };

  return (
    <div className="create-ad-container pb-5">
      {/* Header */}
      <div className="create-ad-header mb-4">
        <h2 className="create-ad-title">Create Service Ad</h2>
        <p className="text-muted create-ad-subtitle">Draft a comprehensive listing to attract new clients to your business.</p>
      </div>

      {/* Progress Stepper */}
      <div className="card p-4 mb-4 create-ad-stepper-card">
         <div className="create-ad-stepper">
            {stepLabels.map((label, i) => renderStepIcon(i + 1, label))}
         </div>
      </div>

      {/* Main Container */}
      <div className="card p-0 create-ad-main-card">
          <div className="p-4 p-md-5">

            {/* STEP 1: CLASSIFICATION */}
            {step === 1 && (
              <div>
                <h3 className="fw-600 mb-4 create-ad-section-title">1. Select Primary Category</h3>
                <div className="category-grid">
                    {categories.map((cat) => (
                      <div
                          key={cat.id}
                          className={`category-card ${formData.category_id === cat.id ? 'is-selected' : ''}`}
                          onClick={() => setFormData(prev => ({...prev, category_id: cat.id, subcategory_id: null}))}
                      >
                          <div className="category-icon">{cat.icon}</div>
                          <h4 className="category-title">{cat.name}</h4>
                          <p className="text-muted text-sm m-0">{cat.desc}</p>
                      </div>
                    ))}
                    <div
                      className={`category-card category-card-other ${formData.category_id === 'other' ? 'is-selected' : ''}`}
                      onClick={() => setFormData(prev => ({...prev, category_id: 'other', subcategory_id: null}))}
                    >
                      <div className="category-icon"><Briefcase size={28} /></div>
                      <h4 className="category-title">Other Services</h4>
                      <p className="text-muted text-sm m-0">Add a custom niche category</p>
                    </div>
                </div>

                {formData.category_id && (
                  <div className="mt-4 animate-fade-in">
                    <h3 className="fw-600 mb-3 create-ad-section-title">Select Specific Subcategory</h3>
                    {formData.category_id !== 'other' ? (
                        <div className="subcategory-chip-wrap">
                          {subCategoriesData[formData.category_id]?.map(sub => (
                              <div
                                key={sub}
                                className={`subcategory-chip ${formData.subcategory_id === sub ? 'is-selected' : ''}`}
                                onClick={() => setFormData(prev => ({...prev, subcategory_id: sub}))}
                              >
                                {sub}
                              </div>
                          ))}
                        </div>
                    ) : (
                        <div style={{ maxWidth: '400px' }}>
                          <input type="text" placeholder="e.g. Tree Cutting" className="form-control" name="subcategory_id" onChange={handleChange} value={formData.subcategory_id || ''} />
                        </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: BASIC DETAILS */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="fw-600 mb-4 create-ad-section-title">2. Basic Information</h3>
                
                <div className="form-group mb-4">
                  <label className="fw-500 mb-2">Ad Title *</label>
                  <input type="text" className="form-control" name="ad_title" value={formData.ad_title} onChange={handleChange} placeholder="e.g. Professional Pipeline Installation & Leak Repair" />
                  <small className="text-muted mt-1 d-block">Be specific and descriptive to rank higher in searches.</small>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <label className="fw-500 mb-2">District *</label>
                    <select className="form-control" name="district" value={formData.district} onChange={handleChange}>
                      <option value="">Select District</option>
                      <option value="colombo">Colombo</option>
                      <option value="gampaha">Gampaha</option>
                      <option value="kandy">Kandy</option>
                      <option value="galle">Galle</option>
                    </select>
                  </div>
                  <div className="col-md-6 mt-3 mt-md-0">
                    <label className="fw-500 mb-2">City *</label>
                    <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Nugegoda" />
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label className="fw-500 mb-2">Service Description *</label>
                  <textarea className="form-control" name="service_description" value={formData.service_description} onChange={handleChange} rows="5" placeholder="Detail your service offerings, expertise, and what the customer expects..."></textarea>
                </div>
              </div>
            )}

            {/* STEP 3: MEDIA & PRICING */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="fw-600 mb-4 create-ad-section-title">3. Media & Pricing</h3>

                <div className="row mb-5">
                   <div className="col-md-6">
                      <div className="card p-4 text-center media-upload-card">
                         <UploadCloud size={40} color="var(--primary-color)" className="mx-auto mb-3" />
                         <h5 className="fw-600">Upload Service Images</h5>
                         <p className="text-muted text-sm mb-0">At least 1 image is mandatory. Max 5.</p>
                      </div>
                   </div>
                   <div className="col-md-6 mt-3 mt-md-0">
                      <div className="card p-4 text-center media-upload-card">
                         <Camera size={40} color="var(--primary-color)" className="mx-auto mb-3" />
                         <h5 className="fw-600">Upload Service Video (Optional)</h5>
                         <p className="text-muted text-sm mb-0">Increase trust with a short video clip.</p>
                      </div>
                   </div>
                </div>

                <hr style={{ borderColor: 'var(--light-gray)', margin: '2rem 0' }} />

                <div className="row mb-4">
                  <div className="col-md-4">
                    <label className="fw-500 mb-2">Pricing Type</label>
                    <select className="form-control" name="pricing_type" value={formData.pricing_type} onChange={handleChange}>
                      <option value="Fixed">Fixed Price</option>
                      <option value="Starting">Starting From</option>
                      <option value="Hourly">Hourly Rate</option>
                      <option value="Negotiable">Contact for quote</option>
                    </select>
                  </div>
                  <div className="col-md-4 mt-3 mt-md-0">
                    <label className="fw-500 mb-2">Price (LKR)</label>
                    <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. 5000" disabled={formData.pricing_type === 'Negotiable'} />
                  </div>
                  <div className="col-md-4 mt-3 mt-md-0 d-flex align-items-end">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', height: '48px' }}>
                      <input type="checkbox" id="neg" name="negotiable_status" checked={formData.negotiable_status} onChange={handleChange} style={{ width: '18px', height: '18px' }}/>
                      <label htmlFor="neg" className="fw-500 m-0">Negotiable Status</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="fw-500 mb-2">Availability Schedule</label>
                  <input type="text" className="form-control" name="availability_schedule" value={formData.availability_schedule} onChange={handleChange} placeholder="e.g. Weekdays 9 AM - 6 PM, Available on weekends on call" />
                </div>
              </div>
            )}

            {/* STEP 4: PRO FEATURES */}
            {step === 4 && (
              <div className="animate-fade-in">
                <div className="pro-header-banner">
                  <h3 className="fw-600 m-0 create-ad-section-title">4. Pro Plan Enhancements</h3>
                  <p className="text-muted m-0 text-sm mt-1">Configure advanced catalogues and past projects to aggressively convert visitors into clients.</p>
                </div>

                {/* Avg Response Time */}
                <div className="form-group mb-5 response-time-group">
                  <label className="fw-500 mb-2 text-primary">Expected Avg. Response Time</label>
                  <select className="form-control" name="avg_response_time" value={formData.avg_response_time} onChange={handleChange}>
                    <option value="">Select typical response frame</option>
                    <option value="15m">Under 15 Minutes</option>
                    <option value="1h">Under 1 Hour</option>
                    <option value="2h">1-2 Hours</option>
                    <option value="24h">Within 24 Hours</option>
                  </select>
                </div>

                {/* Service Catalogues Array */}
                <div className="mb-5 border p-4 pro-box">
                   <div className="d-flex justify-between align-center mb-4">
                      <h4 className="fw-600 m-0">Service Catalogues</h4>
                      <button type="button" className="btn btn-outline d-flex align-center gap-2 text-sm" onClick={handleAddCatalogue}><Plus size={16}/> Add Category Item</button>
                   </div>
                   <p className="text-muted text-sm mb-4">Break down your service into specific sub-offerings (e.g., Slab Waterproofing, Wall Waterproofing) with individual pricing.</p>

                   {formData.service_catalogue.map((cat, index) => (
                      <div key={index} className="card p-3 mb-4 pro-item-card">
                         <div className="d-flex justify-between mb-3 align-items-center">
                            <span className="fw-600 text-sm item-badge">Item {index + 1}</span>
                            <button type="button" className="text-danger-red style-reset" onClick={() => handleRemoveCatalogue(index)}><X size={18}/></button>
                         </div>
                         <div className="row">
                            <div className="col-md-6 form-group mb-3">
                               <label className="text-sm fw-500">Category Name</label>
                               <input type="text" className="form-control form-control-sm" value={cat.category_name} onChange={(e) => handleUpdateCatalogue(index, 'category_name', e.target.value)} placeholder="e.g. Slab Waterproofing"/>
                            </div>
                            <div className="col-md-6 form-group mb-3">
                               <label className="text-sm fw-500">Price / Rate (Optional)</label>
                               <input type="text" className="form-control form-control-sm" value={cat.price} onChange={(e) => handleUpdateCatalogue(index, 'price', e.target.value)} placeholder="e.g. LKR 250 per sqft"/>
                            </div>
                            <div className="col-md-6 form-group mb-3 mb-md-0">
                               <label className="text-sm fw-500">Short Description</label>
                               <input type="text" className="form-control form-control-sm" value={cat.description} onChange={(e) => handleUpdateCatalogue(index, 'description', e.target.value)} placeholder="Quick overview"/>
                            </div>
                            <div className="col-md-6 form-group m-0">
                               <label className="text-sm fw-500">Warranty</label>
                               <input type="text" className="form-control form-control-sm" value={cat.warranty} onChange={(e) => handleUpdateCatalogue(index, 'warranty', e.target.value)} placeholder="e.g. 5 Years"/>
                            </div>
                         </div>
                      </div>
                   ))}
                   {formData.service_catalogue.length === 0 && <div className="text-muted text-sm text-center p-3 bg-light rounded">No sub-catalogues configured yet.</div>}
                </div>

                {/* Previous Projects Array */}
                <div className="mb-4 border p-4 pro-box">
                   <div className="d-flex justify-between align-center mb-4">
                      <h4 className="fw-600 m-0">Previous Projects</h4>
                      <button type="button" className="btn btn-outline d-flex align-center gap-2 text-sm" onClick={handleAddProject}><Plus size={16}/> Add Project</button>
                   </div>
                   <p className="text-muted text-sm mb-4">Boost credibility by showing a portfolio of actual completed jobs related to this ad.</p>

                   {formData.previous_projects.map((proj, index) => (
                      <div key={index} className="card p-3 mb-4 pro-item-card">
                         <div className="d-flex justify-between mb-3 align-items-center">
                            <span className="fw-600 text-sm item-badge">Project {index + 1}</span>
                            <button type="button" className="text-danger-red style-reset" onClick={() => handleRemoveProject(index)}><X size={18}/></button>
                         </div>
                         <div className="row">
                            <div className="col-md-4 form-group mb-3">
                               <label className="text-sm fw-500">Project Name</label>
                               <input type="text" className="form-control form-control-sm" value={proj.service_name} onChange={(e) => handleUpdateProject(index, 'service_name', e.target.value)} placeholder="e.g. Apparent Apartment Plumb"/>
                            </div>
                            <div className="col-md-4 form-group mb-3">
                               <label className="text-sm fw-500">Location</label>
                               <input type="text" className="form-control form-control-sm" value={proj.location} onChange={(e) => handleUpdateProject(index, 'location', e.target.value)} placeholder="e.g. Colombo 07"/>
                            </div>
                            <div className="col-md-4 form-group mb-3">
                               <label className="text-sm fw-500">Client Name</label>
                               <input type="text" className="form-control form-control-sm" value={proj.client_name} onChange={(e) => handleUpdateProject(index, 'client_name', e.target.value)} placeholder="e.g. John Doe"/>
                            </div>
                         </div>
                         <div className="d-flex align-items-center gap-3">
                            <button className="btn btn-outline text-sm py-1 px-3 d-flex align-items-center gap-2"><ImageIcon size={14}/> Add Images (Max 5)</button>
                            <span className="text-sm text-muted">0 Images Attached</span>
                         </div>
                      </div>
                   ))}
                   {formData.previous_projects.length === 0 && <div className="text-muted text-sm text-center p-3 bg-light rounded">No projects added yet.</div>}
                </div>

              </div>
            )}

            <hr className={`create-ad-divider ${step === 1 ? 'spacious' : ''}`} />

            {/* Controller Ribbon */}
            <div className="create-ad-actions">
               {step > 1 ? (
                 <button className="btn btn-outline d-flex align-items-center gap-2" onClick={() => setStep(step - 1)}>
                   <ChevronLeft size={18} /> Back
                 </button>
               ) : (
                 <button className="btn btn-outline" onClick={() => navigate('/seller/services')}>Cancel</button>
               )}
               
               {step < 4 ? (
                 <button 
                    className="btn btn-primary d-flex align-items-center gap-2" 
                    onClick={() => setStep(step + 1)}
                    disabled={step === 1 && !formData.subcategory_id}
                 >
                    Next Step <ChevronRight size={18} />
                 </button>
               ) : (
                 <button className="btn btn-primary d-flex align-items-center gap-2" style={{ background: 'var(--success-green)', borderColor: 'var(--success-green)' }} onClick={handleSubmit}>
                    Publish Ad <CheckCircle size={18} />
                 </button>
               )}
            </div>

          </div>
      </div>

    </div>
  );
};

export default CreateAd;
