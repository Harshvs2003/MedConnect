import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, User, Settings, Calendar, History, LogOut, ChevronDown } from 'lucide-react';
import { getCurrentUser, logout } from '../utils/auth';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const currentUser = getCurrentUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    window.location.href = '/';
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <Heart size={32} />
          <span>MedConnect</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/specialities">Specialities</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-appointment">Book Appointment</Link>
          
          {currentUser ? (
            <div className="user-menu" ref={dropdownRef}>
              <button className="user-trigger" onClick={toggleDropdown}>
                <div className="user-avatar">
                  <User size={18} />
                </div>
                <span className="user-greeting">Hi, {currentUser.firstName}</span>
                <ChevronDown size={16} className={`chevron ${isDropdownOpen ? 'open' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="user-dropdown">
                  <div className="dropdown-header">
                    <div className="user-profile-pic">
                      <User size={24} />
                    </div>
                    <div className="user-details">
                      <h4>{currentUser.firstName} {currentUser.lastName}</h4>
                      <p>{currentUser.email}</p>
                    </div>
                  </div>
                  
                  <div className="dropdown-divider"></div>
                  
                  <div className="dropdown-menu">
                    <button className="dropdown-item">
                      <User size={16} />
                      <span>My Profile</span>
                    </button>
                    <button className="dropdown-item">
                      <Calendar size={16} />
                      <span>My Appointments</span>
                    </button>
                    <button className="dropdown-item">
                      <History size={16} />
                      <span>Medical History</span>
                    </button>
                    <button className="dropdown-item">
                      <Settings size={16} />
                      <span>Settings</span>
                    </button>
                  </div>
                  
                  <div className="dropdown-divider"></div>
                  
                  <button className="dropdown-item logout-item" onClick={handleLogout}>
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth" className="btn btn-signin">Sign In</Link>
          )}
        </div>
        
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;