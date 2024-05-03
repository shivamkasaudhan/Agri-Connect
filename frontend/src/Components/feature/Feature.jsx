import React from 'react';

const Feature = ()=> {
  return (
    <div>
      <h2 className="text-center text-brandBlue text-3xl font-bold mb-8">What We Are Providing</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 md:mb-0">
            <h3 className="text-brandBlue text-xl font-semibold mb-4">AI Farm Guide</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 md:mb-0">
            <h3 className="text-brandBlue text-xl font-semibold mb-4">Farming Content in Blogs</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-brandBlue text-xl font-semibold mb-4">Connecting Customers to Farmers</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
