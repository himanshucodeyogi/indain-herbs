import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight, X } from 'lucide-react';
import './Products.css';

const ALL_CATEGORIES = Array.from(new Set(products.map(p => p.category))).sort();
const ALL_SPECIES = [
  { value: 'ruminant', label: 'Ruminant / Cattle' },
  { value: 'human', label: 'Human' },
  { value: 'pet', label: 'Pet / Companion' },
];

const Products: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>(
    category ? [category] : []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'title-ascending' | 'title-descending'>('title-ascending');

  useEffect(() => {
    if (category) setSelectedSpecies([category]);
  }, [category]);

  // lock body scroll when filter panel is open
  useEffect(() => {
    document.body.style.overflow = isFilterOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isFilterOpen]);

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesSpecies =
        selectedSpecies.length === 0 ||
        product.species.some(s => selectedSpecies.includes(s));
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      return matchesSpecies && matchesCategory;
    });

    result = [...result].sort((a, b) =>
      sortOrder === 'title-ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return result;
  }, [selectedSpecies, selectedCategories, sortOrder]);

  const activeFilterCount = selectedSpecies.length + selectedCategories.length;

  function toggleSpecies(value: string) {
    setSelectedSpecies(prev =>
      prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]
    );
  }

  function toggleCategory(value: string) {
    setSelectedCategories(prev =>
      prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
    );
  }

  function clearAll() {
    setSelectedSpecies([]);
    setSelectedCategories([]);
  }

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <h1>Scientific Solutions for Animal Health</h1>
          <p>Discover our range of research-backed phytogenic products for diverse species.</p>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding discovery-section">
        <div className="container">

          {/* Toolbar */}
          <div className="collection-toolbar">
            <div className="collection-toolbar-left">
              <button
                className="filter-toggle-btn"
                type="button"
                aria-label="Open filters"
                onClick={() => setIsFilterOpen(true)}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 6h18M7 12h10M11 18h2" />
                </svg>
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="filter-count">{activeFilterCount}</span>
                )}
              </button>
              <div className="product-count">
                <span>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="collection-toolbar-right">
              <div className="sort-dropdown">
                <label htmlFor="sort-select" className="visually-hidden">Sort products</label>
                <select
                  id="sort-select"
                  className="sort-select"
                  value={sortOrder}
                  onChange={e => setSortOrder(e.target.value as typeof sortOrder)}
                >
                  <option value="title-ascending">A–Z</option>
                  <option value="title-descending">Z–A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Offcanvas */}
          {isFilterOpen && (
            <div className="filter-overlay" onClick={() => setIsFilterOpen(false)} />
          )}
          <aside className={`collection-filters${isFilterOpen ? ' is-open' : ''}`}>
            <div className="filters-header">
              <h2>Filters</h2>
              <button
                className="filters-close"
                aria-label="Close filters"
                onClick={() => setIsFilterOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="filters-content">
              {/* Species Filter */}
              <div className="filter-group">
                <h3 className="filter-title">Species</h3>
                <ul className="filter-list">
                  {ALL_SPECIES.map(s => (
                    <li key={s.value} className="filter-item">
                      <label className="filter-label">
                        <input
                          type="checkbox"
                          checked={selectedSpecies.includes(s.value)}
                          onChange={() => toggleSpecies(s.value)}
                        />
                        <span>{s.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Filter */}
              <div className="filter-group">
                <h3 className="filter-title">Category</h3>
                <ul className="filter-list">
                  {ALL_CATEGORIES.map(cat => (
                    <li key={cat} className="filter-item">
                      <label className="filter-label">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                        />
                        <span>{cat}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {activeFilterCount > 0 && (
              <div className="filters-footer">
                <button className="clear-filters-btn" onClick={clearAll}>
                  Clear all filters ({activeFilterCount})
                </button>
              </div>
            )}
          </aside>

          {/* Grid */}
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
              <p>Try adjusting your filters.</p>
              <button className="btn btn-primary" onClick={clearAll}>Clear All Filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
