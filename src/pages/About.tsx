import React from 'react';
import { History, Target, Eye, ShieldCheck, Users } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="hero-tagline">Our Story</span>
          <h1>Since 1951, Pioneering Herbal Animal Healthcare</h1>
          <p>
            Indian Herbs Specialities is the global leader in research-backed phytogenic 
            solutions, bridging the gap between ancient Ayurvedic wisdom and modern veterinary science.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="section-padding legacy-section">
        <div className="container grid-2">
          <div className="legacy-image">
            <img 
              src="https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=800" 
              alt="7+ Decades of Innovation" 
            />
          </div>
          <div className="legacy-content">
            <h2>The Pioneer of Phytogenics</h2>
            <p>
              Founded in 1951, Indian Herbs was the first company to introduce 
              scientific herbal products to the animal health industry. Our journey 
              began with a vision to provide natural, safe, and effective alternatives 
              to synthetic chemicals in livestock production.
            </p>
            <p>
              Today, with over 70 years of legacy, we continue to lead the industry 
              through rigorous research, state-of-the-art manufacturing, and a 
              deep commitment to sustainable animal health globally.
            </p>
            <div className="legacy-stats">
              <div className="stat">
                <h4>1951</h4>
                <span>Year Founded</span>
              </div>
              <div className="stat">
                <h4>200+</h4>
                <span>Scientific Papers</span>
              </div>
              <div className="stat">
                <h4>22+</h4>
                <span>Global Patents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-beige mission-vision">
        <div className="container grid-2">
          <div className="mission-card">
            <Target size={40} className="card-icon" />
            <h3>Our Mission</h3>
            <p>
              To improve animal health and productivity by providing innovative, 
              research-led phytogenic solutions that are safe for animals, 
              environmentally sustainable, and economically viable for producers.
            </p>
          </div>
          <div className="mission-card">
            <Eye size={40} className="card-icon" />
            <h3>Our Vision</h3>
            <p>
              To be the most trusted global partner in phytogenic animal healthcare, 
              setting the standard for scientific excellence and natural innovation 
              in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p>The principles that guide our innovation and partnerships.</p>
          </div>
          <div className="grid-3">
            <div className="value-item">
              <History size={30} />
              <h4>Scientific Integrity</h4>
              <p>Every product is backed by extensive research, clinical trials, and peer-reviewed publications.</p>
            </div>
            <div className="value-item">
              <ShieldCheck size={30} />
              <h4>Quality Uncompromised</h4>
              <p>Global manufacturing standards ensuring consistency, safety, and traceability in every batch.</p>
            </div>
            <div className="value-item">
              <Users size={30} />
              <h4>Global Partnership</h4>
              <p>Collaborating with vets, farmers, and distributors in 50+ countries to solve local challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
