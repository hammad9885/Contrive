import React from 'react';

function FurnitureDesign() {
  return (
    <>
    <div>

    <div className="container mx-auto md:px-[90px] flex flex-col md:flex-row gap-8 p-6">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <img
          src="/images/imgi_59_vector-dining.jpg"
          alt="Dining Room Design"
          className="w-full rounded-md"
        />

        {/* Stats Section */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-[30px] font-bold">
              23 <span className="text-[#FA714F]">+</span>
            </h1>
            <p className="text-[15px] text-gray-600">Years of Experience</p>
          </div>
        <div className="border-l border-r border-gray-200 px-4 py-2">
  <h1 className="text-[30px] font-bold">
    100 <span className="text-[#FA714F]">%</span>
  </h1>
  <p className="text-[15px] text-gray-600">Satisfied Customers</p>
</div>

          <div>
            <h1 className="text-[30px] font-bold">
              30 <span className="text-[#FA714F]">k+</span>
            </h1>
            <p className="text-[15px] text-gray-600">Items Sold</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-4">
        <p className="uppercase text-[#FA714F] text-sm">About us</p>
        <h1 className="font-bold text-3xl">
          Devoted to the Art of Furniture Design
        </h1>
        <p className="text-gray-600 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora ea deleniti tenetur ab, nihil optio assumenda sint modi voluptas!
        </p>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem dicta maiores necessitatibus?
        </p>

        {/* Gallery Section */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src="/images/imgi_58_modern-luxury-authentic-dining-room-interior-design-with-picture-frame.jpg"
            alt="Modern Luxury Dining Room"
            className="w-full"
          />
          <img
            src="/images/imgi_157_view-lighting-device-with-futuristic-design.jpg"
            alt="Futuristic Lighting"
            className="w-full"
          />
          <img
            src="/images/imgi_43_vacuum-cleaner-robot-runs-wood-floor-living-room.jpg"
            alt="Robot Vacuum on Wood Floor"
            className="w-full"
          />
          <img
            src="/images/imgi_39_beautiful-modern-plants-deco.jpg"
            alt="Modern Plant Decor"
            className="w-full"
          />
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default FurnitureDesign;
