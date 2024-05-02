import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    phoneNo: '',
    password: ''
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/login', loginData)
      .then(result=>{
        navigate('/');
      });
      const { success, message } = res.data;
      if (success) {
        console.log('Login Successfully');
        toast.success('Login Successfully');
      } else {
        toast.error(message);
        console.log(message);
      }
    } catch (error) {
      toast.error('Login Error');
      console.error('Login Error:', error);
    }
    setLoginData({
      phoneNo: '',
      password: ''
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brandBlue">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login page</h1>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="phoneNo"
            placeholder="Phone Number"
            value={loginData.phoneNo}
            onChange={handleLoginChange}
            required
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          />
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg focus:outline-none hover:bg-opacity-80 transition duration-300">Login</button>
          <p className="text-center mt-4">
            New User?{' '}
            <Link to="/SignUp" className="text-brandYellow">Signup</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
