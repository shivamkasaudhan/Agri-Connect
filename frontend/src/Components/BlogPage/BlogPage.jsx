import React from 'react';
import { Link } from 'react-router-dom';
import dummyImage from './dummy.jpg'; // Import a dummy image

function BlogPage() {
  // Dummy blog data with thumbnail image
  const blogs = [
    {
      title: "Sample Blog 1",
      summary: "This is a summary of Sample Blog 1.",
      thumbnail: dummyImage, // Insert dummy image
      content: "Content of Sample Blog 1 goes here."
    },
    {
      title: "Sample Blog 2",
      summary: "This is a summary of Sample Blog 2.",
      thumbnail: dummyImage, // Insert dummy image
      content: "Content of Sample Blog 2 goes here."
    },
    // Add more dummy blog objects as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/blog/${index}`}> {/* Add the index to the URL */}
              <img src={blog.thumbnail} alt={blog.title} className="mb-2 w-full h-auto rounded-md" />
              <h2 className="text-xl font-bold mb-2 text-primary">{blog.title}</h2>
              <p>{blog.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
