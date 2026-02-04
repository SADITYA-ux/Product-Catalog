import React from 'react';
import '../style/Footer.css';

const Footer = ({ showingProducts, totalProducts }) => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className='hiu'><strong>Made by : Saditya Adhikari</strong></h1>
        <p>Built with React & CSS • Practice Project</p>
        <div className="stats">
          <span>📦 Total: {totalProducts} Products</span>
          <span>✨ Showing: {showingProducts} Products</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;