import React, { useState } from 'react';

const Header = () => {
    const navText = ['Characters', 'About', 'Gameplay', 'Subscribe'];
    const socialLinks = [
        { img: 'prime_twitter.svg', link: 'https://x.com/Grow_Town' },
        { img: 'ic_baseline-discord.svg', link: 'https://discord.gg/FXaaZr7T' },
        { img: 'lineicons_telegram.svg', link: 'https://t.me/growtownchat' }
    ];
    
   
    

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full top-0 bg-[#D9D9D93D] z-50 fixed backdrop-blur-lg'>
            <nav className="bg-transparent text-white px-6 py-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href='#heroPage'>
                            <img src="images/GrowTownLogo .png" alt="logo" className="h-10 sm:h-16 w-auto"  draggable='false'
              loading="lazy"/>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex text-xs text-[#4B2519] space-x-6">
                        {navText.map((text, index) => (
                            <a href={`#${text}`} key={index}>
                                <li className="hover:text-[#FFF3C5] cursor-pointer custom-fingerpaint-small">
                                    {text}
                                </li>
                            </a>
                        ))}
                    </ul>

                    {/* Social Links */}
                    <div className="hidden md:flex space-x-5">
                        {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">

                            <img
                                key={index}
                                src={`images/${item.img}`}
                                alt="social icon"
                                className="h-7 w-7 hover:opacity-80 cursor-pointer"
                                 draggable='false'
              loading="lazy"
                            />
                            </a>
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
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <ul className="flex flex-col space-y-2  text-black font-bold mt-4">
                        {navText.map((text, index) => (
                            <a href={`#${text}`} key={index}>
                                <li
                                    className="md:text-xl hover:text-[#FFF3C5] cursor-pointer text-center py-2 border-b border-gray-700 custom-fingerpaint"
                                >
                                    {text}
                                </li>
                            </a>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-4 space-x-4">
        {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                    src={`images/${item.img}`}
                    alt="social icon"
                    className="h-6 w-6 hover:opacity-80 cursor-pointer"
                     draggable='false'
              loading="lazy"
                />
            </a>
        ))}
    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;