import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import './Auth.css';

const ForgotPassword = () => {
  return (
    <div className="auth-layout container">
      <div className="auth-container card">
        <div className="auth-header">
          <h2>Reset Password</h2>
          <p>Enter your email to receive reset instructions</p>
        </div>
        
        <form className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input type="email" placeholder="example@gmail.com" />
            </div>
          </div>
          
          <button type="button" className="btn btn-primary auth-submit" onClick={(e) => {e.preventDefault(); alert('Reset link sent!');}}>Send Reset Link</button>
        </form>

        <p className="auth-footer" style={{marginTop: '2rem'}}>
          <Link to="/login" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default ForgotPassword;
