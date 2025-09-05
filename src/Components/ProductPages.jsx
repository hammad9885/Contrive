import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import colorsData from '../data/colors.json';
import ProductCard from './ProductCard';

const categoryMap = {
  'LIVING ROOM': 'Living Room',
  'DINING': 'Dining',
  'BEDROOM': 'Bedroom',
  'OFFICE': 'Office',
};

const categories = Object.keys(categoryMap);

function ProductPages() {
  const uniqueProducts = Array.from(
    new Map(
      productsData
        .filter((p) => p.category && p.price)
        .map((item) => [item.image, item])
    ).values()
  );

  const [products, setProducts] = useState(uniqueProducts);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    let filtered = [...uniqueProducts];

    if (selectedColors.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.colors &&
          product.colors.some((color) => selectedColors.includes(color))
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (minPrice !== '' || maxPrice !== '') {
      filtered = filtered.filter((product) => {
        const price = parseFloat(product.price);
        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Infinity;
        return price >= min && price <= max;
      });
    }

    if (sortOption === 'lowToHigh') {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'highToLow') {
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setProducts(filtered);
  }, [selectedColors, selectedCategories, sortOption, minPrice, maxPrice, uniqueProducts]);

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleAddToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const alreadyExists = existing.find((item) => item.id === product.id);
    if (!alreadyExists) {
      const updatedCart = [...existing, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      alert('Item already in cart');
    }
  };

  return (
    <div className="flex max-w-[1200px] mx-auto py-10 px-4">
      {/* Sidebar */}
      <div className="w-1/4 pr-6 hidden md:block">
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />{' '}
                  {categoryMap[cat]}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Filter by Price</h3>
          <div className="flex items-center space-x-2 text-sm">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-20 border border-gray-300 rounded px-2 py-1 focus:outline-none"
            />
            <span>—</span>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-20 border border-gray-300 rounded px-2 py-1 focus:outline-none"
            />
          </div>
        </div>

        {/* Color Filters */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {colorsData.map((color, i) => (
              <span
                key={i}
                className={`w-5 h-5 rounded-full cursor-pointer border ${
                  selectedColors.includes(color) ? 'ring-2 ring-black' : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => toggleColor(color)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm">Showing {products.length} results</p>

          {/* Sort Dropdown */}
          <select
            id="sort"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="">Default Sorting</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id || product.image || index}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPages;
