import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TitlePage from './TitlePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import ContactPage from './ContactPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TitlePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
