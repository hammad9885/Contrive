import React from 'react';
import { FaHeart } from 'react-icons/fa';

function ProductCard({ product, onAddToCart }) {
  const colors = product.colors || [];

  return (
    <div className="p-4 rounded-lg hover:shadow-lg transition duration-300 text-start bg-white">
      <img
        src={product.image}
        alt={product.title || 'Product Image'}
        className="w-full h-56 object-cover mb-4 rounded-md"
      />

      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2">
          {colors.map((color) => (
            <span
              key={color}
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer transition" />
      </div>

      <h3 className="text-md font-bold mb-1">{product.title}</h3>
      <p className="text-sm">
        <span className="text-[#FC704D] font-bold mr-2">${product.price}</span>
        {product.oldPrice && (
          <span className="line-through text-gray-400">${product.oldPrice}</span>
        )}
      </p>

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product)}
          className="bg-[#FB704F] hover:bg-[#fa5b36] text-white px-4 py-2 rounded w-full transition mt-3"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
