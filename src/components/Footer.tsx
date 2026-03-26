import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Share2, Send, Briefcase, 
  Globe, ChevronUp, ExternalLink, ShieldCheck 
} from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-text">
              <h3>Join Our Global Network</h3>
              <p>Subscribe for scientific updates, new product launches, and industry insights.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="Enter your business email" required />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container main-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/favicon.svg" alt="Indian Herbs Logo" className="logo-img" />
              <h2 className="logo-text">INDIAN <span className="logo-sub">HERBS</span></h2>
            </div>
            <p className="brand-desc">
              Pioneering herbal animal healthcare since 1951. We combine 
              ancient Ayurvedic wisdom with modern research to drive 
              sustainable livestock productivity globally.
            </p>
            <div className="footer-badges">
              <div className="badge-item" title="DSIR Recognized R&D">
                <ShieldCheck size={18} /> <span>DSIR R&D</span>
              </div>
              <div className="badge-item" title="FAMI-QS Certified">
                <ShieldCheck size={18} /> <span>FAMI-QS</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn"><Share2 size={18} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><Send size={18} /></a>
              <a href="#" className="social-link" aria-label="Facebook"><Briefcase size={18} /></a>
              <a href="#" className="social-link" aria-label="YouTube"><Globe size={18} /></a>
            </div>
          </div>

          <div className="footer-nav-group">
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
                <li><Link to="/quality">Quality Standards</Link></li>
                <li><Link to="/research">Research & Innovation</Link></li>
                <li><Link to="/careers">Work With Us</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Solutions</h3>
              <ul>
                <li><Link to="/products/poultry">Poultry Health</Link></li>
                <li><Link to="/products/ruminant">Ruminant Care</Link></li>
                <li><Link to="/products/aqua">Aqua Culture</Link></li>
                <li><Link to="/products/pet">Companion Animals</Link></li>
                <li><Link to="/products">All Products <ExternalLink size={12} /></Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Global Support</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-text">
                  <strong>Corporate HQ</strong>
                  <p>Saharanpur, UP, India - 247001</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-text">
                  <strong>Call Us</strong>
                  <p>+91-121-1234567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-text">
                  <strong>Email</strong>
                  <p>info@indianherbs.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; 2026 Indian Herbs Specialities Pvt. Ltd. | CIN: U12345UP1951PTC012345</p>
          </div>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showScroll ? 'visible' : ''}`} 
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
