import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    interest: 'product',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your inquiry has been sent.');
    setFormData({ name: '', email: '', company: '', country: '', interest: 'product', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Our Experts</h1>
          <p>Whether you're a farmer, veterinarian, or prospective partner, we're here to help.</p>
        </div>
      </section>

      <section className="section-padding contact-content">
        <div className="container grid-2">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-subtitle">
              Reach out to our global headquarters or find a local representative.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <MapPin className="info-icon" />
                <div>
                  <h4>Global Headquarters</h4>
                  <p>Indian Herbs Specialities Pvt. Ltd.<br />Saharanpur, Uttar Pradesh, India - 247001</p>
                </div>
              </div>
              
              <div className="info-card">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+91-121-1234567<br />Mon-Sat: 9 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="info-card">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>info@indianherbs.org<br />export@indianherbs.org</p>
                </div>
              </div>
            </div>

            <div className="social-cta">
              <h3>Follow Our Journey</h3>
              <div className="social-btns">
                {/* Social icons would go here */}
                <span>LinkedIn</span>
                <span>Facebook</span>
                <span>Twitter</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="contact-form-container">
            <h3>Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" id="name" name="name" required 
                  value={formData.name} onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>

              <div className="grid-2-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" id="email" name="email" required 
                    value={formData.email} onChange={handleChange}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input 
                    type="text" id="company" name="company" 
                    value={formData.company} onChange={handleChange}
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid-2-form">
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input 
                    type="text" id="country" name="country" required 
                    value={formData.country} onChange={handleChange}
                    placeholder="Your Country"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="interest">Inquiry Type</label>
                  <select name="interest" id="interest" value={formData.interest} onChange={handleChange}>
                    <option value="product">Product Inquiry</option>
                    <option value="export">Global Partnership/Export</option>
                    <option value="technical">Technical Support</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" name="message" rows={5} required
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
