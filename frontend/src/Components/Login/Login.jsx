import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [loginData, setLoginData] = useState({
    phoneNo: '',
    password: ''
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/login', loginData);
      const { success, message } = res.data;
      if (success) {
        console.log('login Successfully');
        navigate('/'); // Use navigate to redirect to '/BlogList'
      } else {
        console.log(message);
      }
    } catch (e) {
      console.log('Login Error', e);
    }
    // Clear the form after submission
    setLoginData({
      phoneNo: '',
      password: ''
    });
  };

  const handleLoginChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Login page */}
      <h1>Login page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="phoneNo"
          placeholder="Phone Number"
          value={loginData.phoneNo}
          onChange={handleLoginChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          New User?{' '}
          <Link to="/SignUp">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
