import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ShieldCheck, Star, Wrench, Calendar, Droplets, Paintbrush, Zap, Scissors, GraduationCap, Camera, Sparkles } from 'lucide-react';
import './Home.css';
import { allServicesList } from '../data/servicesList';
import { sriLankanDistricts } from '../data/locationsList';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
  const searchRef = useRef(null);
  const [locationQuery, setLocationQuery] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const locationRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredServices(allServicesList);
    } else {
      setFilteredServices(
        allServicesList.filter(service =>
          service.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceSelect = (service) => {
    setSearchQuery(service);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (locationQuery.trim() === '') {
      setFilteredLocations(sriLankanDistricts);
    } else {
      setFilteredLocations(
        sriLankanDistricts.filter(dist =>
          dist.toLowerCase().includes(locationQuery.toLowerCase())
        )
      );
    }
  }, [locationQuery]);

  useEffect(() => {
    const handleClickOutsideLoc = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideLoc);
    return () => document.removeEventListener('mousedown', handleClickOutsideLoc);
  }, []);

  const handleLocationSelect = (loc) => {
    setLocationQuery(loc);
    setShowLocationDropdown(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Find the Best <span>Local Professionals</span> for Any Job</h1>
            <p className="hero-subtitle">From plumbing to tutoring, book verified experts in minutes. Premium service at your fingertips.</p>

            <form className="hero-search" onSubmit={handleSearch}>
              <div className="search-input-group border-right" ref={searchRef} style={{ position: 'relative' }}>
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                />
                {showDropdown && (
                  <div className="search-dropdown">
                    {filteredServices.length > 0 ? (
                      filteredServices.map((service, index) => (
                        <div
                          key={index}
                          className="search-dropdown-item"
                          onClick={() => handleServiceSelect(service)}
                        >
                          {service}
                        </div>
                      ))
                    ) : (
                      <div className="search-dropdown-item text-muted">No services found</div>
                    )}
                  </div>
                )}
              </div>
              <div className="search-input-group location-group" ref={locationRef} style={{ position: 'relative' }}>
                <MapPin className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Select District"
                  value={locationQuery}
                  onChange={(e) => {
                    setLocationQuery(e.target.value);
                    setShowLocationDropdown(true);
                  }}
                  onFocus={() => setShowLocationDropdown(true)}
                />
                {showLocationDropdown && (
                  <div className="search-dropdown">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((loc, index) => (
                        <div
                          key={index}
                          className="search-dropdown-item"
                          onClick={() => handleLocationSelect(loc)}
                        >
                          {loc}
                        </div>
                      ))
                    ) : (
                      <div className="search-dropdown-item text-muted">No districts found</div>
                    )}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary search-btn">Search</button>
            </form>
            <div className="popular-searches" style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto', whiteSpace: 'nowrap', gap: '0.75rem', marginTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <span style={{ flexShrink: 0 }}>Popular Searches :</span>
              <Link to="/search" style={{ flexShrink: 0 }}>Plumbing</Link>
              <Link to="/search" style={{ flexShrink: 0 }}>A/C Repair</Link>
              <Link to="/search" style={{ flexShrink: 0 }}>Home Nursing</Link>
              <Link to="/search" style={{ flexShrink: 0 }}>Photography</Link>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="visual-card visual-1">
              <ShieldCheck size={40} color="var(--success-green)" />
              <h3>Verified Pros</h3>
            </div>
            <div className="visual-card visual-2">
              <Calendar size={40} color="var(--primary-color)" />
              <h3>Instant Booking</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Categories */}
      <section className="categories section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Popular Categories</h2>
            <Link to="/search" className="view-all">View All Services &rarr;</Link>
          </div>
          <div className="category-grid">
            {[
              { name: 'Waterproofing', icon: <Droplets size={24} /> },
              { name: 'Painting', icon: <Paintbrush size={24} /> },
              { name: 'Electrical', icon: <Zap size={24} /> },
              { name: 'Plumbing', icon: <Wrench size={24} /> },
              { name: 'Salon & Beauty', icon: <Scissors size={24} /> },
              { name: 'Tutors', icon: <GraduationCap size={24} /> },
              { name: 'Photography', icon: <Camera size={24} /> },
              { name: 'Cleaning', icon: <Sparkles size={24} /> },
            ].map((cat, i) => (
              <Link to="/search" key={i} className="category-card">
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. Featured & Verified Providers */}
      <section className="featured-providers section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Top Rated Pros Weekly</h2>
            <p>Hire professionals with exceptional track records</p>
          </div>
          <div className="provider-grid">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="provider-card card">
                <div className="provider-header">
                  <img src={`https://randomuser.me/api/portraits/men/${num + 30}.jpg`} alt="Pro" className="provider-avatar" />
                  <div className="provider-info">
                    <h3>Nuwan Perera <ShieldCheck size={16} color="var(--success-green)" /></h3>
                    <p>Expert Plumber</p>
                  </div>
                </div>
                <div className="provider-stats">
                  <span><Star size={14} color="var(--warning-orange)" fill="var(--warning-orange)" /> 4.9 (120)</span>
                  <span>Colombo 05</span>
                </div>
                <div className="provider-footer">
                  <Link to={`/service/${num}`} className="btn btn-outline">View Profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      {/* <section className="how-it-works section-padding">
        <div className="container text-center">
          <h2>How IServ Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Search</h3>
              <p>Find the exact service you need</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Chat</h3>
              <p>Discuss details with verified pros</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Book</h3>
              <p>Schedule an appointment</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Get Service</h3>
              <p>Pay only after task completion</p>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};
export default Home;
