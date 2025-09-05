import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Button from '../Components/button/Button';

function AboutCrafting() {
  return (
    <div className="bg-[#2B5655] text-white py-16 px-4 md:px-[90px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <img
            src="/images/imgi_58_table-setting-dinner.jpg"
            alt="About Us"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
          />

          <div className="flex justify-between mt-6 gap-6 w-full">
            <div>
              <h1 className="text-[28px] md:text-[36px] font-bold">
                23<span className="text-[#FC704D]">+</span>
              </h1>
              <p className="text-sm">Years of Experience</p>
            </div>

            <div className="border-l border-r px-6 border-gray-600">
              <h1 className="text-[28px] md:text-[36px] font-bold">
                100<span className="text-[#FC704D]">%</span>
              </h1>
              <p className="text-sm">Satisfied Customers</p>
            </div>

            <div>
              <h1 className="text-[28px] md:text-[36px] font-bold">
                30<span className="text-[#FC704D]">k+</span>
              </h1>
              <p className="text-sm">Items Sold</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between md:pe-[135px]">
          <p className="uppercase text-[14px] mb-2">About us</p>

          <h1 className="font-bold text-[24px] md:text-[30px] mb-4">
            Crafting Your Dream Space with Passion
          </h1>

          <p className="text-gray-200 text-[15px] mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos at dolores
            perferendis nisi earum culpa corrupti nemo obcaecati quasi optio, laudantium
            sint aliquam consectetur quos ab alias aspernatur eaque?
          </p>

          <Button title="read more" />

          <div className="mt-10 flex justify-center items-center bg-[url('/images/imgi_61_scrapbook-with-assortment-home-decorations.jpg')] bg-center bg-cover h-[200px] w-[250px] md:h-[220px] md:w-[260px] rounded-md shadow-md">
            <FaPlayCircle className="text-[50px] text-white hover:text-[#FC704D] transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCrafting;
