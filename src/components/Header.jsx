import React from 'react';
import '../style/Header.css';

const Header = ({ totalProducts }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>🎯 Product Catalog</h1>
        <p className="subtitle">Browse our amazing collection of {totalProducts} products</p>
      </div>
    </header>
  );
};

export default Header;