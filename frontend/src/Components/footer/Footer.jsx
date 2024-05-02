import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            const scrollY = window.scrollY || window.pageYOffset;

            setIsBottom(scrollY + windowHeight >= documentHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className={`bg-gray-800 text-white py-2 ${isBottom ? 'absolute bottom-0 w-full' : 'fixed bottom-0 w-full'}`}>
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <p>&copy; 2024 Your Website Name</p>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
