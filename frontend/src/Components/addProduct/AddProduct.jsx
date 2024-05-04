import React, { useState } from 'react';
import userImage from './user.png'; // Import the user image

const AddProduct = () => {
  // State to hold user's name
  const [userName] = useState("User123");
  // State to hold product data
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: null
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to server, update state, etc.)
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', textAlign: 'left', maxWidth: '500px', margin: 'auto' }}>
        <img src={userImage} alt="User" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', display: 'block', margin: '0 auto' }} />
        <h1  style={{margin:'20px',textAlign:'center'}}>Welcome, {userName}!</h1>
        <h2 style={{margin:'20px',textAlign:'center'}}>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={product.title} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={product.description} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" value={product.price} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} style={{ marginLeft: '10px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
