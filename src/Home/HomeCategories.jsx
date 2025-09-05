import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const categories = [
    {
        title: 'Living Room Essentials',
        image: '/images/imgi_174_high-angle-view-potted-plant-table-home.jpg'
    },
    {
        title: 'Bedroom Retreats',
        image: '/images/imgi_173_lamp-interior-hotel-bedroom-traveling.jpg'
    },
    {
        title: 'Dining & Entertaining',
        image: '/images/imgi_3_high-angle-tasty-food-arrangement.jpg'
    },
    {
        title: 'Home Office Solutions',
        image: '/images/imgi_42_table-chairs-home.jpg'
    }
];

function HomeCategories() {
    return (
        <div className="container mx-auto md:px-[90px] py-10">
            <div className="text-center mb-10">
                <p className="text-sm uppercase text-[#FB704F]">Categories</p>
                <h1 className="text-3xl font-bold">Shop By Categories</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                {categories.map((category, index) => (
                    <div key={index} className="text-center">
                        <div
                            className="relative group flex justify-center items-center bg-center bg-cover h-[200px] w-[200px] rounded-full"
                            style={{ backgroundImage: `url(${category.image})` }}
                        >
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FB704F] rounded-full p-3 shadow-lg">
                                <FaArrowRight className="text-white" />
                            </span>
                        </div>

                        <h2 className="mt-4 text-lg font-medium">{category.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeCategories;
