import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-content">Feel free to reach out to us for any inquiries or feedback.</p>
      <p className="contact-content">You can connect with us on social media or send us an email.</p>

      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <p className="contact-content">
        For general inquiries, please email us at{' '}
        <a className="contact-link" href="mailto:info@giftportal.com">
          info@giftportal.com
        </a>
        .
      </p>

      <Link to="/home" className="homepage-link">
        Go to Homepage
      </Link>
    </div>
  );
};

export default ContactPage;
