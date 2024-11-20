import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../Utilities/data';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id == id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [pincode, setPincode] = useState('');
  const [deliveryMessage, setDeliveryMessage] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found.</p>
      </div>
    );
  }

  const handleCheckDelivery = () => {
    // Simulate delivery check
    if (pincode.length === 6) {
      setDeliveryMessage(`Delivery available to PIN code: ${pincode}`);
    } else {
      setDeliveryMessage('Invalid PIN code. Please enter a 6-digit PIN.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl space-y-6">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-64 object-cover rounded-md"
          />
          <div className="flex space-x-2">
            {product?.additionalImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover border rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
        <p className="text-gray-600 text-base">{product.description}</p>
        <div className="flex items-center space-x-4">
          <p className="text-2xl font-bold text-gray-800">
            ₹{product?.discountedPrice?.toLocaleString()}
          </p>
          <p className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
          <p className="text-green-600 font-semibold">
            ({Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)}% OFF)
          </p>
        </div>

        {/* Size Selector */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Select Size</h3>
          <div className="flex space-x-4">
            {product.sizes.map((size) => (
              <button
                key={size.label}
                className={`py-2 px-4 rounded-lg ${
                  selectedSize === size.label
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setSelectedSize(size.label)}
              >
                {size.label} - ₹{size.price}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart and Wishlist Buttons */}
        <div className="flex space-x-4">
          <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
            Add to Cart
          </button>
          <button className="flex-1 border border-gray-400 text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition">
            Wishlist
          </button>
        </div>

        {/* Delivery Options */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Delivery Options</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 border rounded-lg py-2 px-4"
              placeholder="Enter PIN code"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <button
              onClick={handleCheckDelivery}
              className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
            >
              Check
            </button>
          </div>
          {deliveryMessage && <p className="text-sm text-gray-600">{deliveryMessage}</p>}
        </div>

        {/* Additional Information */}
        <ul className="text-sm text-gray-600 space-y-1">
          <li>✔ 100% Original Products</li>
          <li>✔ Pay on delivery might be available</li>
          <li>✔ Easy 14 days returns and exchanges</li>
        </ul>

        {/* Go Back Button */}
        <Link to="/">
          <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
