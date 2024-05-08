import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogImage from './organic.jpg';

const LatestBlog = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/BlogList');
  };

  return (
    <div className="ml-4 mr-4 mt-4 mb-4">
      {/* Container with margin */}
      <div className="relative bg-gray-900 h-135 rounded-lg overflow-hidden">
        {/* Increased height */}
        <img src={blogImage} alt="Blog" className="absolute inset-0 w-full h-full object-cover blur-md" />
        <div className="absolute inset-0 bg-gray-700 opacity-60 backdrop-filter backdrop-blur-lg border border-gray-600 rounded-lg"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-3xl font-bold mb-4">Grow With Knowledge</h1>
          <p className="mb-8">Dive into our insightful blogs for natural and organic farming.</p>
          <button onClick={handleReadMore} className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
