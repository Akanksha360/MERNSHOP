import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Utilities/Icons';
import { AuthProvider } from './Context/AuthProvider';
import Navbar from './Components/Navbar';
import LoginPage from './Pages/Login';
import './App.css'
import ProductListingPage from './Pages/ProductListing';
import ContactUs from './Pages/ContactUs';
import HomePage from './Pages/Home';
import AboutUs from './Pages/AboutUs';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs/>} />


          </Routes>
        </div>
       
      </Router>
    </AuthProvider>
  );
};

export default App;
