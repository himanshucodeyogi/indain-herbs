import React from 'react';
import { Briefcase, Users, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import './Careers.css';

const Careers: React.FC = () => {
  const openRoles = [
    { title: 'Marketing Manager', department: 'Sales & Marketing', location: 'Noida / Saharanpur', type: 'Full-time' },
    { title: 'Senior Manager – Sales', department: 'Domestic Sales', location: 'Pan India', type: 'Full-time' },
    { title: 'Research Scientist', department: 'R&D - Phytochemistry', location: 'Saharanpur', type: 'Full-time' },
    { title: 'Quality Control Analyst', department: 'Quality Assurance', location: 'Saharanpur', type: 'Full-time' },
  ];

  return (
    <div className="careers-page">
      {/* Careers Hero */}
      <section className="careers-hero">
        <div className="container">
          <span className="hero-tagline">Join the Phytogenic Revolution</span>
          <h1>Build Your Career with Indian Herbs</h1>
          <p>
            Work at the intersection of nature and science. We are looking for passionate 
            individuals to help us shape the future of sustainable animal healthcare.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding culture-section">
        <div className="container">
          <div className="grid-2">
            <div className="culture-content">
              <h2>Why Work With Us?</h2>
              <p>
                At Indian Herbs, we foster a culture of innovation, integrity, and growth. 
                As a pioneer in the industry, we provide a platform where your work 
                contributes to global food security and animal welfare.
              </p>
              <div className="perks-grid">
                <div className="perk">
                  <Users size={24} />
                  <div>
                    <h4>Collaborative Environment</h4>
                    <p>Work with world-class scientists and industry experts.</p>
                  </div>
                </div>
                <div className="perk">
                  <GraduationCap size={24} />
                  <div>
                    <h4>Continuous Learning</h4>
                    <p>Opportunities for professional development and research.</p>
                  </div>
                </div>
                <div className="perk">
                  <Briefcase size={24} />
                  <div>
                    <h4>Global Exposure</h4>
                    <p>Engage with international markets and diverse challenges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="culture-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team at Work" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-soft-grey roles-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Current Openings</h2>
            <p>Find the right role for your skills and experience.</p>
          </div>

          <div className="roles-list">
            {openRoles.map((role, idx) => (
              <div key={idx} className="role-card">
                <div className="role-main">
                  <h3>{role.title}</h3>
                  <div className="role-meta">
                    <span><Briefcase size={16} /> {role.department}</span>
                    <span><MapPin size={16} /> {role.location}</span>
                  </div>
                </div>
                <div className="role-action">
                  <span className="role-type">{role.type}</span>
                  <button className="btn btn-outline">Apply Now <ArrowRight size={16} /></button>
                </div>
              </div>
            ))}
          </div>

          <div className="general-apply text-center mt-4">
            <h3>Don't see a matching role?</h3>
            <p>Send your resume to <strong>hr@indianherbs.org</strong> for future opportunities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
