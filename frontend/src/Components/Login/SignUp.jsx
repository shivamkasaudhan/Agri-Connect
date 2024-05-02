import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/signup', registerData)
      .then(result=>{
        navigate('/login')
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    setRegisterData({
      firstName: '',
      lastName: '',
      phoneNo: '',
      password: ''
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brandWhite">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Sign Up page */}
        <h1 className="text-3xl font-bold mb-6 text-brandYellow">Registration Form</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={registerData.firstName}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={registerData.lastName}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='phoneNo'
            placeholder='Phone Number'
            value={registerData.phoneNo}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={registerData.password}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <button type='submit' className="block w-full p-3 bg-brandYellow text-white rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">Register</button>
        </form>
        <p className="mt-4 text-gray-700 text-center">
          Already registered? <Link to="/login" className="text-brandYellow hover:text-yellow-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
