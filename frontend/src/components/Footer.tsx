import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Heart size={32} color="#3B82F6" />
              <h3 style={{ margin: 0, color: '#3B82F6' }}>MedConnect</h3>
            </div>
            <p>
              Leading multi-specialty hospital in India, providing world-class healthcare 
              services with compassion and excellence since 1995.
            </p>
            <p>
              <strong>NABH Accredited | ISO 9001:2015 Certified</strong>
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/specialities">Specialities</a>
            <a href="/doctors">Our Doctors</a>
            <a href="/services">24x7 Services</a>
            <a href="/blogs">Health Blogs</a>
            <a href="/contact">Contact Us</a>
          </div>
          
          <div className="footer-section">
            <h3>Specialities</h3>
            <a href="/specialities">Cardiology</a>
            <a href="/specialities">Neurology</a>
            <a href="/specialities">Orthopedics</a>
            <a href="/specialities">Oncology</a>
            <a href="/specialities">Emergency Care</a>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Phone size={16} />
              <span>+91 11 4567 8900</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Mail size={16} />
              <span>info@medconnect.in</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
              <MapPin size={16} style={{ marginTop: '2px' }} />
              <span>Sector 44, Gurgaon, Haryana - 122003, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={16} />
              <span>24/7 Emergency Services</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MedConnect Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;