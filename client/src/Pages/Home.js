import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-purple-50">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mb-6">
          Discover the latest tech gadgets, electronics, and accessories to
          elevate your lifestyle. Shop now for quality you can trust.
        </p>
        <Link to="/products">
          <button className="bg-purple-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-purple-700 transition duration-200">
            Browse Products
          </button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
                <svg
                  className="w-8 h-8 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V8a2 2 0 00-2-2H6a2 2 0 00-2 2v5m16 0a6 6 0 11-12 0m12 0H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders over $50, delivered to your
                door.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
                <svg
                  className="w-8 h-8 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Your payment information is encrypted and safe with us.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
                <svg
                  className="w-8 h-8 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21V9m0 0H3m16 4h1a2 2 0 002-2v-2a2 2 0 00-2-2h-1m-4 14H5a2 2 0 01-2-2v-5a2 2 0 012-2h10a2 2 0 012 2v5a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                All our products are thoroughly tested and certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-6">
            Start shopping today and enjoy exclusive deals and discounts on our
            latest arrivals.
          </p>
          <Link to="/products">
            <button className="bg-white text-purple-600 py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
