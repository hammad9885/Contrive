import React from 'react';
import Button from '../Components/button/Button';

function DiscountItems() {
    const items = [
        {
            image: '/images/imgi_44_loft-style-living-room-3d-renderthere-are-polished-concrete-floor-wood-panel.jpg',
            label: 'NEW ARRIVALS',
            title: <>Get <span className="text-[#FA704F]">20%</span> Off</>,
        },
        {
            image: '/images/imgi_152_modern-photorealistic-lamp-design.jpg',
            label: 'DECOR',
            title: 'Light Up Your Space',
        },
        {
            image: '/images/imgi_168_cozy-nightstand-lamp-illuminating-minimalist-hotel-bedroom-with-warm.jpg',
            label: 'INTERIOR',
            title: 'Elegant Wooden Table',
        },
    ];

    return (
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 text-white my-[60px] px-4">
            {/* Left Large Box */}
            <div
                className="w-full lg:w-[600px] h-[250px] sm:h-[300px] lg:h-[401px] bg-cover bg-center rounded-md flex items-center"
                style={{ backgroundImage: `url(${items[0].image})` }}
            >
                <div className="px-6 sm:px-10 mb-[140px] lg:px-[201px]">
                    <p className="text-sm">{items[0].label}</p>
                    <h1 className="text-[20px] sm:text-[35px] font-bold">{items[0].title}</h1>
                    <Button title='shop now' />
                </div>
            </div>

            {/* Right Two Boxes */}
            <div className="flex flex-col gap-4 w-full lg:w-[540px]">
                {items.slice(1).map((item, index) => (
                    <div
                        key={index}
                        className="h-[180px] sm:h-[192px] lg:h-[192px] bg-cover bg-center rounded-md flex items-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div
                            className={`px-6 sm:px-10 lg:px-6 ${
                                index === 0 ? 'md:px-[230px] w-[218px]' : 'md:ms-[314px]'
                            }`}
                        >
                            <p className="text-sm">{item.label}</p>
                            <h1 className="text-xl sm:text-2xl font-bold my-1">{item.title}</h1>
                            <Button title='shop now' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiscountItems;
