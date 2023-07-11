import React from 'react';
import { Link } from 'react-router-dom';
import './TitlePage.css'; // Import the CSS file

const TitlePage = () => {
  return (
    <div className="container1">
      <h2 className="title1">Customised Gift Portal</h2>
      <div className="links1">
        <div className="link-wrapper">
          <Link to="/login" className="link">Login</Link>
        </div>
        <div className="link-wrapper">
          <Link to="/register" className="link">Register</Link>
        </div>
      </div>
      <footer className="footer">
        <p className="quote">"The joy of gifting is in the thoughtfulness and personal touch."</p>
      </footer>
    </div>
  );
};

export default TitlePage;
