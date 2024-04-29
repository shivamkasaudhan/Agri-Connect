import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Get the blog post ID from URL parameters

  // Dummy blog data with full content
  const blogs = [
    {
      id: 1,
      title: "Sample Blog 1",
      content: "Content of Sample Blog 1 goes here."
    },
    {
      id: 2,
      title: "Sample Blog 2",
      content: "Content of Sample Blog 2 goes here."
    },
    // Add more dummy blog objects as needed
  ];

  // State to store the content of the current blog post
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    // Find the blog post with the matching ID
    const blog = blogs.find(blog => blog.id === parseInt(id));
    if (blog) {
      setBlogContent(blog.content);
    }
  }, [id, blogs]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2 text-primary">{blogContent.title}</h2>
        <p>{blogContent}</p>
      </div>
    </div>
  );
}

export default BlogPost;
