import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiGift } from 'react-icons/fi';
import { IoCartOutline, IoPersonOutline, IoLogOutOutline } from 'react-icons/io5';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleLogout = () => {
    // Perform logout logic
    // For example, you can clear session storage, remove tokens, or update authentication state

    // Redirect to the title page
    navigate('/');
  };

  const toggleFooter = () => {
    setIsFooterVisible((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsFooterVisible(true);
    };

    const handleMouseLeave = () => {
      setIsFooterVisible(false);
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="logo-container">
          <FiGift className="logo" />
          <span className="nav-link">Gift Portal</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Shop" className="nav-link">
              <IoCartOutline className="nav-icon" />
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <IoPersonOutline className="nav-icon" />
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link logout-link" onClick={handleLogout}>
              <IoLogOutOutline className="nav-icon" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      <h2 className="homepage-title">Welcome to the Customized Gift Portal</h2>
      <p className="homepage-content">Find the perfect personalized gifts for your loved ones.</p>
      <p className="homepage-content">Explore our wide range of customizable gift options and make your loved ones feel special.</p>
      <p className="homepage-content">Start by browsing through our collection or use our gift customization tool to create unique presents.</p>
      <p className="homepage-content">Make every occasion memorable with a personalized touch.</p>
      <FiGift className="gift-icon" />

      {isFooterVisible && (
        <footer className="footer">
          <div className="footer-links">
            <Link to="/terms" className="footer-link">Terms and Conditions</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <p>&copy; 2023 Gift Portal. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default HomePage;
