import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Define translations for different languages
  const translations = {
    en: {
      searchPlaceholder: 'Search blogs...',
      addBlog: 'Add Blog',
    },
    hi: {
      searchPlaceholder: 'ब्लॉग खोजें...',
      addBlog: 'ब्लॉग जोड़ें',
    },
    mr: {
      searchPlaceholder: 'ब्लॉग शोधा...',
      addBlog: 'ब्लॉग जोडा',
    },
    // Add translations for other languages as needed
  };

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

  // Search function to filter blogs based on search query
  const searchBlogs = () => {
    return blogs.filter(blog => {
      const title = blog.title[selectedLanguage];
      return title && title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };
  

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Layout>
      <div className="relative mb-4 m-4">
        {/* Search input */}
        <input
          type="text"
          placeholder={translations[selectedLanguage].searchPlaceholder}
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-black rounded-md p-2 mb-4 w-80 mr-4"
        />

        {/* Language dropdown */}
        <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)} className="border border-black rounded-md p-2 mb-4">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">मराठी</option>
          {/* Add options for other languages */}
        </select>

        <div className="container mx-auto grid grid-cols-3 gap-6">
          {/* Render filtered blogs */}
          {searchBlogs().map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/blog/${blog._id}/${selectedLanguage}`}>
                <img src={blog.image} alt={blog.title[selectedLanguage]} className="w-full h-48 object-cover object-center hover:opacity-80 transition-opacity duration-300" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title[selectedLanguage]}</h2>
                  <p className="text-gray-600">{blog.summary[selectedLanguage]}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 m-5">
          <Link to="/addblog" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">{translations[selectedLanguage].addBlog}</Link>
        </div>
      </div>
    </Layout>
  );
}

export default BlogList;
