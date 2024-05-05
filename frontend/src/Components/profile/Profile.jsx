import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userImage from './user.png'; // Import the user image
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Retrieve phone number from local storage
    const storedPhoneNo = localStorage.getItem('phoneNo');

    // Fetch user profile based on phone number
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/profile/${storedPhoneNo}`);
        const userData = response.data;
        // Set user data
        setUser(userData);
        // Fetch user's products
        const productResponse = await axios.get(`http://localhost:8000/profile/${storedPhoneNo}/products`);
        const userProducts = productResponse.data;
        setProducts(userProducts);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (storedPhoneNo) {
      fetchUserProfile();
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* User Image */}
      <img src={user ? userImage : userImage} alt="User" style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }} />
      {user && user.firstName && user.lastName && (
        <>
          {/* Welcome message */}
          <h1>Welcome, {user.firstName} {user.lastName}!</h1>
          <Link to="/addProduct">
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>Add Product</button>
          </Link>
          <h2>Product List:</h2>
          <table style={{ borderCollapse: 'collapse', width: '80%', textAlign: 'center', marginBottom: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}><img src={product.image} alt={product.title} style={{ width: '100px' }} /></td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.price}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Profile;
