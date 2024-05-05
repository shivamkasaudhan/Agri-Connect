import React from 'react';
import { useNavigate } from 'react-router-dom';
import AI from './AI.png';
import blog from './blog.png';
import sell from './sell.png';

const Feature = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="container mx-auto py-12">
      {/* Services Heading */}
      <h2 className="text-center text-secondary text-3xl font-bold mb-8">Our Services</h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Card */}
        <button className="bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleClick('/crop-suggestion')}>
          <img
            className="w-full aspect-w-16 aspect-h-9 object-cover"
            src={AI}
            alt="Image 1"
          />
          <div className="p-4">
            <h3 className="text-secondary text-lg font-semibold mb-2">AI Farm Guide</h3>
          </div>
        </button>

        {/* Second Card */}
        <button className="bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleClick('/BlogList')}>
          <img
            className="w-full aspect-w-16 aspect-h-9 object-cover"
            src={blog}
            alt="Image 2"
          />
          <div className="p-4">
            <h3 className="text-secondary text-lg font-semibold mb-2">Learn Organic Farming</h3>
          </div>
        </button>

        {/* Third Card */}
        <button className="bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleClick('/profile')}>
          <img
            className="w-full aspect-w-16 aspect-h-9 object-cover"
            src={sell}
            alt="Image 3"
          />
          <div className="p-4">
            <h3 className="text-secondary text-lg font-semibold mb-2">Sell Online</h3>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Feature;
