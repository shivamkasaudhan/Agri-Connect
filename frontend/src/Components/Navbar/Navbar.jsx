import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import logo from './AC.png'; // Import the logo image

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link:"/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#Shop"
    },
    {
        id: 3,
        name: "About",
        link: "/#About"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#Blogs"
    },
    {
        id: 5,
        name: "Crop Suggestion",
        link: "/crop-suggestion"
    },
];

const IndianLanguages = [
    {
        id: 1,
        name: "हिन्दी",
    },
    {
        id: 2,
        name: "বাংলা",
    },
    {
        id: 3,
        name: "తెలుగు",
    },
    {
        id: 4,
        name: "मराठी",
    },
    // Add more Indian regional languages as needed
];

const Navbar = () => {
    const [language, setLanguage] = useState(null);
    const [showLanguages, setShowLanguages] = useState(false);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setShowLanguages(false);
        // You can implement language change logic here
    };

    return (
        <nav className="bg-white dark:bg-gray-900 dark:text-white py-4">
            <div className="container flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-10"  />

                <a href="/" className="text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl">
                    Agri Connect
                </a>
                <div className="lg:block hidden">
                    <ul className="flex items-center gap-4">
                        {MenuLinks.map((data) => (
                            <li key={data.id}>
                                <a href={data.link} className="inline-block px-4 font-semibold hover:text-brandYellow">
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center">
                    <input type="text" placeholder="Search" className="border border-gray-300 px-2 py-1 rounded-md mr-2" />
                    <IoMdSearch className="text-xl text-brandYellow" />
                </div>
                <div className="relative">
                    <button className="text-brandWhite hover:text-brandYellow focus:outline-none" onClick={() => setShowLanguages(!showLanguages)}>
                        {language ? language.name : "Select Language"}
                    </button>
                    {showLanguages && (
                        <ul className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-xl z-20">
                            {IndianLanguages.map(lang => (
                                <li key={lang.id} className="px-4 py-2 hover:bg-gray-500 cursor-pointer" onClick={() => handleLanguageChange(lang)}>
                                    {lang.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
