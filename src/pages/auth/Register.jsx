import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, MapPin } from 'lucide-react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-layout container">
      <div className="auth-container card register-card">
        <div className="auth-header">
          <h2>Create an Account</h2>
          <p>Join Sri Lanka's fastest growing service platform</p>
        </div>
        
        <form className="auth-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input type="text" placeholder="Kamal" />
              </div>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input type="text" placeholder="Perera" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input type="email" placeholder="example@gmail.com" />
            </div>
          </div>
          
          <div className="form-group">
            <label>City / District</label>
            <div className="input-with-icon">
              <MapPin size={18} className="input-icon" />
              <input type="text" placeholder="Colombo" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" />
              </div>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" />
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-primary auth-submit" onClick={(e) => {e.preventDefault(); window.location.href='/'}}>Create Account</button>
        </form>

        <div className="auth-divider">
          <span>Or continue with</span>
        </div>

        <button className="btn btn-outline google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" />
          Google
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
