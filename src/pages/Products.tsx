import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Search, Filter, ArrowRight } from 'lucide-react';
import './Products.css';

const Products: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [filter, setFilter] = useState(category || 'all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (category) {
      setFilter(category);
    }
  }, [category]);

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.species.includes(filter);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Products Hero */}
      <section className="products-hero">
        <div className="container">
          <h1>Scientific Solutions for Animal Health</h1>
          <p>Discover our range of research-backed phytogenic products for diverse species.</p>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="section-padding discovery-section">
        <div className="container">
          <div className="filter-bar">
            <div className="search-box">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search products or categories..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <Filter size={20} />
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Species</option>
                <option value="poultry">Poultry</option>
                <option value="ruminant">Ruminant/Cattle</option>
                <option value="aqua">Aqua</option>
                <option value="pet">Pet</option>
                <option value="swine">Swine</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="species-tags">
                      {product.species.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-cat">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="product-tagline">{product.tagline}</p>
                    <div className="product-benefits">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="benefit-dot">{benefit}</span>
                      ))}
                    </div>
                    <a href={`/product/${product.id}`} className="btn btn-outline product-btn">
                      View Details <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results text-center">
              <h3>No products found matching your criteria.</h3>
              <p>Try adjusting your search or filters.</p>
              <button className="btn btn-primary" onClick={() => {setFilter('all'); setSearchTerm('');}}>Clear All Filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
