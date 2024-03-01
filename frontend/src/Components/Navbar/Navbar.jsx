import React from 'react';
import { IoMdSearch } from 'react-icons/io';

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

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 dark:text-white py-4">
            <div className="container flex items-center justify-between">
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
                <div>
                    <div className="flex items-center">
                        <input type="text" placeholder="Search" className="border border-gray-300 px-2 py-1 rounded-md mr-2" />
                        <IoMdSearch className="text-xl text-brandYellow "/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
