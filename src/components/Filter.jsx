import React from 'react';
import '../style/Filter.css';

const Filters = ({ filters = {}, onFilterChange, totalProducts = 0, categories = [] }) => {
  // Default values to prevent undefined errors
  const safeFilters = {
    search: '',
    category: 'All',
    sortBy: 'default',
    ...filters
  };

  const safeCategories = categories.length > 0 ? categories : ['All'];
  
  const handleSearchChange = (e) => {
    onFilterChange({ ...safeFilters, search: e.target.value });
  };

  const handleCategoryChange = (category) => {
    onFilterChange({ ...safeFilters, category });
  };

  const handleSortChange = (e) => {
    onFilterChange({ ...safeFilters, sortBy: e.target.value });
  };

  const handleReset = () => {
    onFilterChange({
      search: '',
      category: 'All',
      sortBy: 'default'
    });
  };

  return (
    <div className="filters">
      <div className="filter-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={safeFilters.search}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <label>Category:</label>
            <div className="category-buttons">
              {safeCategories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${safeFilters.category === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <label>Sort by:</label>
            <select 
              value={safeFilters.sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="filter-info">
        <span className="product-count">
          Showing {totalProducts} products
        </span>
        <button 
          className="reset-btn"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

// Add default props for safety
Filters.defaultProps = {
  filters: {
    search: '',
    category: 'All',
    sortBy: 'default'
  },
  onFilterChange: () => {},
  totalProducts: 0,
  categories: ['All']
};

export default Filters;