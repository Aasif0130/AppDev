import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    setError('');

    // Form validation
    if (!email || !password ) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Make the login request
      const response = await axios.post('/api/login', { email, password});
      console.log(response.data);
      // Handle successful login or redirect to another page
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
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
         
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
