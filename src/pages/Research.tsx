import React, { useEffect, useRef } from 'react';
import { Beaker, FlaskConical, Microscope, BookOpen, Award, Layers } from 'lucide-react';
import './Research.css';

const stats = [
  {
    target: 50, suffix: '+', label: 'Countries',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <path fill="none" stroke="currentColor" d="M1,10.5 L19,10.5" />
        <path fill="none" stroke="currentColor" d="M2.35,15.5 L17.65,15.5" />
        <path fill="none" stroke="currentColor" d="M2.35,5.5 L17.523,5.5" />
        <path fill="none" stroke="currentColor" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 Z" />
        <circle fill="none" stroke="currentColor" cx="10" cy="10.5" r="9" />
      </svg>
    ),
  },
  {
    target: 11, suffix: '+', label: 'Species',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <rect width="5" height="5" fill="none" stroke="currentColor" x="3.5" y="3.5" />
        <rect width="5" height="5" fill="none" stroke="currentColor" x="11.5" y="3.5" />
        <rect width="5" height="5" fill="none" stroke="currentColor" x="11.5" y="11.5" />
        <rect width="5" height="5" fill="none" stroke="currentColor" x="3.5" y="11.5" />
      </svg>
    ),
  },
  {
    target: 200, suffix: '+', label: 'For Animals',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="13" cy="7" r="1" />
        <circle cx="7" cy="7" r="1" />
        <circle fill="none" stroke="currentColor" cx="10" cy="10" r="8.5" />
        <path fill="none" stroke="currentColor" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4" />
      </svg>
    ),
  },
  {
    target: 50, suffix: '+', label: 'For Humans',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <circle fill="none" stroke="currentColor" strokeWidth="1.1" cx="9.9" cy="6.4" r="4.4" />
        <path fill="none" stroke="currentColor" strokeWidth="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2" />
      </svg>
    ),
  },
  {
    target: 50, suffix: '+', label: 'Research Collaboration',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <circle fill="none" stroke="currentColor" strokeWidth="1.1" cx="7.7" cy="8.6" r="3.5" />
        <path fill="none" stroke="currentColor" strokeWidth="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3" />
        <path fill="none" stroke="currentColor" strokeWidth="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1" />
      </svg>
    ),
  },
  {
    target: 1250, suffix: '+', label: 'Research Papers',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <rect width="13" height="17" fill="none" stroke="currentColor" x="3.5" y="1.5" />
        <line fill="none" stroke="currentColor" x1="6" y1="12.5" x2="12" y2="12.5" />
        <line fill="none" stroke="currentColor" x1="6" y1="8.5" x2="14" y2="8.5" />
        <line fill="none" stroke="currentColor" x1="6" y1="6.5" x2="14" y2="6.5" />
        <line fill="none" stroke="currentColor" x1="6" y1="10.5" x2="14" y2="10.5" />
      </svg>
    ),
  },
  {
    target: 250, suffix: '+', label: 'Master & PHD Thesis',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <rect width="10" height="1" x="5" y="2" />
        <rect width="14" height="1" x="3" y="4" />
        <rect width="17" height="11" fill="none" stroke="currentColor" x="1.5" y="6.5" />
      </svg>
    ),
  },
  {
    target: 50, suffix: '+', label: 'Research Patent',
    icon: (
      <svg width="40" height="40" viewBox="0 0 20 20" aria-hidden="true">
        <rect width="12" height="16" fill="none" stroke="currentColor" x="3.5" y="2.5" />
        <polyline fill="none" stroke="currentColor" points="5 0.5 17.5 0.5 17.5 17" />
      </svg>
    ),
  },
];

const ProudSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.proud-stat-number');
    if (!els) return;

    const duration = 1200;

    function easeOutQuad(t: number) {
      return t * (2 - t);
    }

    function startCount(el: HTMLElement, target: number, suffix: string) {
      const startTime = performance.now();
      function step(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(target * easeOutQuad(progress));
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          els.forEach((el) => {
            const target = parseInt(el.dataset.target ?? '0', 10);
            const suffix = el.dataset.suffix ?? '';
            startCount(el, target, suffix);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="proud-section" ref={sectionRef}>
      <div className="proud-container">
        <div className="proud-header">
          <h2 className="proud-heading">Proud to Deliver Excellence</h2>
          <p className="proud-description">
            Our legacy of over 70 years, rooted in Ayurvedic wisdom and strengthened by modern science.
            Our commitment lies in creating safe, effective, and sustainable solutions for animal and human
            health. With stringent quality standards and constant innovation, we bring nature's care you can trust.
          </p>
        </div>

        <div className="proud-stats-grid">
          {stats.map((stat, idx) => (
            <div className="proud-stat-item" key={idx}>
              <div className="proud-stat-icon">{stat.icon}</div>
              <div className="proud-stat-number" data-target={stat.target} data-suffix={stat.suffix}>
                {stat.target}{stat.suffix}
              </div>
              <div className="proud-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

      {/* Proud to Deliver Excellence */}
      <ProudSection />

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
