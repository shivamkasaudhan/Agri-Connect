import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/layout';

function MarathiBlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8000/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          console.error('Failed to fetch blog post');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString();
  const formattedTime = new Date(blog.date).toLocaleTimeString();

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{blog.title.mr}</h1>
        <h2 className="text-xl font-bold mb-2 text-primary">{formattedDate} {formattedTime}</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={blog.image} alt="Blog Thumbnail" className="w-full h-auto max-h-80 object-cover mb-4" />
          <p>{blog.content.mr}</p>
        </div>
      </div>
    </Layout>
  );
}

export default MarathiBlogPost;
