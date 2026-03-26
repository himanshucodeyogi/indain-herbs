import React from 'react';
import { ArrowRight, Beaker, ShieldCheck, Leaf, Globe2 } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-tagline">Since 1951 | Global Leader in Phytogenics</span>
            <h1>Nature's Way to Animal Health</h1>
            <p>
              Research-backed phytogenic solutions rooted in Ayurvedic wisdom and 
              strengthened by modern science for sustainable animal productivity.
            </p>
            <div className="hero-btns">
              <a href="/products" className="btn btn-primary">Explore Products <ArrowRight size={18} /></a>
              <a href="/research" className="btn btn-outline">Our Research</a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">70+</span>
                <span className="stat-label">Years of Legacy</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries Present</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Research Papers</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000" 
              alt="Scientific Herbal Research" 
              className="floating-img"
            />
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="section-padding trust-pillars">
        <div className="container grid-4">
          <div className="pillar-card">
            <Beaker size={40} className="pillar-icon" />
            <h3>Research Driven</h3>
            <p>Validated by modern scientific methods and clinical trials.</p>
          </div>
          <div className="pillar-card">
            <Leaf size={40} className="pillar-icon" />
            <h3>Natural & Safe</h3>
            <p>100% natural ingredients with no harmful residues.</p>
          </div>
          <div className="pillar-card">
            <ShieldCheck size={40} className="pillar-icon" />
            <h3>Certified Quality</h3>
            <p>FAMI-QS, ISO, GMP and HACCP certified manufacturing.</p>
          </div>
          <div className="pillar-card">
            <Globe2 size={40} className="pillar-icon" />
            <h3>Global Presence</h3>
            <p>Trusted by farmers and veterinarians across 5 continents.</p>
          </div>
        </div>
      </section>

      {/* Browse by Species */}
      <section className="section-padding species-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Browse by Species</h2>
            <p>Discover tailored health solutions for your livestock and pets.</p>
          </div>
          
          <div className="species-grid">
            {[
              { name: 'Poultry', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=400' },
              { name: 'Ruminant', img: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=400' },
              { name: 'Aqua', img: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=400' },
              { name: 'Pet', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400' },
              { name: 'Equine', img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=400' },
              { name: 'Swine', img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400' }
            ].map((species) => (
              <div key={species.name} className="species-card">
                <div className="species-img-box">
                  <img src={species.img} alt={species.name} />
                </div>
                <h3>{species.name}</h3>
                <a href={`/products/${species.name.toLowerCase()}`} className="text-link">View Solutions <ArrowRight size={16} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
