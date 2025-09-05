import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Button from '../Components/button/Button';
import productData from '../data/products.json';
import { Link } from 'react-router-dom';

function PopularProducts() {
  const categories = ['ALL', 'LIVING ROOM', 'DINING', 'BEDROOM', 'OFFICE'];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const allowedIds = [1, 2, 3, 4, 5, 6];

  const [products] = useState(
    productData.filter(product => allowedIds.includes(product.id))
  );

  const filteredProducts =
    activeCategory === 'ALL'
      ? products
      : products.filter(product => product.category === activeCategory);

  return (
    <div className="text-center my-10 md:px-[90px]">
      {/* Section Header */}
      <p className="text-sm text-[#FA704F] mb-2">FEATURED ITEMS</p>
      <h1 className="text-3xl font-bold mb-6">Our Popular Products</h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm font-medium uppercase pb-2 transition-colors ${
              activeCategory === category
                ? 'text-[#FA704F] border-b-2 border-[#FA704F]'
                : 'text-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="p-4 rounded-lg hover:shadow-lg transition duration-300 text-start bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover mb-4 rounded-md"
            />

            <div className="flex items-center justify-between mb-2">
              {/* Color Circles */}
              <div className="flex space-x-2">
                {(product.colors || ['#FC704D', '#2E5857', '#EFB858', '#8F7CB1']).map(
                  (color, idx) => (
                    <span
                      key={idx}
                      className="h-3 w-3 rounded-full inline-block"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>
              <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer transition" />
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p className="text-sm mb-3">
              <span className="text-[#FC704D] font-bold mr-2">${product.newPrice}</span>
              <span className="line-through text-gray-400">${product.oldPrice}</span>
            </p>

            {/* Shop Now Button */}
            <Link
              to="/shop"
              className="block w-full mt-2 bg-[#FB704F] hover:bg-[#fa5b36] text-white uppercase text-sm font-medium py-3 px-5 text-center rounded transition duration-300"
            >
              Shop now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
