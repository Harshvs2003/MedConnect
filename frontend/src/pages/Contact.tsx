import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, User, MessageSquare, Calendar } from 'lucide-react';
import '../styles/contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      department: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            We're here to help you with all your healthcare needs. Contact us for appointments, 
            inquiries, or emergency services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Phone Numbers</h3>
                  <p><strong>Main Reception:</strong> +91 11 4567 8900</p>
                  <p><strong>Emergency:</strong> +91 11 4567 8911</p>
                  <p><strong>Appointment:</strong> +91 11 4567 8922</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Email Addresses</h3>
                  <p><strong>General Inquiry:</strong> info@medconnect.in</p>
                  <p><strong>Appointments:</strong> appointments@medconnect.in</p>
                  <p><strong>Emergency:</strong> emergency@medconnect.in</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Hospital Address</h3>
                  <p>
                    MedConnect Multi-Specialty Hospital<br />
                    Sector 44, Golf Course Road<br />
                    Gurgaon, Haryana - 122003<br />
                    India
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Clock size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Operating Hours</h3>
                  <p><strong>OPD Timings:</strong> 8:00 AM - 8:00 PM</p>
                  <p><strong>Emergency:</strong> 24/7 Available</p>
                  <p><strong>Pharmacy:</strong> 24/7 Available</p>
                  <p><strong>Lab Services:</strong> 6:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Heart size={20} />
                </div>
                <div className="contact-item-content">
                  <h3>Insurance & Payment</h3>
                  <p>We accept all major health insurance plans</p>
                  <p>Cashless treatment available for most insurance providers</p>
                  <p>EMI options available for treatments</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <User size={16} style={{ display: 'inline', marginRight: '5px' }} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={16} style={{ display: 'inline', marginRight: '5px' }} />
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

                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={16} style={{ display: 'inline', marginRight: '5px' }} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">
                    <Heart size={16} style={{ display: 'inline', marginRight: '5px' }} />
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Select Department</option>
                    <option value="general">General Inquiry</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="emergency">Emergency</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="oncology">Oncology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="gynecology">Gynecology</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <Calendar size={16} style={{ display: 'inline', marginRight: '5px' }} />
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} style={{ display: 'inline', marginRight: '5px' }} />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message or specific requirements"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#2563EB', marginBottom: '20px' }}>Quick Actions</h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Need immediate assistance? Use these quick action buttons for faster service.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">
                <Calendar size={32} />
              </div>
              <h3>Book Appointment</h3>
              <p>Schedule your consultation with our specialist doctors</p>
              <a href="tel:+911145678922" className="btn btn-primary" style={{ marginTop: '15px' }}>
                Call Now
              </a>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Phone size={32} />
              </div>
              <h3>Emergency Service</h3>
              <p>24/7 emergency medical assistance and ambulance service</p>
              <a href="tel:+911145678911" className="btn btn-secondary" style={{ marginTop: '15px' }}>
                Emergency: 108
              </a>
            </div>
            
            <div className="service-card">
              <div className="icon">
                <Heart size={32} />
              </div>
              <h3>Health Inquiry</h3>
              <p>Get answers to your health-related questions from our experts</p>
              <a href="mailto:info@medconnect.in" className="btn btn-primary" style={{ marginTop: '15px' }}>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;