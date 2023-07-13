import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
      <h2 className="privacy-title">Privacy Policy</h2>
      <p className="privacy-content">
        At Gift Portal, we value the privacy of our users and are committed to protecting their personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide while using our website.
      </p>
      <p className="privacy-content">
        <strong>Information Collection:</strong> We collect personal information such as name, email address, and phone number when you register an account or place an order on our website. We may also collect non-personal information such as IP address, browser type, and device information for analytical purposes.
      </p>
      <p className="privacy-content">
        <strong>Information Usage:</strong> The information we collect is used to process orders, provide customer support, improve our services, and personalize user experience. We may also use your email address to send promotional materials and updates, but you can opt out of receiving such communications.
      </p>
      <p className="privacy-content">
        <strong>Information Protection:</strong> We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no data transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.
      </p>
      <p className="privacy-content">
        <strong>Third-Party Disclosure:</strong> We may share your information with trusted third parties, such as payment processors and shipping partners, to fulfill orders and provide necessary services. We do not sell or rent your personal information to third parties for marketing purposes.
      </p>
      <p className="privacy-content">
        <strong>Cookies:</strong> Our website uses cookies to enhance user experience and collect anonymous data for analytics. You can disable cookies in your browser settings, but please note that some features of our website may not function properly without cookies.
      </p>
      <p className="privacy-content">
        <strong>Changes to the Privacy Policy:</strong> We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review the Privacy Policy periodically.
      </p>
      <p className="privacy-content">
        If you have any questions or concerns about our Privacy Policy, please contact us at privacy@giftportal.com.
      </p>
      <Link to="/home" className="back-link">Back to Homepage</Link>
    </div>
  );
};

export default PrivacyPolicyPage;
