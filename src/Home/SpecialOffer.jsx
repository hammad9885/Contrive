import React from 'react';
import Button from '../Components/button/Button';

function SpecialOffer() {
  return (
    <div className="relative bg-[url('/images/imgi_173_brown-couch-against-white-wall.jpg')] bg-center bg-cover w-full min-h-[450px]">
      <div className="relative z-10 container mx-auto px-4 md:px-[90px] py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="max-w-xl">
          <p className="uppercase text-sm text-[#FC704D] mb-2">Special Offer</p>
          <h1 className="text-3xl md:text-[50px] md:w-[330px] font-bold mb-4">Limited Time Offer!</h1>
          <p className="text-lg mb-6">
            Save Up to <span className="text-[#FC704D] font-bold">30%</span> on Select Furniture!
          </p>
          <Button title="shop now" />
        </div>

        <div className="bg-white md:mt-[250px] text-black p-6 rounded-lg shadow-lg w-[260px]">
          <h2 className="text-[20px] font-bold mb-2">Modern Sofa</h2>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur...
          </p>
          <div className="flex items-center">
            <span className="text-[#FC704D] font-bold text-lg mr-2">$42.00</span>
            <span className="line-through text-gray-400 text-sm">$89.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
