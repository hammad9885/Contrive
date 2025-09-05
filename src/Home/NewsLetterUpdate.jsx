import React from 'react';

function NewsLetterUpdate() {
    return (
        <div className="bg-[#FB704F]">
            <div className="container mx-auto md:px-[90px] px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/Sofa.png"
                            alt="Newsletter Sofa"
                            className="max-w-full h-auto"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="text-white text-center md:text-left">
                            <p className="uppercase text-sm mb-2">
                                Newsletter Subscription
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Get the Latest Update <br /> into Your Inbox
                            </h2>

                            <div className="w-full sm:w-[400px] relative">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="w-full px-4 py-3 pr-32 bg-white text-gray-700 focus:outline-none"
                                />
                                <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#1D3C34] text-white px-5 py-2 uppercase text-sm font-semibold">
                                    Subscribe
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewsLetterUpdate;
