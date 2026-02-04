import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filter';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import products from './data/product';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    category: 'All',
    sortBy: 'default',
    search: ''
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    if (filters.category !== 'All' && product.category !== filters.category) {
      return false;
    }
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(filters.sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="app">
      <Header totalProducts={products.length} />
      
      <main className="main">
        <div className="container">
          <Filters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            totalProducts={sortedProducts.length}
            categories={categories}
          />
          
          {sortedProducts.length === 0 ? (
            <div className="no-products">
              <div className="emoji">🔍</div>
              <h3>No products found</h3>
              <p>Try changing your filters</p>
            </div>
          ) : (
            <div className="product-grid">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} 
                product={product}
                 onClick={() => setSelectedProduct(product)} 
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer 
        showingProducts={sortedProducts.length} 
        totalProducts={products.length} 
      />

      {selectedProduct&& (
        <ProductModal
          product = {selectedProduct}
          onClose = {() => setSelectedProduct(null)}
          onClick = {() => setSelectedProduct(products)}
        />
      )}
    </div>
  );
}

export default App;