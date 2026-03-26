import React from 'react';
import { Beaker, FlaskConical, Microscope, BookOpen, Award, Layers } from 'lucide-react';
import './Research.css';

const Research: React.FC = () => {
  return (
    <div className="research-page">
      {/* Research Hero */}
      <section className="research-hero">
        <div className="container">
          <span className="hero-tagline">Evidence-Led Innovation</span>
          <h1>Bridging Ayurveda with Modern Science</h1>
          <p>
            Our R&D center is recognized by the Department of Scientific & Industrial Research (DSIR), 
            Ministry of Science & Technology, Government of India.
          </p>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="section-padding research-divisions">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Scientific Divisions</h2>
            <p>Specialized laboratories dedicated to every stage of phytogenic development.</p>
          </div>
          
          <div className="grid-3">
            <div className="division-card">
              <FlaskConical size={40} />
              <h3>Phytochemistry</h3>
              <p>Isolation and identification of active markers from botanical sources using advanced chromatography.</p>
            </div>
            <div className="division-card">
              <Microscope size={40} />
              <h3>Microbiology</h3>
              <p>Studying the impact of herbal solutions on gut microbiota and pathogen control.</p>
            </div>
            <div className="division-card">
              <Beaker size={40} />
              <h3>Formulation Development</h3>
              <p>Creating stable, bioavailable, and user-friendly delivery systems for diverse species.</p>
            </div>
            <div className="division-card">
              <Layers size={40} />
              <h3>Pharmacology</h3>
              <p>Determining the mode of action and safety profiles through rigorous clinical trials.</p>
            </div>
            <div className="division-card">
              <Award size={40} />
              <h3>Quality Control</h3>
              <p>Ensuring batch-to-batch consistency through standardized finger-printing (HPTLC/HPLC).</p>
            </div>
            <div className="division-card">
              <BookOpen size={40} />
              <h3>Documentation</h3>
              <p>Compiling technical dossiers and publishing findings in international journals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section-padding bg-soft-grey infra-section">
        <div className="container grid-2">
          <div className="infra-content">
            <h2>State-of-the-Art Infrastructure</h2>
            <p>
              Our labs are equipped with the latest instrumentation to ensure the 
              highest standards of research and quality.
            </p>
            <ul className="infra-list">
              <li><strong>HPLC & HPTLC:</strong> For precise quantification of bio-active markers.</li>
              <li><strong>GC-MS-QQQ:</strong> Advanced analysis for complex botanical mixtures.</li>
              <li><strong>AAS:</strong> Atomic Absorption Spectroscopy for mineral analysis.</li>
              <li><strong>ELISA:</strong> For immunological and toxin studies.</li>
            </ul>
          </div>
          <div className="infra-image">
            <img 
              src="https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?auto=format&fit=crop&q=80&w=800" 
              alt="Modern Analytical Lab" 
            />
          </div>
        </div>
      </section>

      {/* Publications / Stats */}
      <section className="section-padding publications-section">
        <div className="container">
          <div className="grid-3 stats-row">
            <div className="stat-box">
              <span className="stat-num">200+</span>
              <span className="stat-text">Research Papers Published</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">22+</span>
              <span className="stat-text">Global Patents Filed</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">500+</span>
              <span className="stat-text">Clinical Trials Conducted</span>
            </div>
          </div>
          
          <div className="publications-cta text-center">
            <h3>Interested in our scientific data?</h3>
            <p>We provide detailed technical dossiers and field trial reports to our professional partners.</p>
            <a href="/contact" className="btn btn-primary mt-2">Request Technical Data</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
