'use client'
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: '400' })
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
    const [isNavbarVisible, setNavbarVisible] = useState(false);

    // Toggle function for navbar
    const toggleNavbar = () => setNavbarVisible((prevState) => !prevState);

    // Close navbar on clicking a link (for mobile)
    const closeNavbar = () => setNavbarVisible(false);

    const navItems = [
        { item: "Shop", link: "/" },
        { item: "On Sale", link: "/contact" },
        { item: "New Arrivals", link: "/about" },
        { item: "Brands", link: "/sign-up" },
    ];

    return (
        <div className="flex justify-between items-center px-6 py-8 w-full max-w-screen-xl mx-auto">
            {/* Logo */}
            <span className={`${inter} text-2xl font-extrabold tracking-wider`}>
                Shop.Co
            </span>

            {/* Mobile Menu Icon */}
            <button
                onClick={toggleNavbar}
                className="md:hidden text-4xl focus:outline-none"
                aria-label="Toggle navigation"
            >
                <MdMenu />
            </button>

            {/* Navbar */}
            <nav className={`md:flex ${isNavbarVisible ? 'block' : 'hidden'} ml-8 md:block absolute md:static top-16 left-0 w-full bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out z-50`}>
                <ul className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                    {navItems.map((item, index) => (
                        <li key={index} className={`${inter} text-lg font-medium hover:underline hover:text-maincolor transition-all duration-300`}>
                            <Link href={item.link} onClick={closeNavbar}>
                                {item.item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Search and Icons */}
            <div className=" md:flex items-center space-x-6">
                <div className="hidden md:block relative w-[243px]">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className={`${poppins} rounded-lg w-full h-10 bg-gray-200 placeholder:text-sm text-sm px-4`}
                    />
                    <CiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-lg" />
                </div>
                <div className="flex space-x-4">
                <CiSearch className="w-8 h-8 text-gray-700 cursor-pointer" />
                    <CiHeart className="w-8 h-8 text-gray-700 cursor-pointer" />
                    <AiOutlineShoppingCart className="w-8 h-8 text-gray-700 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
