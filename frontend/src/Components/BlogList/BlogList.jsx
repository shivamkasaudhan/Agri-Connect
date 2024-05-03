import React from 'react';
import { Link } from 'react-router-dom';
import dummyImage from './dummy.jpg'; // Import a dummy image
import Layout from '../layout/layout';
function BlogList() {
  // Dummy blog data with thumbnail image
  const blogs = [
    {
      id: 1,
      title: "Sample Blog 1",
      summary: "This is a summary of Sample Blog 1.",
      thumbnail: dummyImage, // Insert dummy image
      content: "Content of Sample Blog 1 goes here."
    },
    {
      id: 2,
      title: "Sample Blog 2",
      summary: "This is a summary of Sample Blog 2.",
      thumbnail: dummyImage, // Insert dummy image
      content: "Content of Sample Blog 2 goes here."
    },
    {
      id: 3,
      title: "Sample Blog 3",
      summary: "This is a summary of Sample Blog 2.",
      thumbnail: dummyImage, // Insert dummy image
      content: "Content of Sample Blog 2 goes here."
    },
   
    // Add more dummy blog objects as needed
  ];

  return (
    <Layout>
    <div className="container mx-auto mt-5 grid grid-cols-3 gap-6"> {/* Added mt-5 for margin-top */}
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link to={`/blog/${blog.id}`}>
            <img src={blog.thumbnail} alt={blog.title} className="w-full h-48 object-cover object-center hover:opacity-80 transition-opacity duration-300" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.summary}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </Layout>
    
  );
}

export default BlogList;
