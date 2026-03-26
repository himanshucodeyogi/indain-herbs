import React from 'react';
import { Globe, Ship, ShieldCheck, Handshake, BarChart, ArrowRight } from 'lucide-react';
import './Global.css';

const Global: React.FC = () => {
  return (
    <div className="global-page">
      {/* Global Hero */}
      <section className="global-hero">
        <div className="container">
          <span className="hero-tagline">Present in 50+ Countries</span>
          <h1>A Global Partner in Animal Health</h1>
          <p>
            Exporting excellence since decades. We provide high-quality phytogenic 
            solutions to importers and distributors across 5 continents.
          </p>
        </div>
      </section>

      {/* Global Presence Map Placeholder */}
      <section className="section-padding presence-section">
        <div className="container">
          <div className="map-image">
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
              alt="Our International Footprint" 
            />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-beige partner-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Partner With Us?</h2>
            <p>We provide comprehensive support to our international distributors.</p>
          </div>
          
          <div className="grid-3">
            <div className="partner-card">
              <ShieldCheck size={40} />
              <h3>Regulatory Support</h3>
              <p>Complete documentation and technical dossiers for product registration in your territory.</p>
            </div>
            <div className="partner-card">
              <Ship size={40} />
              <h3>Supply Chain</h3>
              <p>Reliable global logistics and export-ready packaging ensuring timely delivery.</p>
            </div>
            <div className="partner-card">
              <BarChart size={40} />
              <h3>Marketing Assets</h3>
              <p>Professional brochures, technical data sheets, and localized marketing support.</p>
            </div>
            <div className="partner-card">
              <Handshake size={40} />
              <h3>Technical Training</h3>
              <p>Direct access to our scientists and technical team for product training and support.</p>
            </div>
            <div className="partner-card">
              <Globe size={40} />
              <h3>Exclusive Territory</h3>
              <p>Strategic partnership models with exclusive distribution rights in selected regions.</p>
            </div>
            <div className="partner-card">
              <ShieldCheck size={40} />
              <h3>Global Quality</h3>
              <p>FAMI-QS and ISO certified products meeting international safety standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="section-padding export-cta">
        <div className="container text-center">
          <h2>Interested in Becoming a Distributor?</h2>
          <p>Join our growing network of international partners and lead the phytogenic revolution.</p>
          <a href="/contact" className="btn btn-primary mt-2">
            Send Export Inquiry <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Global;
