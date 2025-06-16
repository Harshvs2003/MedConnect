import React from 'react';
import { Heart, Brain, Bone, Shield, Baby, Eye, Ear, Settings as Lungs, LucideKey as Kidney, Zap } from 'lucide-react';
import '../styles/specialities.css';

const Specialities: React.FC = () => {
  const specialities = [
    {
      icon: <Heart size={40} />,
      name: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac procedures, interventional cardiology, and 24/7 emergency cardiac services.',
      services: ['Angioplasty', 'Bypass Surgery', 'Pacemaker Implantation', 'Heart Transplant'],
      doctors: '15+ Specialists'
    },
    {
      icon: <Brain size={40} />,
      name: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge diagnostic facilities.',
      services: ['Brain Surgery', 'Spine Surgery', 'Stroke Treatment', 'Epilepsy Care'],
      doctors: '12+ Specialists'
    },
    {
      icon: <Bone size={40} />,
      name: 'Orthopedics',
      description: 'Complete bone and joint care including sports medicine, joint replacement, and trauma surgery.',
      services: ['Joint Replacement', 'Sports Medicine', 'Trauma Surgery', 'Arthroscopy'],
      doctors: '18+ Specialists'
    },
    {
      icon: <Shield size={40} />,
      name: 'Oncology',
      description: 'Comprehensive cancer care with radiation therapy, chemotherapy, and surgical oncology services.',
      services: ['Chemotherapy', 'Radiation Therapy', 'Surgical Oncology', 'Immunotherapy'],
      doctors: '10+ Specialists'
    },
    {
      icon: <Baby size={40} />,
      name: 'Pediatrics',
      description: 'Specialized healthcare for children from newborns to adolescents with dedicated pediatric ICU.',
      services: ['Neonatal Care', 'Pediatric Surgery', 'Child Psychology', 'Vaccination'],
      doctors: '14+ Specialists'
    },
    {
      icon: <Heart size={40} />,
      name: 'Gynecology',
      description: 'Complete women\'s health services including maternity care, fertility treatments, and gynecological surgeries.',
      services: ['Maternity Care', 'Fertility Treatment', 'Gynec Surgery', 'Family Planning'],
      doctors: '16+ Specialists'
    },
    {
      icon: <Eye size={40} />,
      name: 'Ophthalmology',
      description: 'Advanced eye care services including cataract surgery, retinal treatments, and laser eye procedures.',
      services: ['Cataract Surgery', 'Retinal Treatment', 'LASIK Surgery', 'Glaucoma Care'],
      doctors: '8+ Specialists'
    },
    {
      icon: <Ear size={40} />,
      name: 'ENT',
      description: 'Comprehensive ear, nose, and throat care with advanced surgical and non-surgical treatments.',
      services: ['Hearing Aids', 'Sinus Surgery', 'Voice Therapy', 'Sleep Apnea'],
      doctors: '6+ Specialists'
    },
    {
      icon: <Lungs size={40} />,
      name: 'Pulmonology',
      description: 'Specialized respiratory care for lung diseases, sleep disorders, and critical respiratory conditions.',
      services: ['Asthma Care', 'COPD Treatment', 'Sleep Studies', 'Lung Transplant'],
      doctors: '7+ Specialists'
    },
    {
      icon: <Kidney size={40} />,
      name: 'Nephrology',
      description: 'Complete kidney care including dialysis, kidney transplant, and treatment of kidney diseases.',
      services: ['Dialysis', 'Kidney Transplant', 'Stone Treatment', 'Hypertension Care'],
      doctors: '9+ Specialists'
    },
    {
      icon: <Zap size={40} />,
      name: 'Emergency Medicine',
      description: '24/7 emergency services with trauma care, critical care units, and ambulance services.',
      services: ['Trauma Care', 'Critical Care', 'Ambulance Service', 'Emergency Surgery'],
      doctors: '20+ Specialists'
    },
    {
      icon: <Shield size={40} />,
      name: 'Gastroenterology',
      description: 'Advanced digestive system care including endoscopy, liver treatments, and gastrointestinal surgeries.',
      services: ['Endoscopy', 'Liver Treatment', 'IBD Care', 'Colorectal Surgery'],
      doctors: '11+ Specialists'
    }
  ];

  return (
    <div>
      <section className="specialities-hero">
        <div className="container">
          <h1>Our Medical Specialities</h1>
          <p>
            Comprehensive healthcare services across multiple specialities with world-class 
            medical professionals and state-of-the-art technology.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="specialities-intro">
            <h2>Centers of Excellence</h2>
            <p>
              MedConnect houses multiple centers of excellence, each dedicated to providing 
              specialized care in their respective fields. Our multidisciplinary approach 
              ensures comprehensive treatment for complex medical conditions.
            </p>
          </div>

          <div className="specialities-grid">
            {specialities.map((speciality, index) => (
              <div key={index} className="speciality-card">
                <div className="speciality-icon">
                  {speciality.icon}
                </div>
                <div className="speciality-content">
                  <h3>{speciality.name}</h3>
                  <p>{speciality.description}</p>
                  
                  <div className="speciality-services">
                    <h4>Key Services:</h4>
                    <ul>
                      {speciality.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="speciality-footer">
                    <span className="doctors-count">{speciality.doctors}</span>
                    <a href="/contact" className="btn btn-primary">Book Consultation</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="cta-section">
            <h2>Need Medical Consultation?</h2>
            <p>
              Our specialists are available for consultation. Book an appointment today 
              and get the best medical care tailored to your needs.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Book Appointment</a>
              <a href="/doctors" className="btn btn-secondary">View Our Doctors</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialities;