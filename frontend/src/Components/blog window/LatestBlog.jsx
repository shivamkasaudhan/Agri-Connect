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
        <img src={blogImage} alt="Blog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-700 opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-3xl font-bold mb-4">Title of the Latest Blog Post</h1>
          <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button onClick={handleReadMore} className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
