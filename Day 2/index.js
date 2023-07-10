import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import TitlePage from './TitlePage'; // Update the file path here
import LoginPage from './LoginPage'; // Update the file path here
import RegistrationPage from './RegistrationPage'; // Update the file path here

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<TitlePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
  </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);
