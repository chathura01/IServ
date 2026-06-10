import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Zap, Wrench, Monitor, Paintbrush, Scissors, Camera, Briefcase,
  ChevronRight, ChevronLeft, CheckCircle, UploadCloud, Plus, X, Image as ImageIcon,
  ArrowLeft, Sparkles, Info, Search
} from 'lucide-react';
import './Seller.css';

const STEP_COUNT = 4;

const CreateAd = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [categorySearch, setCategorySearch] = useState('');
  const [subcategorySearch, setSubcategorySearch] = useState('');
  const stepLabels = ['Classification', 'Basic Details', 'Media & Pricing', 'Pro Features'];

  const [formData, setFormData] = useState({
    category_id: null,
    subcategory_id: null,
    ad_title: '',
    district: '',
    city: '',
    service_description: '',
    pricing_type: 'Fixed',
    price: '',
    negotiable_status: false,
    availability_schedule: '',
    service_images: [],
    service_video: '',
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
    plumbing: ['Leak Repair', 'Pipe Installation', 'Bathroom Fitting', 'Waterproofing'],
    electrical: ['House Wiring', 'A/C Repair & Service', 'Generator Diagnostics', 'Appliance Fixing'],
    tech: ['Computer Repair', 'Network Setup', 'Software Installation', 'CCTV System'],
    cleaning: ['Home Deep Cleaning', 'Sofa & Carpet Cleaning', 'Office Janitorial', 'Pest Control'],
    beauty: ['Bridal Makeup', 'Hair Dressing', 'Facial & Skincare', 'Mehendi Artist'],
    events: ['Wedding Photography', 'Event Planning', 'Catering Services', 'DJ & Music']
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddCatalogue = () => {
    setFormData((prev) => ({
      ...prev,
      service_catalogue: [...prev.service_catalogue, { category_name: '', image: '', description: '', price: '', warranty: '' }]
    }));
  };

  const handleUpdateCatalogue = (index, field, value) => {
    const newCat = [...formData.service_catalogue];
    newCat[index][field] = value;
    setFormData((prev) => ({ ...prev, service_catalogue: newCat }));
  };

  const handleRemoveCatalogue = (index) => {
    setFormData((prev) => ({
      ...prev,
      service_catalogue: prev.service_catalogue.filter((_, i) => i !== index)
    }));
  };

  const handleAddProject = () => {
    setFormData((prev) => ({
      ...prev,
      previous_projects: [...prev.previous_projects, { service_name: '', location: '', client_name: '', images: [] }]
    }));
  };

  const handleUpdateProject = (index, field, value) => {
    const newProj = [...formData.previous_projects];
    newProj[index][field] = value;
    setFormData((prev) => ({ ...prev, previous_projects: newProj }));
  };

  const handleRemoveProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      previous_projects: prev.previous_projects.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Ad Payload:', formData);
    navigate('/seller/services');
  };

  const handlePrimaryCategoryClick = (categoryId) => {
    setFormData((prev) => {
      if (prev.category_id === categoryId) {
        return { ...prev, category_id: null, subcategory_id: null, subcategory_other: '' };
      }
      return { ...prev, category_id: categoryId, subcategory_id: null, subcategory_other: '' };
    });
    setSubcategorySearch('');
  };

  const allPrimaryCategories = [
    ...categories,
    { id: 'other', name: 'Other Services', icon: <Briefcase size={28} />, desc: 'Add a custom niche category', isOther: true }
  ];

  const selectedCategory = allPrimaryCategories.find((c) => c.id === formData.category_id);
  const progressPercent = Math.round((step / STEP_COUNT) * 100);

  const canProceedStep1 = Boolean(formData.subcategory_id);
  const canProceedStep2 = formData.ad_title.trim() && formData.district && formData.city.trim() && formData.service_description.trim();

  const goNext = () => {
    if (step < STEP_COUNT) setStep(step + 1);
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepHints = {
    1: 'Pick a category, then choose the subcategory that best matches your service.',
    2: 'Write a clear title and description so clients understand what you offer.',
    3: 'Add photos and set pricing — listings with images get more inquiries.',
    4: 'Optional Pro extras help you stand out from other providers.'
  };

  return (
    <div className="create-ad-page pb-5">
      <div className="create-ad-topbar mb-4">
        <Link to="/seller/services" className="create-ad-back-link">
          <ArrowLeft size={18} /> Back to services
        </Link>
        <div className="create-ad-progress-meta">
          <span className="text-sm text-muted">Step {step} of {STEP_COUNT}</span>
          <span className="create-ad-progress-pill">{progressPercent}%</span>
        </div>
      </div>

      <div className="create-ad-header mb-4">
        <h2 className="create-ad-title">Create Service Ad</h2>
        <p className="text-muted create-ad-subtitle">
          Build your listing in a few steps. You can go back and edit anytime before publishing.
        </p>
      </div>

      <div className="create-ad-progress-track mb-4" aria-hidden>
        <div className="create-ad-progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="card p-4 mb-4 create-ad-stepper-card">
        <div className="create-ad-stepper">
          {stepLabels.map((label, i) => {
            const num = i + 1;
            const isActive = step === num;
            const isCompleted = step > num;
            const isClickable = num < step;
            return (
              <button
                key={label}
                type="button"
                className={`step-node step-node-btn ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-complete' : ''}`}
                onClick={() => isClickable && setStep(num)}
                disabled={!isClickable && !isActive}
                aria-current={isActive ? 'step' : undefined}
              >
                <div className={`step-dot ${isCompleted ? 'is-complete' : ''} ${isActive ? 'is-active' : ''}`}>
                  {isCompleted ? <CheckCircle size={16} color="white" /> : String(num).padStart(2, '0')}
                </div>
                <span className="step-label fw-600 text-sm">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="card create-ad-main-card">
        <div className="create-ad-body">
          <div className="create-ad-step-intro">
            <p className="create-ad-step-hint m-0">
              <Info size={16} className="create-ad-hint-icon" />
              {stepHints[step]}
            </p>
            {step > 1 && formData.category_id && (
              <div className="create-ad-selection-chip">
                <span className="text-sm text-muted">Category:</span>
                <strong className="text-sm">{selectedCategory?.name}</strong>
                {formData.subcategory_id && (
                  <>
                    <span className="chip-separator">›</span>
                    <strong className="text-sm text-primary">{formData.subcategory_id}</strong>
                  </>
                )}
              </div>
            )}
          </div>

          {step === 1 && (
            <section className="create-ad-step animate-step-in">
              <h3 className="create-ad-section-title">Select primary category</h3>

            {!formData.category_id ? (
              <>
                <p className="text-muted text-sm mb-3">Choose the field that best describes your service.</p>
                <div className="input-with-icon mb-4" style={{ maxWidth: 340 }}>
                  <Search size={16} className="input-icon" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search categories..."
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    style={{ paddingLeft: '2.25rem' }}
                  />
                </div>
                <div className="category-grid">
                  {allPrimaryCategories
                    .filter((cat) => cat.name.toLowerCase().includes(categorySearch.toLowerCase()) || cat.desc.toLowerCase().includes(categorySearch.toLowerCase()))
                    .map((cat) => (
                      <div
                        key={cat.id}
                        role="button"
                        tabIndex={0}
                        className={`category-card ${cat.isOther ? 'category-card-other' : ''}`}
                        onClick={() => handlePrimaryCategoryClick(cat.id)}
                        onKeyDown={(e) => e.key === 'Enter' && handlePrimaryCategoryClick(cat.id)}
                      >
                        <div className="category-icon">{cat.icon}</div>
                        <h4 className="category-title">{cat.name}</h4>
                        <p className="text-muted text-sm m-0">{cat.desc}</p>
                      </div>
                    ))}
                  {allPrimaryCategories.filter((cat) => cat.name.toLowerCase().includes(categorySearch.toLowerCase()) || cat.desc.toLowerCase().includes(categorySearch.toLowerCase())).length === 0 && (
                    <p className="text-muted text-sm" style={{ gridColumn: '1/-1' }}>No matching categories. Try "Other Services" for a custom entry.</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="category-change-hint">Tap again on the category below to choose a different one</p>
                <div className="category-selection-focused">
                <div
                  role="button"
                  tabIndex={0}
                  className="category-card is-selected category-card-expanded"
                  onClick={() => handlePrimaryCategoryClick(formData.category_id)}
                  onKeyDown={(e) => e.key === 'Enter' && handlePrimaryCategoryClick(formData.category_id)}
                >
                  <div className="category-icon">{selectedCategory?.icon}</div>
                  <h4 className="category-title">{selectedCategory?.name}</h4>
                  <p className="text-muted text-sm m-0">{selectedCategory?.desc}</p>
                </div>

                <div className="subcategory-panel">
                  <h4 className="subcategory-panel-title">Choose subcategory</h4>
                  <p className="text-muted text-sm mb-3">Required to continue</p>
                  {formData.category_id !== 'other' ? (
                    <>
                      <div className="input-with-icon mb-3">
                        <Search size={15} className="input-icon" />
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Search subcategories..."
                          value={subcategorySearch}
                          onChange={(e) => setSubcategorySearch(e.target.value)}
                          style={{ paddingLeft: '2.1rem' }}
                        />
                      </div>
                      <div className="subcategory-chip-wrap">
                        {(subCategoriesData[formData.category_id] || [])
                          .filter((sub) => sub.toLowerCase().includes(subcategorySearch.toLowerCase()))
                          .map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              className={`subcategory-chip ${formData.subcategory_id === sub && !formData.subcategory_other ? 'is-selected' : ''}`}
                              onClick={() => setFormData((prev) => ({ ...prev, subcategory_id: sub, subcategory_other: '' }))}
                            >
                              {sub}
                              {formData.subcategory_id === sub && !formData.subcategory_other && <CheckCircle size={14} />}
                            </button>
                          ))}
                        {(subCategoriesData[formData.category_id] || []).filter((sub) => sub.toLowerCase().includes(subcategorySearch.toLowerCase())).length === 0 && (
                          <p className="text-muted text-sm m-0">No matches — use the field below.</p>
                        )}
                      </div>
                      <div className="subcategory-other-input" style={{ marginTop: '1rem' }}>
                        <label className="fw-500 mb-2 d-block text-sm">Other – specify your subcategory</label>
                        <input
                          type="text"
                          placeholder="e.g. Rooftop waterproofing"
                          className="form-control form-control-sm"
                          value={formData.subcategory_other || ''}
                          onChange={(e) => setFormData((prev) => ({
                            ...prev,
                            subcategory_other: e.target.value,
                            subcategory_id: e.target.value ? `Other: ${e.target.value}` : prev.subcategory_id
                          }))}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="subcategory-other-input">
                      <label className="fw-500 mb-2 d-block">Your service type</label>
                      <input
                        type="text"
                        placeholder="e.g. Tree Cutting"
                        className="form-control"
                        name="subcategory_id"
                        onChange={handleChange}
                        value={formData.subcategory_id || ''}
                      />
                    </div>
                  )}
                </div>
              </div>
              </>
            )}
            </section>
          )}

          {step === 2 && (
            <section className="create-ad-step animate-step-in">
              <h3 className="create-ad-section-title">Basic information</h3>

              <div className="create-ad-form-block">
                <div className="form-group">
                  <label className="create-ad-label">Ad title <span className="required">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="ad_title"
                    value={formData.ad_title}
                    onChange={handleChange}
                    placeholder="e.g. Professional pipeline installation & leak repair"
                  />
                  <span className="field-hint">Be specific — good titles rank higher in search.</span>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group">
                    <label className="create-ad-label">District <span className="required">*</span></label>
                    <select className="form-control" name="district" value={formData.district} onChange={handleChange}>
                      <option value="">Select district</option>
                      <option value="colombo">Colombo</option>
                      <option value="gampaha">Gampaha</option>
                      <option value="kandy">Kandy</option>
                      <option value="galle">Galle</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label className="create-ad-label">City <span className="required">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Nugegoda"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="create-ad-label">Service description <span className="required">*</span></label>
                  <textarea
                    className="form-control create-ad-textarea"
                    name="service_description"
                    value={formData.service_description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your expertise, what's included, and what clients can expect..."
                  />
                  <span className="field-hint">{formData.service_description.length} characters</span>
                </div>
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="create-ad-step animate-step-in">
              <h3 className="create-ad-section-title">Media & pricing</h3>

              <div className="create-ad-form-block mb-4">
                <h4 className="create-ad-block-title">Photos & video</h4>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="media-upload-card w-100">
                      <UploadCloud size={36} color="var(--primary-color)" />
                      <span className="fw-600">Upload service images</span>
                      <span className="text-muted text-sm">At least 1 required · Max 5</span>
                    </button>
                  </div>
                  <div className="col-md-6 mt-3 mt-md-0">
                    <button type="button" className="media-upload-card w-100">
                      <Camera size={36} color="var(--primary-color)" />
                      <span className="fw-600">Upload video</span>
                      <span className="text-muted text-sm">Optional · Builds trust</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="create-ad-form-block">
                <h4 className="create-ad-block-title">Pricing & availability</h4>
                <div className="row mb-3">
                  <div className="col-md-4 form-group">
                    <label className="create-ad-label">Pricing type</label>
                    <select className="form-control" name="pricing_type" value={formData.pricing_type} onChange={handleChange}>
                      <option value="Fixed">Fixed price</option>
                      <option value="Starting">Starting from</option>
                      <option value="Hourly">Hourly rate</option>
                      <option value="Negotiable">Contact for quote</option>
                    </select>
                  </div>
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <label className="create-ad-label">Price (LKR)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="e.g. 5000"
                      disabled={formData.pricing_type === 'Negotiable'}
                    />
                  </div>
                  <div className="col-md-4 form-group mt-3 mt-md-0 d-flex align-items-end">
                    <label className="create-ad-checkbox">
                      <input
                        type="checkbox"
                        id="neg"
                        name="negotiable_status"
                        checked={formData.negotiable_status}
                        onChange={handleChange}
                      />
                      <span>Price is negotiable</span>
                    </label>
                  </div>
                </div>
                <div className="form-group m-0">
                  <label className="create-ad-label">Availability schedule</label>
                  <input
                    type="text"
                    className="form-control"
                    name="availability_schedule"
                    value={formData.availability_schedule}
                    onChange={handleChange}
                    placeholder="e.g. Weekdays 9 AM – 6 PM, weekends on call"
                  />
                </div>
              </div>
            </section>
          )}

          {step === 4 && (
            <section className="create-ad-step animate-step-in">
              <div className="pro-header-banner">
                <div className="d-flex align-center gap-2 mb-1">
                  <Sparkles size={20} color="var(--primary-color)" />
                  <h3 className="create-ad-section-title m-0">Pro plan enhancements</h3>
                </div>
                <p className="text-muted m-0 text-sm">Optional — catalogues and past projects help convert more visitors.</p>
              </div>

              <div className="form-group mb-4 response-time-group">
                <label className="create-ad-label">Expected response time</label>
                <select className="form-control" name="avg_response_time" value={formData.avg_response_time} onChange={handleChange}>
                  <option value="">Select typical response time</option>
                  <option value="15m">Under 15 minutes</option>
                  <option value="1h">Under 1 hour</option>
                  <option value="2h">1–2 hours</option>
                  <option value="24h">Within 24 hours</option>
                </select>
              </div>

              <div className="pro-box mb-4">
                <div className="pro-box-header">
                  <div>
                    <h4 className="fw-600 m-0">Service catalogues</h4>
                    <p className="text-muted text-sm m-0 mt-1">Break down offerings with individual pricing.</p>
                  </div>
                  <button type="button" className="btn btn-outline btn-sm" onClick={handleAddCatalogue}>
                    <Plus size={16} /> Add item
                  </button>
                </div>

                {formData.service_catalogue.map((cat, index) => (
                  <div key={index} className="pro-item-card">
                    <div className="pro-item-header">
                      <span className="item-badge">Item {index + 1}</span>
                      <button type="button" className="icon-btn-remove" onClick={() => handleRemoveCatalogue(index)} aria-label="Remove item">
                        <X size={18} />
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label className="text-sm fw-500">Category name</label>
                        <input type="text" className="form-control form-control-sm" value={cat.category_name} onChange={(e) => handleUpdateCatalogue(index, 'category_name', e.target.value)} placeholder="e.g. Slab waterproofing" />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <label className="text-sm fw-500">Price / rate</label>
                        <input type="text" className="form-control form-control-sm" value={cat.price} onChange={(e) => handleUpdateCatalogue(index, 'price', e.target.value)} placeholder="e.g. LKR 250 per sqft" />
                      </div>
                      <div className="col-md-6 form-group mt-3">
                        <label className="text-sm fw-500">Short description</label>
                        <input type="text" className="form-control form-control-sm" value={cat.description} onChange={(e) => handleUpdateCatalogue(index, 'description', e.target.value)} placeholder="Quick overview" />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <label className="text-sm fw-500">Warranty</label>
                        <input type="text" className="form-control form-control-sm" value={cat.warranty} onChange={(e) => handleUpdateCatalogue(index, 'warranty', e.target.value)} placeholder="e.g. 5 years" />
                      </div>
                    </div>
                  </div>
                ))}
                {formData.service_catalogue.length === 0 && (
                  <div className="create-ad-empty-state">No catalogue items yet. Add sub-offerings clients can pick from.</div>
                )}
              </div>

              <div className="pro-box">
                <div className="pro-box-header">
                  <div>
                    <h4 className="fw-600 m-0">Previous projects</h4>
                    <p className="text-muted text-sm m-0 mt-1">Show completed work to build credibility.</p>
                  </div>
                  <button type="button" className="btn btn-outline btn-sm" onClick={handleAddProject}>
                    <Plus size={16} /> Add project
                  </button>
                </div>

                {formData.previous_projects.map((proj, index) => (
                  <div key={index} className="pro-item-card">
                    <div className="pro-item-header">
                      <span className="item-badge">Project {index + 1}</span>
                      <button type="button" className="icon-btn-remove" onClick={() => handleRemoveProject(index)} aria-label="Remove project">
                        <X size={18} />
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-4 form-group">
                        <label className="text-sm fw-500">Project name</label>
                        <input type="text" className="form-control form-control-sm" value={proj.service_name} onChange={(e) => handleUpdateProject(index, 'service_name', e.target.value)} placeholder="e.g. Apartment plumbing" />
                      </div>
                      <div className="col-md-4 form-group mt-3 mt-md-0">
                        <label className="text-sm fw-500">Location</label>
                        <input type="text" className="form-control form-control-sm" value={proj.location} onChange={(e) => handleUpdateProject(index, 'location', e.target.value)} placeholder="e.g. Colombo 07" />
                      </div>
                      <div className="col-md-4 form-group mt-3 mt-md-0">
                        <label className="text-sm fw-500">Client name</label>
                        <input type="text" className="form-control form-control-sm" value={proj.client_name} onChange={(e) => handleUpdateProject(index, 'client_name', e.target.value)} placeholder="e.g. John Doe" />
                      </div>
                    </div>
                    <div className="d-flex align-center gap-3 mt-3 flex-wrap">
                      <button type="button" className="btn btn-outline btn-sm">
                        <ImageIcon size={14} /> Add images (max 5)
                      </button>
                      <span className="text-sm text-muted">0 images attached</span>
                    </div>
                  </div>
                ))}
                {formData.previous_projects.length === 0 && (
                  <div className="create-ad-empty-state">No projects added yet. Portfolio work increases booking rates.</div>
                )}
              </div>
            </section>
          )}
        </div>

        <div className="create-ad-footer">
          {step === 1 && !canProceedStep1 && (
            <p className="create-ad-validation-msg m-0">Select a subcategory to continue.</p>
          )}
          {step === 2 && !canProceedStep2 && (
            <p className="create-ad-validation-msg m-0">Fill in all required fields to continue.</p>
          )}

          <div className="create-ad-actions">
            {step > 1 ? (
              <button type="button" className="btn btn-outline" onClick={goBack}>
                <ChevronLeft size={18} /> Back
              </button>
            ) : (
              <button type="button" className="btn btn-outline" onClick={() => navigate('/seller/services')}>
                Cancel
              </button>
            )}

            {step < STEP_COUNT ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={goNext}
                disabled={(step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2)}
              >
                Continue <ChevronRight size={18} />
              </button>
            ) : (
              <button type="button" className="btn btn-publish" onClick={handleSubmit}>
                Publish ad <CheckCircle size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAd;
