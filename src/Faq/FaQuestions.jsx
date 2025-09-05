import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const faqData = [
    {
        question: "What is your return policy?",
        answer: "A return policy outlines the conditions under which a customer can return purchased items.",
    },
    {
        question: "What materials do you use in furniture?",
        answer: "Furniture is made from wood, metal, plastic, and fabric — some of the most common materials.",
    },
    {
        question: "How long does shipping take?",
        answer: "Shipping times vary by location, but we strive to deliver as quickly as possible worldwide.",
    },
    {
        question: "How do I care for my furniture?",
        answer: "Regularly dust, clean spills immediately, use coasters and protect from sunlight and heat.",
    },
];

function FaQuestions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <p className="text-[#FB704F] text-sm uppercase">FAQ's</p>
                    <h1 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
                </div>

                {/* Grid for 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-200"
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="flex items-center justify-between text-lg font-medium text-gray-900">
                                <span>Q: {item.question}</span>
                                <FaArrowRight
                                    className={`transform transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-90 text-[#FB704F]' : 'text-gray-500'
                                    }`}
                                />
                            </div>

                            {openIndex === index && (
                                <p className="mt-3 text-gray-700 transition-opacity duration-300">
                                    A: {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FaQuestions;
