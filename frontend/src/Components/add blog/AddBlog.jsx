import React, { useState } from 'react';
import Layout from '../layout/layout';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/addblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, image, summary, content }),
      });
      if (response.ok) {
        setSuccessMessage('Blog post created successfully');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create blog post');
      }
    } catch (error) {
      setError('Failed to create blog post');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-brandBlue">Add New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-800">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-800">Image URL</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="summary" className="block text-gray-800">Summary</label>
            <textarea id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="4" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-800">Content</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="8" required />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <button type="submit" className="bg-brandYellow text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddBlog;
