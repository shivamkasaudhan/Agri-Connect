// BlogList/BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import dummyImage from './dummy.jpg'; // Import a dummy image

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
    // Add more dummy blog objects as needed
  ];

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <img src={blog.thumbnail} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
