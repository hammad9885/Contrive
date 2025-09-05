import React from 'react';
import Button from '../Components/button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HomeHeroSection() {
    const slides = [
        { image: '/images/imgi_58_table-setting-dinner.jpg' },
        { image: '/images/imgi_59_elegant-modern-sofa-side-table.jpg' },
        { image: '/images/imgi_58_peaceful-bedroom-with-beige-colors-simple.jpg' },
        { image: '/images/imgi_7_woman-with-her-husband-furniture-store-showroom.jpg' },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper w-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="relative bg-center bg-cover h-[430px] md:h-[500px] w-full flex items-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="container px-4 md:px-10 lg:px-24 text-white space-y-4 max-w-[700px]">
                            <p className="text-sm md:text-base font-medium flex items-center gap-2">
                                <span className="h-[3px] w-[25px] bg-[#F36E53] rounded-full inline-block"></span>
                                BEST FURNITURES
                            </p>
                            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                                Discover Stylish Furniture for Every Room!
                            </h1>
                            <p className="text-sm md:text-base text-white/90">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusantium
                                deserunt omnis alias. Neque, temporibus!
                            </p>
                            <Button title="shop now" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default HomeHeroSection;
