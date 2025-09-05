import React from 'react';
import StripeContainer from '../StripeContainer'; 
import { Link } from 'react-router-dom';
function PaymentMethod() {
  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded shadow">
      {/* Billing Address Section */}
      <h1 className="text-xl font-semibold mb-4">Billing Address</h1>
      <form method="post" className="space-y-4">
        {['First Name', 'Last Name', 'Email Address', 'State', 'City', 'Zip / Postal Code'].map((labelText, idx) => {
          const id = labelText.toLowerCase().split(' ')[0];
          const type = idx === 2 ? 'email' : idx === 5 ? 'number' : 'text';
          const placeholder = labelText.includes('Name') ? labelText.split(' ')[0] :
                              labelText.includes('Email') ? 'you@example.com' :
                              labelText === 'Zip / Postal Code' ? '90001' :
                              '';
          return (
            <div key={id}>
              <label htmlFor={id} className="block font-medium mb-1">{labelText}</label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="w-full border border-gray-300 focus:outline-none p-2 rounded"
                required
              />
            </div>
          );
        })}

        {/* Payment Section */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Payment Method</h2>
        <StripeContainer />

        {/* Expiration and CVV */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="exp" className="block font-medium mb-1">Expiration Date</label>
            <input
              type="month"
              id="exp"
              name="exp"
              className="w-full border border-gray-300 focus:outline-none p-2 rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block font-medium mb-1">Security Code (CVV)</label>
            <input
              type="number"
              id="cvv"
              name="cvv"
              placeholder="123"
              className="w-full border border-gray-300 focus:outline-none p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Cash on Delivery Option */}
        <div className="flex items-center mt-4">
          <input type="checkbox" id="cod" name="cod" className="mr-2" />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <ul>

          <li className='bg-[#FB704F] hover:bg-[#fa5b36] text-center text-white uppercase text-[14px] font-medium py-3 px-5 w-full cursor-pointer transition duration-300'>
          <Link to="/thank">
          Place Order Now
          </Link>
          </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethod;
