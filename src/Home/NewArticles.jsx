import React from 'react';

function NewArticles() {
    const articles = [
        {
            title: '10 Tips for Choosing the Perfect Sofa for Your Living Room',
            date: 'NOV 04, 2024',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus.',
            image: '/images/imgi_155_comfortable-pillow-sofa.jpg',
        },
        {
            title: 'Transform Your Space: The Latest Furniture Trends',
            date: 'MAY 10, 2024',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus.',
            image: '/images/imgi_27_maximalist-interior-design.jpg',
        },
        {
            title: 'How to Make Eco-Friendly Choices for Your Home',
            date: 'DEC 12, 2024',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus.',
            image: '/images/imgi_170_empty-chairs-against-wall-home.jpg',
        },
    ];

    return (
        <div className="bg-[#FEF3F0] py-16">
            <div className="container mx-auto md:px-[90px] px-4">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <p className="text-sm uppercase text-[#FA7150]">News & Articles</p>
                    <h1 className="font-bold text-3xl mt-1">Our Latest Blog Posts</h1>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <div key={index}>
                            <div
                                className={`relative bg-center bg-cover ${
                                    index === 1 ? 'h-[270px]' : 'h-[200px]'
                                }`}
                                style={{ backgroundImage: `url(${article.image})` }}
                            >
                                <span className="absolute top-3 left-3 bg-white text-sm font-medium px-3 py-1">
                                    {article.date}
                                </span>
                            </div>
                            <div className="py-4">
                                <h2 className="font-bold text-[20px] text-gray-800 mb-2">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-gray-600">{article.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewArticles;
