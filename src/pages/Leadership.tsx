import React from 'react';
import { Briefcase, Mail } from 'lucide-react';
import './Leadership.css';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: 'Executive Director',
      role: 'Board of Directors',
      bio: 'Leading the vision of Indian Herbs since decades, bridging traditional Ayurvedic wisdom with modern global standards.',
      specialty: 'Strategic Vision & Heritage',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Director - R&D',
      role: 'Scientific Division',
      bio: 'Overseeing the DSIR recognized research facility and pioneering new phytogenic formulations for global markets.',
      specialty: 'Phytochemistry & Innovation',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Head of International Business',
      role: 'Global Export Division',
      bio: 'Expanding the footprint of Indian Herbs across 50+ countries and building sustainable global partnerships.',
      specialty: 'Global Strategy & Compliance',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="leadership-page">
      {/* Leadership Hero */}
      <section className="leadership-hero">
        <div className="container">
          <span className="hero-tagline">Our People</span>
          <h1>Leadership & Expertise</h1>
          <p>
            Guided by a legacy of 70+ years and a team of world-class scientists, 
            we are committed to excellence in animal healthcare.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding team-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>The Board & Executive Team</h2>
            <p>The visionaries behind the global success of Indian Herbs.</p>
          </div>

          <div className="grid-3 team-grid">
            {leaders.map((leader, idx) => (
              <div key={idx} className="leader-card">
                <div className="leader-image">
                  <img src={leader.img} alt={leader.name} />
                </div>
                <div className="leader-info">
                  <span className="leader-role">{leader.role}</span>
                  <h3>{leader.name}</h3>
                  <p className="leader-specialty"><strong>Focus:</strong> {leader.specialty}</p>
                  <p className="leader-bio">{leader.bio}</p>
                  <div className="leader-social">
                    <Briefcase size={20} />
                    <Mail size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientists Section */}
      <section className="section-padding bg-beige scientists-section">
        <div className="container text-center">
          <h2>Scientific Excellence</h2>
          <p>
            Our team includes over 40+ scientists, veterinarians, and researchers 
            dedicated to the pursuit of nature-inspired science.
          </p>
          <div className="stats-grid grid-4 mt-4">
            <div className="stat">
              <h4>15+</h4>
              <span>PhDs</span>
            </div>
            <div className="stat">
              <h4>25+</h4>
              <span>Post Graduates</span>
            </div>
            <div className="stat">
              <h4>10+</h4>
              <span>Veterinarians</span>
            </div>
            <div className="stat">
              <h4>5+</h4>
              <span>Product Specialists</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
