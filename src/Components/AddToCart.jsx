import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AddToCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartStr = localStorage.getItem('cart');
    if (cartStr) {
      try {
        const parsed = JSON.parse(cartStr).map(item => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(parsed);
      } catch (err) {
        console.error('Failed to parse cart:', err);
      }
    }
  }, []);

  const changeQty = (index, delta) => {
    const arr = [...cartItems];
    arr[index].quantity = Math.max(1, arr[index].quantity + delta);
    setCartItems(arr);
    localStorage.setItem('cart', JSON.stringify(arr));
  };

  const removeItem = (index) => {
    const arr = cartItems.filter((_, i) => i !== index);
    setCartItems(arr);
    localStorage.setItem('cart', JSON.stringify(arr));
  };

  const getSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const shipping = 10; 
  const subtotal = getSubtotal();
  const grandTotal = subtotal + shipping;

  if (!cartItems.length) {
    return (
      <div className="p-8 text-center text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto">
      {/* Cart Items Section */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center shadow-md space-x-4 p-4 rounded bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price * item.quantity}</p>
              </div>
              <div className="flex items-center border rounded">
                <button
                  className="px-3 py-1"
                  onClick={() => changeQty(index, -1)}
                >
                  -
                </button>
                <span className="px-3 py-1 border-x">{item.quantity}</span>
                <button
                  className="px-3 py-1"
                  onClick={() => changeQty(index, 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="border border-red-400 rounded-full p-[10px]"
              >
                <FaTimes className="text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-[300px] mt-10 h-[275px] lg:mt-0 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <hr className="mb-4" />
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Grand Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
        <ul>
            <li className='w-full'>

        <Link to='/check' className="w-full md:px-[52px] px-[112px] bg-[#FB704F] hover:bg-[#fa5b36] w-full text-white py-2 rounded transition">
          Proceed to Checkout
        </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
export default AddToCart;