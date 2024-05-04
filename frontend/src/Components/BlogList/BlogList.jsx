import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:8000/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      } else {
        console.error('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <Layout>
      <div className="relative mb-4 m-4">
        <div className="container mx-auto grid grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/blog/${blog._id}`}>
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover object-center hover:opacity-80 transition-opacity duration-300" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600">{blog.summary}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 m-5">
          <Link to="/addblog" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">Add Blog</Link>
        </div>
      </div>
    </Layout>
  );
}

export default BlogList;
