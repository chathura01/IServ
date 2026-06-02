import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-layout container">
      <div className="auth-container card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to access your IServ account</p>
        </div>
        
        <form className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input type="email" placeholder="example@gmail.com" />
            </div>
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          </div>

          <button type="button" className="btn btn-primary auth-submit" onClick={(e) => {e.preventDefault(); window.location.href='/seller'}}>Login</button>
        </form>

        <div className="auth-divider">
          <span>Or continue with</span>
        </div>

        <button className="btn btn-outline google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" />
          Google
        </button>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
