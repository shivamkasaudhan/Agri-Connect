import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dummyImage from './dummy.jpg'; // Import a dummy image
import Layout from '../layout/layout';

function BlogPost() {
  const { id } = useParams(); // Get the blog post ID from URL parameters

  // Dummy blog data with full content
  const blogs = [
    {
      id: 1,
      title: "Sample Blog 1",
      thumbnail: dummyImage,
      content: "Content of Sample Blog 1 goes here. Organic farming is a method of agricultural production that relies on natural processes, biodiversity, and ecological balance. It emphasizes the use of organic inputs and techniques to maintain soil fertility, control pests and diseases, and promote the health and well-being of plants, animals, and humans. Key principles of organic farming include: Soil Health: Organic farming prioritizes building and maintaining soil health through practices such as crop rotation, composting, and the use of organic fertilizers. Biodiversity: Organic farmers aim to enhance biodiversity on their farms by preserving natural habitats, using diverse crop rotations, and avoiding the use of synthetic pesticides and genetically modified organisms (GMOs). Ecological Balance: Organic farming seeks to work in harmony with natural ecosystems, minimizing environmental impact and reducing pollution by using practices like integrated pest management (IPM) and water conservation. No Synthetic Inputs: Organic farming prohibits the use of synthetic fertilizers, pesticides, herbicides, and GMOs. Instead, it encourages natural and sustainable methods of pest and weed control. Animal Welfare: Organic standards include requirements for the humane treatment of animals, such as access to outdoor space, organic feed, and the absence of growth hormones and antibiotics. Organic farming has gained popularity worldwide due to growing consumer demand for food that is perceived as healthier, environmentally sustainable, and ethically produced. While organic farming practices can sometimes result in lower yields compared to conventional methods, proponents argue that the long-term benefits to soil health, biodiversity, and human health outweigh these drawbacks.",
      timestamp: "May 5, 2024" // Timestamp added
    },
    {
      id: 2,
      title: "Sample Blog 2",
      thumbnail: dummyImage,
      content: "Content of Sample Blog 2 goes here.",
      timestamp: "May 6, 2024" // Timestamp added
    },
    {
      id: 3,
      title: "Sample Blog 2",
      thumbnail: dummyImage,
      content: "Content of Sample Blog 2 goes here.",
      timestamp: "May 6, 2024" // Timestamp added
    },
    // Add more dummy blog objects as needed
  ];

  // State to store the content of the current blog post
  const [blogContent, setBlogContent] = useState("");
  // State to store the timestamp of the current blog post
  const [blogTimestamp, setBlogTimestamp] = useState("");
  // State to store the title of the current blog post
  const [blogTitle, setBlogTitle] = useState("");

  // State to store the image URL
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Find the blog post with the matching ID
    const blog = blogs.find(blog => blog.id === parseInt(id));
    if (blog) {
      setBlogContent(blog.content);
      setBlogTimestamp(blog.timestamp);
      setBlogTitle(blog.title);
      setImageURL(blog.thumbnail); // Set the image URL
      // Update the page title
      document.title = blog.title;
    }
  }, [id, blogs]);

  return (
    <Layout>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{blogTitle}</h1> {/* Display the title */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={imageURL} alt="Blog Thumbnail" className="w-full h-auto max-h-80 object-cover mb-4" /> {/* Display the image */}
        <h2 className="text-xl font-bold mb-2 text-primary">{blogTimestamp}</h2> {/* Display the timestamp */}
        <p>{blogContent}</p>
      </div>
    </div>
    </Layout>
    
  );
}

export default BlogPost;
