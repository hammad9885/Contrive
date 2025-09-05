import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#2C5857] text-white py-12">
            <div className="container mx-auto px-4 md:px-[90px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                    
                    {/* Column 1: Logo + About + Socials */}
                    <div>
                        <h2 className="text-xl font-bold mb-3">CONTRIVE</h2>
                        <p className="text-gray-300 mb-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            cillum dolore eu fugiat nulla pariatur occaecat cupidatat
                            proident, sunt in culpa officia deserunt mollit.
                        </p>
                        <ul className="flex space-x-3">
                            <li className="border border-gray-500 p-2 rounded-full hover:bg-[#FA7150] transition cursor-pointer">
                                <FaFacebookF />
                            </li>
                            <li className="border border-gray-500 p-2 rounded-full hover:bg-[#FA7150] transition cursor-pointer">
                                <FaInstagram />
                            </li>
                            <li className="border border-gray-500 p-2 rounded-full hover:bg-[#FA7150] transition cursor-pointer">
                                <FaYoutube />
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className="font-semibold mb-3">Navigation</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
                            <li><Link to="/about" className="hover:text-white">About</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link to="/faq" className="hover:text-white">Faq</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="font-semibold mb-3">Support</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Terms of use</a></li>
                            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-white">Cookie policy</a></li>
                            <li><a href="#" className="hover:text-white">Warranty</a></li>
                            <li><a href="#" className="hover:text-white">Care Guide</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="font-semibold mb-3">Contact Us</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FaPhone className="text-lg" /> +123 456 123 098
                            </li>
                            <li className="flex items-center gap-2">
                                <SiGmail className="text-lg" /> hello@contrive.com
                            </li>
                            <li className="flex items-start gap-2">
                                <FaLocationDot className="text-lg mt-1" /> 
                                <span>121 King Street Melbourne, 3000, Australia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 border-t border-gray-500"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-gray-400 text-sm">
                    <p>Copyright © 2025 contrive.com All rights reserved.</p>
                    <div className="flex space-x-3 mt-4 md:mt-0">
                        <img src="/images/logo/social.png" alt="social" className="h-9" />
                        <img src="/images/logo/bitcoin-logo.png" alt="Bitcoin" className="h-9" />
                        <img src="/images/logo/amex.png" alt="Amex" className="h-9" />
                        <img src="/images/logo/paypal.png" alt="Paypal" className="h-9" />
                        <img src="/images/logo/Mastercard-logo.png" alt="Mastercard" className="h-9" />
                        <img src="/images/logo/visa.png" alt="Visa" className="h-9" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
