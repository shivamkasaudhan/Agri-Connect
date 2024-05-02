import React, { useState } from 'react';
import logo from './AC.png'; // Import the logo image
// import SignUp from '../Login/SignUp';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 3,
        name: "About",
        link: "/About"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/BlogList"
    },
    {
        id: 5,
        name: "Crop Suggestion",
        link: "/crop-suggestion"
    }
];

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 dark:text-white py-4">
            <div className="container flex items-center justify-between">
                {/* Sidebar Icon */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-primary focus:outline-none focus:text-brandYellow"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 mr-2" />
                    <a href="/" className="text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl">
                        Agri Connect
                    </a>
                </div>

                {/* Navbar Links */}
                <div className={`lg:block hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
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
                <div>
                    <a href="/signUp" className="bg-brandYellow py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black">
                        Login/Signup
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
