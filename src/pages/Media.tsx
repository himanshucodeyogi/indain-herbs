import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Media.css';

const Media: React.FC = () => {
  const articles = [
    {
      title: 'The Future of Phytogenics in Poultry Production',
      category: 'Research',
      date: 'March 15, 2026',
      excerpt: 'Exploring how herbal alternatives are reducing the reliance on antibiotics in poultry farming.',
      author: 'Dr. S. Kumar',
      img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Indian Herbs at the International Livestock Expo 2026',
      category: 'Events',
      date: 'February 28, 2026',
      excerpt: 'Showcasing our latest innovations in ruminant health to a global audience in Dubai.',
      author: 'Marketing Team',
      img: 'https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Managing Heat Stress in Dairy Cattle: A Natural Approach',
      category: 'Technical',
      date: 'February 10, 2026',
      excerpt: 'Scientific strategies to maintain milk production during extreme summer months using herbal solutions.',
      author: 'Dr. A. Sharma',
      img: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'New Patent Filed for Sustainable Aqua Feed Additive',
      category: 'News',
      date: 'January 22, 2026',
      excerpt: 'Our R&D team achieves a breakthrough in improving the FCR of farmed shrimp naturally.',
      author: 'R&D Division',
      img: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="media-page">
      {/* Media Hero */}
      <section className="media-hero">
        <div className="container">
          <h1>Knowledge Hub & Media</h1>
          <p>Stay updated with our latest research, news, and industry insights.</p>
        </div>
      </section>

      {/* Media Feed */}
      <section className="section-padding media-content">
        <div className="container">
          <div className="filter-tags text-center mb-4">
            <span className="filter-tag active">All Posts</span>
            <span className="filter-tag">Research Papers</span>
            <span className="filter-tag">Technical Articles</span>
            <span className="filter-tag">News & Events</span>
          </div>

          <div className="articles-grid">
            {articles.map((article, idx) => (
              <div key={idx} className="article-card">
                <div className="article-image">
                  <img src={article.img} alt={article.title} />
                  <span className="article-cat-badge">{article.category}</span>
                </div>
                <div className="article-info">
                  <div className="article-meta">
                    <span><Calendar size={14} /> {article.date}</span>
                    <span><User size={14} /> {article.author}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <button className="btn btn-outline small-btn">
                    Read Article <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="newsletter-cta text-center section-padding">
            <div className="newsletter-box">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get the latest technical insights delivered directly to your inbox.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your Professional Email" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
