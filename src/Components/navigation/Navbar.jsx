import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBasket, FaUser, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [showSearchOverlay, setShowSearchOverlay] = useState(false);

    return (
        <nav className="bg-white shadow-md px-4 md:px-[90px] relative z-20">
            <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <img src="/images/logo/logo.png" alt="Logo" className="h-10" />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-14">
                    <ul className="flex space-x-10">
                        <li><Link to="/" className="text-gray-700 font-semibold">Home</Link></li>
                        <li><Link to="/shop" className="text-gray-700 font-semibold">Shop</Link></li>
                        <li><Link to="/about" className="text-gray-700 font-semibold">About</Link></li>
                        <li><Link to="/contact" className="text-gray-700 font-semibold">Contact</Link></li>
                        <li><Link to="/faq" className="text-gray-700 font-semibold">Faq</Link></li>
                    </ul>
                </div>

                {/* Desktop Icons */}
                <div className="hidden md:flex items-center space-x-5">
                    <button
                        className="text-gray-700"
                        onClick={() => setShowSearchOverlay(true)}
                        aria-label="Search"
                    >
                        <FaSearch />
                    </button>

                    <Link to="/cart" className="text-gray-700">
                        <FaShoppingBasket />
                    </Link>
                    <Link to="/profile" className="text-gray-700">
                        <FaUser />
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenu(!menu)} className="text-gray-700 text-xl">
                        {menu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <div className="md:hidden bg-white text-black absolute top-full left-0 w-full shadow-md">
                    <div className="flex flex-col items-center py-4 space-y-6">
                        <ul className="space-y-4 text-center">
                            <li><Link to="/" className="text-gray-700 font-semibold text-lg" onClick={() => setMenu(false)}>Home</Link></li>
                            <li><Link to="/shop" className="text-gray-700 font-semibold text-lg" onClick={() => setMenu(false)}>Shop</Link></li>
                            <li><Link to="/about" className="text-gray-700 font-semibold text-lg" onClick={() => setMenu(false)}>About</Link></li>
                            <li><Link to="/contact" className="text-gray-700 font-semibold text-lg" onClick={() => setMenu(false)}>Contact</Link></li>
                            <li><Link to="/faq" className="text-gray-700 font-semibold text-lg" onClick={() => setMenu(false)}>Faq</Link></li>
                        </ul>
                        <div className="flex space-x-6">
                            <Link to="/cart" className="text-gray-700 text-xl">
                                <FaShoppingBasket />
                            </Link>
                            <Link to="/profile" className="text-gray-700 text-xl">
                                <FaUser />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Overlay */}
            {showSearchOverlay && (
                <div className="fixed inset-0 bg-black text-white opacity-75 z-50 flex flex-col items-center justify-center px-4">
                    <button
                        className="absolute top-4 right-4 text-2xl text-gray-700"
                        onClick={() => setShowSearchOverlay(false)}
                    >
                        <FaTimes className='text-white' />
                    </button>
                    <input
                        type="text"
                        autoFocus
                        placeholder="Search..."
                        className="w-full max-w-xl p-4 border border-gray-300 rounded text-lg focus:outline-none"
                    />
                </div>
            )}
        </nav>
    );
}

export default Navbar;
