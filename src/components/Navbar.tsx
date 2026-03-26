import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/favicon.svg" alt="Indian Herbs Logo" className="logo-img" />
            <span className="logo-text">INDIAN <span className="logo-sub">HERBS</span></span>
          </Link>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item">Home</Link>
          <div className="nav-item dropdown">
            <span>About</span>
            <div className="dropdown-menu">
              <Link to="/about">Our Story</Link>
              <Link to="/leadership">Leadership</Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <span>Products</span>
            <div className="dropdown-menu">
              <Link to="/products/poultry">Poultry</Link>
              <Link to="/products/ruminant">Ruminant</Link>
              <Link to="/products/aqua">Aqua</Link>
              <Link to="/products/pet">Pet</Link>
              <Link to="/products/equine">Equine</Link>
            </div>
          </div>
          <Link to="/research" className="nav-item">Research</Link>
          <Link to="/quality" className="nav-item">Quality</Link>
          <Link to="/global" className="nav-item">Global</Link>
          <Link to="/media" className="nav-item">Media</Link>
          <Link to="/careers" className="nav-item">Careers</Link>
          <Link to="/contact" className="btn btn-primary nav-btn">Contact Us</Link>
        </div>

        <div className="navbar-actions">
          <button aria-label="Search"><Search size={20} /></button>
          <button aria-label="Language"><Globe size={20} /></button>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
