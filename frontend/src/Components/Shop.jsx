// Shop.jsx

import React from 'react';
import items from './Data';

const ShopPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-brandBlue">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-brandWhite shadow-md p-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-auto mb-2 rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">Price: ${item.price}</p>
            <p className="text-gray-700 mb-2">Rating: {item.rating}</p>
            <p className="text-gray-700">Farmer: {item.farmer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
