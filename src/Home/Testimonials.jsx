import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function Testimonials() {
    const testimonials = [
        {
            name: 'Kevin Andrew',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aperiam unde aspernatur sunt corporis quam fugiat enim commodi magni sequi?',
            image: '/images/imgi_43_portrait-young-handsome-man-jean-shirt-smiling-with-crossed.jpg',
            rating: 5,
            num: 66,
        },
        {
            name: 'Peri James',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aperiam unde aspernatur sunt corporis quam fugiat enim commodi magni sequi?',
            image: '/images/imgi_156_young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated.jpg',
            rating: 5,
            num: 66,
        },
        {
            name: 'Nauth Reough',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aperiam unde aspernatur sunt corporis quam fugiat enim commodi magni sequi?',
            image: '/images/imgi_3_young-bearded-man-with-striped-shirt.jpg',
            rating: 5,
            num: 66,
        },
        {
            name: 'James Kendrew',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aperiam unde aspernatur sunt corporis quam fugiat enim commodi magni sequi?',
            image: '/images/imgi_55_portrait-young-man-smiling.jpg',
            rating: 5,
            num: 66,
        },
    ];

    return (
        <div className="py-16 ">
            <div className="container mx-auto md:px-[90px] px-4">
                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="uppercase text-[#FB704F] text-sm">Testimonials</p>
                    <h1 className="font-bold text-3xl">Our Customers Review</h1>
                </div>

                {/* Swiper Section */}
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    loop={true} 
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white border border-gray-100 p-6 h-full flex flex-col justify-between">
                                {item.num && (
                                    <h1 className='text-[#FB704F] font-bold text-[30px]'>{item.num}</h1>
                                )}
                                <p className="text-gray-700 text-sm mb-4">{item.review}</p>

                                <div className="flex items-center gap-4 mt-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="flex text-[#FAD12A] mt-1">
                                            {Array.from({ length: item.rating }, (_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-xs text-gray-500">Happy Client</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
