import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu } from 'lucide-react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <>
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
          <li><Link to="/services">24x7 Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/contact" className="btn btn-primary">Book Appointment</Link></li>
        </ul>
        
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;