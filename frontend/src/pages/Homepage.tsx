import React from 'react';
import { Heart, Users, Award, Clock, Stethoscope, Activity, Shield, Star } from 'lucide-react';
import '../styles/homepage.css';

const Homepage: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Excellence in Healthcare</h1>
          <p>
            Trusted by over 2 million families across India. Experience compassionate care 
            with cutting-edge medical technology at MedConnect.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn btn-primary">Book Appointment</a>
            <a href="/services" className="btn btn-secondary">Emergency: +91 11 4567 8900</a>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">
                <Heart size={32} />
              </div>
              <h3>Cardiology</h3>
              <p>
                Advanced cardiac care with state-of-the-art cath labs and experienced cardiologists. 
                24/7 emergency cardiac services available.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Activity size={32} />
              </div>
              <h3>Emergency Care</h3>
              <p>
                Round-the-clock emergency services with trauma care, critical care units, 
                and ambulance services across Delhi NCR.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Stethoscope size={32} />
              </div>
              <h3>Multi-Specialty</h3>
              <p>
                Comprehensive healthcare under one roof including neurology, orthopedics, 
                gastroenterology, and pediatrics.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Shield size={32} />
              </div>
              <h3>Preventive Care</h3>
              <p>
                Complete health check-up packages, vaccination programs, and wellness 
                consultations for all age groups.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Users size={32} />
              </div>
              <h3>Maternity Care</h3>
              <p>
                Comprehensive maternity services with modern labor rooms, NICU facilities, 
                and experienced gynecologists.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Star size={32} />
              </div>
              <h3>Cancer Care</h3>
              <p>
                Advanced oncology services with radiation therapy, chemotherapy, 
                and surgical oncology departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about">
            <div className="about-content">
              <h2>Why Choose MedConnect?</h2>
              <p>
                Established in 1995, MedConnect has been at the forefront of medical excellence 
                in India. We combine advanced medical technology with compassionate care to provide 
                the best possible outcomes for our patients.
              </p>
              <p>
                Our hospital is NABH accredited and ISO 9001:2015 certified, ensuring the highest 
                standards of patient safety and quality care. With over 500 beds and a team of 
                200+ specialists, we're equipped to handle the most complex medical cases.
              </p>
              
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Specialist Doctors</div>
                </div>
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Beds Available</div>
                </div>
                <div className="stat">
                  <div className="stat-number">2M+</div>
                  <div className="stat-label">Patients Treated</div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <img 
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Modern Hospital Interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#2563EB', marginBottom: '20px' }}>Accreditations & Certifications</h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Recognized by leading healthcare authorities in India for our commitment to quality and safety.
            </p>
          </div>
          
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="service-card">
              <div className="icon">
                <Award size={32} />
              </div>
              <h3>NABH Accredited</h3>
              <p>National Accreditation Board for Hospitals & Healthcare Providers</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Shield size={32} />
              </div>
              <h3>ISO 9001:2015</h3>
              <p>International Quality Management System Certification</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Star size={32} />
              </div>
              <h3>NABL Certified Lab</h3>
              <p>National Accreditation Board for Testing and Calibration Laboratories</p>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Clock size={32} />
              </div>
              <h3>Green OT Certified</h3>
              <p>Environment-friendly operation theaters with advanced ventilation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;