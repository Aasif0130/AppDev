import React from 'react';
import { Link } from 'react-router-dom';
import './ShopPage.css';
import { FiHome } from 'react-icons/fi';

const ShopPage = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-title">Shop</h2>
      <Link to="/personalized-gifts" className="shop-box">
        <div className="shop-gift-icon personalized"></div>
        <h3 className="shop-box-title">Personalized Gifts</h3>
        <p className="shop-box-description">Find the perfect personalized gift for your loved ones.</p>
      </Link>
      <Link to="/readymade-gifts" className="shop-box">
        <div className="shop-gift-icon readymade"></div>
        <h3 className="shop-box-title">Readymade Gifts</h3>
        <p className="shop-box-description">Explore our collection of pre-made gifts for any occasion.</p>
      </Link>
      <div className="homepage-link">
        <Link to="/home" className="nav-link">
          <FiHome className="nav-icon" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ShopPage;
