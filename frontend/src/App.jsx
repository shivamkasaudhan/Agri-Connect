import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './Components/Login/SignUp';
import Login from './Components/Login/Login';
import Home from './Components/home/home';
import Profile from './Components/profile/Profile';
import BlogList from './Components/BlogList/BlogList'
import CropSuggestion from './Components/CropSuggestion';
import About from './Components/About'

const App = () => {
    

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Login />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bloglist" element={<BlogList />} />
                <Route path="/farmguide" element={<CropSuggestion />} />
                <Route path="/about" element={<About />} />


            </Routes>
        </Router>
    );
};

export default App;
