import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from './organic.jpg';
import B2 from './hero.png'

function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the profile route when clicked
    navigate('/profile');
  };

  return (
    <div className="relative w-full h-80 overflow-hidden">
      <img className="absolute inset-0 w-full h-full object-cover" src={B2} alt="" />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Color overlay with gray color and opacity */}
        {/* <div className="absolute inset-0 bg-gray-500 opacity-40"></div> */}
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Go online with Agri-Connect</h1>
          <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors" onClick={handleClick}>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
