import React, { useState } from 'react';
import Layout from '../layout/layout';

function AddBlog() {
  const [title_en, setTitleEn] = useState('');
  const [title_hi, setTitleHi] = useState('');
  const [title_mr, setTitleMr] = useState('');
  const [image, setImage] = useState('');
  const [summary_en, setSummaryEn] = useState('');
  const [summary_hi, setSummaryHi] = useState('');
  const [summary_mr, setSummaryMr] = useState('');
  const [content_en, setContentEn] = useState('');
  const [content_hi, setContentHi] = useState('');
  const [content_mr, setContentMr] = useState('');
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
        body: JSON.stringify({ 
          title_en,
          title_hi,
          title_mr,
          image, 
          summary_en, 
          summary_hi, 
          summary_mr, 
          content_en, 
          content_hi, 
          content_mr 
        }),
      });
      if (response.ok) {
        setTitleEn('');
        setTitleHi('');
        setTitleMr('');
        setImage('');
        setSummaryEn('');
        setSummaryHi('');
        setSummaryMr('');
        setContentEn('');
        setContentHi('');
        setContentMr('');
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
            <label htmlFor="title_en" className="block text-gray-800">Title (English)</label>
            <input type="text" id="title_en" value={title_en} onChange={(e) => setTitleEn(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="title_hi" className="block text-gray-800">Title (Hindi)</label>
            <input type="text" id="title_hi" value={title_hi} onChange={(e) => setTitleHi(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="title_mr" className="block text-gray-800">Title (Marathi)</label>
            <input type="text" id="title_mr" value={title_mr} onChange={(e) => setTitleMr(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-800">Image URL</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="summary_en" className="block text-gray-800">Summary (English)</label>
            <textarea id="summary_en" value={summary_en} onChange={(e) => setSummaryEn(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="4" required />
          </div>
          <div className="mb-4">
            <label htmlFor="summary_hi" className="block text-gray-800">Summary (Hindi)</label>
            <textarea id="summary_hi" value={summary_hi} onChange={(e) => setSummaryHi(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="4" required />
          </div>
          <div className="mb-4">
            <label htmlFor="summary_mr" className="block text-gray-800">Summary (Marathi)</label>
            <textarea id="summary_mr" value={summary_mr} onChange={(e) => setSummaryMr(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="4" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content_en" className="block text-gray-800">Content (English)</label>
            <textarea id="content_en" value={content_en} onChange={(e) => setContentEn(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="8" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content_hi" className="block text-gray-800">Content (Hindi)</label>
            <textarea id="content_hi" value={content_hi} onChange={(e) => setContentHi(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="8" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content_mr" className="block text-gray-800">Content (Marathi)</label>
            <textarea id="content_mr" value={content_mr} onChange={(e) => setContentMr(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" rows="8" required />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <button type="submit" className="bg-green-500 mb-4  text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddBlog;
