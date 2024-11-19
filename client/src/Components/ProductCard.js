import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 hover:shadow-xl transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
