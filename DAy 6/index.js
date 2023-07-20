import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import TitlePage from './TitlePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import ContactPage from './ContactPage';
import FaqPage from './FaqPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsConditionsPage from './TermsConditions';
import ShopPage from './ShopPage';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
