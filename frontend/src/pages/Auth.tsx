import React, { useState, useEffect } from 'react';
import { Heart, User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
import { registerUser, loginUser, isAuthenticated } from '../utils/auth';
import '../styles/auth.css';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  useEffect(() => {
    if (isAuthenticated()) {
      window.location.href = '/';
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError('Please fill in all required fields');
        return;
      }

      const result = loginUser({
        email: formData.email,
        password: formData.password
      });

      if (result.success) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } else {
        setError(result.message);
      }
    } else {
      if (!formData.firstName || !formData.lastName || !formData.email || 
          !formData.phone || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all required fields');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }

      if (!formData.agreeTerms) {
        setError('Please agree to the Terms of Service and Privacy Policy');
        return;
      }

      const result = registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });

      if (result.success) {
        setSuccess('Registration successful! You can now sign in.');
        setIsLogin(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: formData.email,
          phone: '',
          password: '',
          confirmPassword: '',
          agreeTerms: false
        });
      } else {
        setError(result.message);
      }
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-overlay"></div>
      </div>
      
      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <Heart size={32} />
              <span>MedConnect</span>
            </div>
            <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p>
              {isLogin 
                ? 'Sign in to access your healthcare dashboard' 
                : 'Join MedConnect for better healthcare management'
              }
            </p>
          </div>

          {error && (
            <div className="auth-message error-message">
              {error}
            </div>
          )}

          {success && (
            <div className="auth-message success-message">
              {success}
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    <User size={16} />
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required={!isLogin}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">
                    <User size={16} />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="phone">
                  <Phone size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="password">
                <Lock size={16} />
                Password *
              </label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <Lock size={16} />
                  Confirm Password *
                </label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
            )}

            {!isLogin && (
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required={!isLogin}
                  />
                  <span>
                    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                  </span>
                </label>
              </div>
            )}

            <button type="submit" className="btn btn-primary auth-submit">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="social-auth">
            <button className="btn social-btn google-btn">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
              Continue with Google
            </button>
            <button className="btn social-btn facebook-btn">
              <div className="facebook-icon">f</div>
              Continue with Facebook
            </button>
          </div>

          <div className="auth-switch">
            <p>
              {isLogin ? "New to MedConnect?" : "Already have an account?"}{' '}
              <button type="button" onClick={toggleAuthMode} className="switch-btn">
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        <div className="auth-features">
          <h3>Why Choose MedConnect?</h3>
          <div className="features-list">
            <div className="feature">
              <div className="feature-icon">
                <Heart size={20} />
              </div>
              <div>
                <h4>Expert Care</h4>
                <p>Access to 200+ specialist doctors</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <User size={20} />
              </div>
              <div>
                <h4>Personal Dashboard</h4>
                <p>Manage appointments and health records</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Phone size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;