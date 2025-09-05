import React from 'react';

function HomeDelevireDetails() {
    const features = [
        {
            icon: '/images/icons/food_13875138.png',
            title: 'Free Worldwide Shipping',
            description: 'Lorem ipsum dolor sit amet.',
            iconHeight: 'h-[50px]'
        },
        {
            icon: '/images/icons/gift_8989768.png',
            title: 'Easy Return Policy',
            description: 'Lorem ipsum dolor sit amet.',
            iconHeight: 'h-[45px]'
        },
        {
            icon: '/images/icons/afghani_10499966.png',
            title: 'Full Secure Payment',
            description: 'Lorem ipsum dolor sit amet.',
            iconHeight: 'h-[45px]'
        }
    ];

    return (
        <>
            <div className='bg-[#F2F9FF] w-full py-[50px] md:px-[90px]'>
                <div className='container mx-auto flex flex-col sm:flex-row gap-y-[40px] sm:gap-x-[50px] md:gap-x-[80px]'>
                    <div className='text-center sm:text-left sm:w-[376px]'>
                        <p className='text-[14px] text-[#FA704F]'>BEST CHOICE</p>
                        <h1 className='text-[28px] sm:text-[32px] font-bold'>Why You Should Choose Us</h1>
                        <p className='text-[15px] text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nobis dignissimos. Vitae voluptas suscipit molestiae!
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-center sm:justify-start gap-[30px] sm:gap-[153px]'>
                        {features.map((feature, index) => (
                            <div key={index} className='w-[250px] sm:w-[130px]'>
                                <div className='h-[70px] w-[70px] rounded-full bg-white flex justify-center items-center'>
                                    <img src={feature.icon} className={feature.iconHeight} alt={feature.title} />
                                </div>
                                <h1 className='text-[16px] font-bold'>{feature.title}</h1>
                                <p className='text-[14px] text-gray-500'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeDelevireDetails;
