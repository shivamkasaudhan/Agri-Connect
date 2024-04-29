import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    phoneNo: '',
    gender: '',
    farmingKnowledge: '',
    organicFarming: false,
    farmerCardNo: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    state: '',
    preferredLanguage: '',
    qualificationLevel: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/signup', registerData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    setRegisterData({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      dob: '',
      phoneNo: '',
      gender: '',
      farmingKnowledge: '',
      organicFarming: false,
      farmerCardNo: '',
      addressLine1: '',
      addressLine2: '',
      pinCode: '',
      state: '',
      preferredLanguage: '',
      qualificationLevel: ''
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brandWhite">
      <div className="max-w-md w-full p-6 bg-brandBlue rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-brandYellow">Registration Form</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={registerData.username}
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
            name='dob'
            placeholder='Date of Birth (YYYY-MM-DD)'
            value={registerData.dob}
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
            type='text'
            name='gender'
            placeholder='Gender'
            value={registerData.gender}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='farmingKnowledge'
            placeholder='Farming Knowledge'
            value={registerData.farmingKnowledge}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <div className="flex items-center">
            <input
              type='checkbox'
              name='organicFarming'
              checked={registerData.organicFarming}
              onChange={handleRegisterChange}
              className="mr-2"
            />
            <label className="text-gray-700">Organic Farming</label>
          </div>
          <input
            type='text'
            name='farmerCardNo'
            placeholder='Farmer Card Number'
            value={registerData.farmerCardNo}
            onChange={handleRegisterChange}
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='addressLine1'
            placeholder='Address Line 1'
            value={registerData.addressLine1}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='addressLine2'
            placeholder='Address Line 2'
            value={registerData.addressLine2}
            onChange={handleRegisterChange}
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='pinCode'
            placeholder='Pin Code'
            value={registerData.pinCode}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='state'
            placeholder='State'
            value={registerData.state}
            onChange={handleRegisterChange}
            required
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='preferredLanguage'
            placeholder='Preferred Language'
            value={registerData.preferredLanguage}
            onChange={handleRegisterChange}
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <input
            type='text'
            name='qualificationLevel'
            placeholder='Qualification Level'
            value={registerData.qualificationLevel}
            onChange={handleRegisterChange}
            className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brandBlue"
          />
          <button type='submit' className="block w-full p-3 bg-brandYellow text-white rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">Register</button>
        </form>
        <p className="mt-4 text-gray-700">
          Already registered? <Link to="/login" className="text-brandYellow hover:text-yellow-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
