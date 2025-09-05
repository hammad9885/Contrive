import React from 'react';
import Button from '../Components/button/Button';

function Unforgettable() {
  return (
    <div
      className='bg-[url("/images/imgi_152_modern-photorealistic-lamp-design.jpg")] bg-center bg-cover bg-no-repeat'
    >
      <div className="w-full h-full py-20 px-6 md:px-20 text-center flex flex-col items-center justify-center space-y-6">
        <p className="uppercase text-sm text-white">Get started with us</p>
        <h1 className="text-white font-bold text-3xl md:text-5xl max-w-2xl">
          Make Your Space Unforgettable — Shop with Us Today
        </h1>
        <Button title="Shop Now" />
      </div>
    </div>
  );
}

export default Unforgettable;
