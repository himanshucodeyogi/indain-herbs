import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronLeft, CheckCircle, FileText, MessageSquare } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn-primary mt-2">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <Link to="/products" className="back-link">
          <ChevronLeft size={20} /> Back to Catalog
        </Link>

        <section className="product-header-section grid-2">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="product-main-info">
            <span className="product-cat-tag">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="p-tagline">{product.tagline}</p>
            
            <div className="p-species">
              <strong>Species:</strong>
              <div className="species-tags">
                {product.species.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>

            <p className="p-description">{product.description}</p>

            <div className="p-actions">
              <Link to="/contact" className="btn btn-primary">
                Inquire Now <MessageSquare size={18} />
              </Link>
              <button className="btn btn-outline">
                Download TDS <FileText size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="section-padding product-specs">
          <div className="grid-2">
            <div className="specs-card">
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx}><CheckCircle size={20} color="var(--primary-leaf)" /> {benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="specs-card">
              <h3>Usage & Dosage</h3>
              <p>For detailed administration instructions, please refer to the product label or consult with our technical team.</p>
              <div className="p-meta">
                <div className="meta-item">
                  <strong>Form:</strong> <span>Powder / Liquid</span>
                </div>
                <div className="meta-item">
                  <strong>Packaging:</strong> <span>1kg, 5kg, 25kg</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research section placeholder */}
        <section className="section-padding research-highlight bg-soft-grey">
          <div className="text-center">
            <h2>Research & Evidence</h2>
            <p>This product has been validated through multiple field trials and scientific studies.</p>
            <Link to="/research" className="btn btn-outline mt-2">View Research Data</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
