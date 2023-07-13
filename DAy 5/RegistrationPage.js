import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();

    setError('');

    // Form validation
    if (!name || !email || !password || !confirmPassword || !phoneNumber || !location) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Show popup and reset form
    setShowPopup(true);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNumber('');
    setLocation('');
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="registration-form">
        <h2>Registration</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Registration Successful!</h3>
            <p>Please login to continue.</p>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
