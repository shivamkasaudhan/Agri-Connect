import React from 'react';
import logo from './AC.png'; // Import the logo image
import userImage from './user.png'; // Import the user image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/home",
    },
    {
        id: 2,
        name: "AI Farm Guide",
        link: "/farmguide"
    },
    {
        id: 3,
        name: "Blogs",
        link: "/bloglist"
    },
    {
        id: 4,
        name: "About",
        link: "/About"
    }
];

const Navbar = () => {
    // Retrieve userId from localStorage
    const phoneNo = localStorage.getItem('phoneNo');

    return (
        <nav className="bg-white dark:bg-gray-900 dark:text-white py-4">
            <div className="container flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 mr-2" />
                    <Link to="/home" className="text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl">
                        Agri Connect
                    </Link>
                </div>

                {/* Navbar Links */}
                <div>
                    <ul className="flex items-center gap-4">
                        {MenuLinks.map((data) => (
                            <li key={data.id}>
                                <Link to={data.link} className="inline-block px-4 font-semibold hover:text-brandYellow">
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* User Image Link */}
                <div>
                    <Link to={`/profile/${phoneNo}`}> {/* Link to the user's profile using their stored userId */}
                        <img src={userImage} alt="User" className="h-10 w-10 rounded-full" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
