import React from 'react';
import { useParams } from 'react-router-dom';

function Blogs({ blogs }) {
  const { id } = useParams(); // Get the id parameter from the URL
  const blog = blogs[parseInt(id)]; // Retrieve the blog based on the id

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2 text-primary">{blog.title}</h2>
        <img src={dummyImage} alt={blog.title} className="mb-2 w-full h-auto rounded-md" />
        <p>{blog.content}</p>
      </div>
    </div>
  );
}

export default Blogs;
