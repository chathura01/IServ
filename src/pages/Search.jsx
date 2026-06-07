import React from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, Filter, MapPin, Star, ShieldCheck } from 'lucide-react';
import './Search.css';

const Search = () => {
  return (
    <div className="search-page bg-light pb-5">
      <div className="search-header-bg">
        <div className="container">
          <form className="search-bar-large">
            <div className="search-input-group">
              <SearchIcon className="search-icon" size={20} />
              <input type="text" placeholder="I am looking for..." defaultValue="Plumbing" />
            </div>
            <div className="search-input-group location-group border-left">
              <MapPin className="search-icon" size={20} />
              <input type="text" placeholder="Location" defaultValue="Colombo" />
            </div>
            <button className="btn btn-primary search-btn">Find Services</button>
          </form>
        </div>
      </div>

      <div className="container search-layout mt-4">
        {/* Sidebar Filters */}
        <aside className="search-filters card">
          <div className="filter-header">
            <h3>Filters</h3>
            <Filter size={18} />
          </div>
          
          <div className="filter-group">
            <h4>Category</h4>
            <select className="filter-select">
              <option>All Categories</option>
              <option selected>Plumbing</option>
              <option>Electrical</option>
              <option>Cleaning</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Price Range (Rs)</h4>
            <div className="price-inputs">
              <input type="number" placeholder="Min" />
              <span>-</span>
              <input type="number" placeholder="Max" />
            </div>
          </div>

          <div className="filter-group">
            <h4>Rating</h4>
            <div className="radio-group">
              <label><input type="radio" name="rating" /> 4.5 & up</label>
              <label><input type="radio" name="rating" /> 4.0 & up</label>
              <label><input type="radio" name="rating" /> 3.0 & up</label>
              <label><input type="radio" name="rating" defaultChecked /> Any Rating</label>
            </div>
          </div>

          <div className="filter-group">
            <h4>Options</h4>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> Verified Sellers Only
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> Top Rated
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> Available Today
            </label>
          </div>

          <button className="btn btn-primary w-100 mt-4" style={{width: '100%'}}>Apply Filters</button>
        </aside>

        {/* Search Results */}
        <main className="search-results">
          <div className="results-header">
            <h2>24 Results for "Plumbing in Colombo"</h2>
            <div className="sort-by">
              <span>Sort by:</span>
              <select className="filter-select">
                <option>Highest Rated</option>
                <option>Most Relevant</option>
                <option>Lowest Price</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          <div className="results-grid">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div key={num} className="service-card card">
                <div className="service-image">
                  <img src={`https://picsum.photos/400/250?random=${num}`} alt="Service" />
                  <button className="favorite-btn"><Star size={20} color="var(--white)" /></button>
                </div>
                
                <div className="service-content">
                  <div className="seller-meta">
                    <img src={`https://i.pravatar.cc/150?img=${num + 15}`} alt="Seller" className="seller-avatar" />
                    <div>
                      <h4 className="seller-name">Saman Kumara <ShieldCheck size={14} color="var(--success-green)" /></h4>
                      <span className="seller-level">Level 2 Seller</span>
                    </div>
                  </div>

                  <Link to={`/service/${num}`} className="service-title">Professional Bathroom Plumbing & Leak Repairs</Link>
                  
                  <div className="service-rating">
                    <Star size={16} fill="var(--warning-orange)" color="var(--warning-orange)" />
                    <strong>4.9</strong>
                    <span>(84 reviews)</span>
                  </div>
                </div>

                <div className="service-footer">
                  <div className="service-price">
                    <small>Starting at</small>
                    <strong>Rs. 3,500</strong>
                  </div>
                  <div className="service-actions">
                    <span className="service-location"><MapPin size={14} /> Colombo 05</span>
                    <Link to={`/service/${num}`} className="btn btn-outline btn-sm" style={{padding: '0.4rem 0.8rem', fontSize: '0.75rem'}}>Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="pagination" style={{marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center'}}>
            <button className="btn btn-outline" disabled>Previous</button>
            <button className="btn btn-primary">1</button>
            <button className="btn btn-outline">2</button>
            <button className="btn btn-outline">3</button>
            <button className="btn btn-outline">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Search;
