import React, { useState } from 'react';
import Layout from '../layout/layout';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, image, price, phoneNo }),
      });
      if (response.ok) {
        setSuccessMessage('Product added successfully');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to add product');
      }
    } catch (error) {
      setError('Failed to add product');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-brandBlue">Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-800">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-800">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="4" required />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-800">Image URL</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-800">Price</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-gray-800">Phone no.</label>
            <input type="text" id="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <button type="submit" className="bg-brandYellow text-white py-2 px-4 rounded-md hover:bg-secondary m-4 transition-colors duration-300">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;
