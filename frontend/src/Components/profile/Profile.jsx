import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userImage from './user.png'; // Import the user image
import dummyImage from './dummy.jpg'; // Import a dummy image


const Profile = () => {
  // State to hold user's name
  const [userName] = useState("User123");
  // Placeholder image for the user
  <img src={userImage} alt="User" className="h-10 w-10 rounded-full" />

  // Dummy list of items with images
  const items = [
    { id: 1, name: 'Item 1', image: dummyImage },
    { id: 2, name: 'Item 2', image: dummyImage },
    { id: 3, name: 'Item 3', image: dummyImage},
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* User Image */}
      <img src={userImage} alt="User" style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }} />
      <h1>Welcome, {userName}!</h1>
      <Link to="/addProduct">
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>Add Product</button>
      </Link>
      <h2>Product List:</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {items.map(item => (
          <div key={item.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '200px' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', marginBottom: '10px' }} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
