import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <FontAwesomeIcon icon="box" className="mr-2" />
          MyShop
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="home" className="mr-2" />
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="box" className="mr-2" />
            Products
          </Link>
          <Link to="/about" className="hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="info-circle" className="mr-2" />
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="phone" className="mr-2" />
            Contact
          </Link>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 flex items-center">
            <FontAwesomeIcon icon="user" className="mr-2" />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 px-4 py-2 space-y-2">
          <Link to="/" className="block hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="home" className="mr-2" />
            Home
          </Link>
          <Link to="/products" className="block hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="box" className="mr-2" />
            Products
          </Link>
          <Link to="/about" className="block hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="info-circle" className="mr-2" />
            About
          </Link>
          <Link to="/contact" className="block hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon="phone" className="mr-2" />
            Contact
          </Link>
          <Link to="/login" className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 flex items-center">
            <FontAwesomeIcon icon="user" className="mr-2" />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
