import React, { useState } from 'react';

const Header = () => {
    const navText = ['Characters', 'About', 'Gameplay', 'Subscribe'];
    const socialImg = ['prime_twitter.svg','ic_baseline-discord.svg', 'lineicons_telegram.svg',];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full top-0 bg-[#D9D9D93D]  z-50 fixed  backdrop-blur-lg'>
        <nav className="bg-transparent  text-white px-6 py-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="images/GrowTownLogo .png" alt="logo" className="h-10 sm:h-16 w-auto" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex  text-lg font-bold text-[#4B2519] space-x-6">
                    {navText.map((text, index) => (
                        <li key={index} className="hover:text-gray-400 cursor-pointer">
                            {text}
                        </li>
                    ))}
                </ul>

                {/* Social Links */}
                <div className="hidden md:flex space-x-5">
                    {socialImg.map((img, index) => (
                        <img
                            key={index}
                            src={`images/${img}`}
                            alt="social icon"
                            className="h-7 w-7 hover:opacity-80 cursor-pointer"
                        />
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
               <div className="md:hidden  text-black font-bold mt-4">
                    <ul className="flex flex-col  space-y-2">
                        {navText.map((text, index) => (
                            <li
                                key={index}
                                className="hover:text-gray-400 cursor-pointer text-center py-2 border-b border-gray-700"
                            >
                                {text}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-4 space-x-4">
                        {socialImg.map((img, index) => (
                            <img
                                key={index}
                                src={`images/${img}`}
                                alt="social icon"
                                className="h-6 w-6 hover:opacity-80 cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
        </div>
    );
};

export default Header;
