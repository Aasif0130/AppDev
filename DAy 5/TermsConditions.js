import React from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

const TermsConditionsPage = () => {
  return (
    <div className="terms-container">
      <h2 className="terms-title">Terms and Conditions</h2>
      <p className="terms-content">
        Please read these terms and conditions carefully before using our website. By accessing or using our website, you agree to comply with these terms and conditions.
      </p>
      <p className="terms-content">
        <strong>Intellectual Property:</strong> The content on this website, including text, images, logos, and trademarks, is the intellectual property of Gift Portal and protected by applicable intellectual property laws. You may not use, modify, or distribute any content without our prior written consent.
      </p>
      <p className="terms-content">
        <strong>Disclaimer:</strong> We strive to provide accurate and up-to-date information on our website. However, we do not warrant the completeness, reliability, or accuracy of the information. Your use of the website is at your own risk.
      </p>
      <p className="terms-content">
        <strong>Third-Party Links:</strong> Our website may contain links to third-party websites for your convenience. We do not endorse or assume any responsibility for the content, products, or services provided by these third-party websites.
      </p>
      <p className="terms-content">
        <strong>Limitation of Liability:</strong> In no event shall Gift Portal be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our website.
      </p>
      <p className="terms-content">
        <strong>Governing Law:</strong> These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction.
      </p>
      <p className="terms-content">
        If you have any questions or concerns about our terms and conditions, please contact us at terms@giftportal.com.
      </p>
      <Link to="/home" className="back-link">Back to Homepage</Link>
    </div>
  );
};

export default TermsConditionsPage;
