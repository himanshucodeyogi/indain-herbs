import React from 'react';
import { Award, FileText, CheckCircle } from 'lucide-react';
import './Quality.css';

const Quality: React.FC = () => {
  const certifications = [
    'FAMI-QS', 'ISO 9001:2015', 'ISO 14001:2015', 'ISO 22000:2018', 
    'ISO 45001:2018', 'GMP Certified', 'HACCP', 'EIC Approved', 
    'FSSAI', 'DSIR Recognized R&D'
  ];

  return (
    <div className="quality-page">
      {/* Quality Hero */}
      <section className="quality-hero">
        <div className="container">
          <span className="hero-tagline">Quality Uncompromised</span>
          <h1>International Standards & Certifications</h1>
          <p>
            Our manufacturing facilities and processes adhere to the world's most 
            stringent quality and safety protocols.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding philosophy-section">
        <div className="container grid-2">
          <div className="philosophy-image">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="The Seal of Trust" 
            />
          </div>
          <div className="philosophy-content">
            <h2>Our Quality Philosophy</h2>
            <p>
              Quality is not a department at Indian Herbs; it is our foundation. 
              From the sourcing of raw botanicals to the final packaging, every step 
              undergoes rigorous testing to ensure purity, potency, and safety.
            </p>
            <ul className="quality-bullets">
              <li><CheckCircle size={20} /> Standardization of active markers.</li>
              <li><CheckCircle size={20} /> Zero tolerance for contaminants and residues.</li>
              <li><CheckCircle size={20} /> Full traceability from farm to finished product.</li>
              <li><CheckCircle size={20} /> Batch-to-batch consistency ensured by HPTLC fingerprinting.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding bg-soft-grey certs-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Accreditations & Certifications</h2>
            <p>Validated by global authorities for excellence in manufacturing and research.</p>
          </div>

          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <Award size={40} className="cert-icon" />
                <h3>{cert}</h3>
                <span className="cert-status">Active & Verified</span>
              </div>
            ))}
          </div>

          <div className="downloads-cta text-center mt-4">
            <button className="btn btn-outline">
              Download Quality Handbook <FileText size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
