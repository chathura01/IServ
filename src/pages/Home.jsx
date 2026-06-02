import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ShieldCheck, Star, Wrench, Calendar } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

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
            <span className="hero-badge">Trusted by 50,000+ Sri Lankans</span>
            <h1 className="hero-title">Find the Best <span>Local Professionals</span> for Any Job</h1>
            <p className="hero-subtitle">From plumbing to tutoring, book verified experts in minutes. Premium service at your fingertips.</p>
            
            <form className="hero-search" onSubmit={handleSearch}>
              <div className="search-input-group border-right">
                <Search className="search-icon" size={20} />
                <input type="text" placeholder="What service do you need?" />
              </div>
              <div className="search-input-group location-group">
                <MapPin className="search-icon" size={20} />
                <input type="text" placeholder="Colombo" />
              </div>
              <button type="submit" className="btn btn-primary search-btn">Search</button>
            </form>

            <div className="popular-searches">
              <span>Popular:</span>
              <Link to="/search">Plumbing</Link>
              <Link to="/search">A/C Repair</Link>
              <Link to="/search">Home Nursing</Link>
              <Link to="/search">Photography</Link>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="visual-card visual-1">
              <ShieldCheck size={40} color="var(--success-green)"/>
              <h3>Verified Pros</h3>
            </div>
            <div className="visual-card visual-2">
              <Calendar size={40} color="var(--primary-color)"/>
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
            {['Waterproofing', 'Painting', 'Electrical', 'Plumbing', 'Salon & Beauty', 'Tutors', 'Photography', 'Cleaning'].map((cat, i) => (
              <Link to="/search" key={i} className="category-card">
                <div className="category-icon"><Wrench size={24} /></div>
                <h3>{cat}</h3>
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
                  <img src={`https://i.pravatar.cc/150?img=${num + 10}`} alt="Pro" className="provider-avatar" />
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
                  <span className="price">From Rs.2500</span>
                  <Link to={`/service/${num}`} className="btn btn-outline">View Profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="how-it-works section-padding">
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
      </section>
      
    </div>
  );
};
export default Home;
