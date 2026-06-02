import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelection.css';

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (lang) => {
    // Only EN continues for now as requested
    localStorage.setItem('preferredLang', lang);
    navigate('/');
  };

  return (
    <div className="onboarding-layout">
      <div className="onboarding-card">
        <div className="brand-header">
          <h1 className="brand-logo">IServ<span>.lk</span></h1>
          <p className="welcome-text">Welcome to Sri Lanka's Premium Service Marketplace</p>
        </div>
        
        <h2 className="selection-title">Choose your preferred language</h2>
        
        <div className="language-options">
          <button className="lang-btn" onClick={() => handleSelect('en')}>
            <span className="lang-native">English</span>
            <span className="lang-sub">English</span>
          </button>
          <button className="lang-btn" onClick={() => handleSelect('si')}>
            <span className="lang-native">සිංහල</span>
            <span className="lang-sub">Sinhala</span>
          </button>
          <button className="lang-btn" onClick={() => handleSelect('ta')}>
            <span className="lang-native">தமிழ்</span>
            <span className="lang-sub">Tamil</span>
          </button>
        </div>

        <p className="onboarding-footer">By continuing, you agree to our Terms of Service</p>
      </div>
    </div>
  );
}

export default LanguageSelection;
