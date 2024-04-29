import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CropSuggestion from './Components/CropSuggestion';
import ShopPage from './Components/Shop';
import BlogPage from './Components/BlogPage/BlogPage';
import Blogs from './Components/BlogPage/Blogs'; // Import Blogs component
import About from './Components/About';
import SignUp from './Components/Login/SignUp';
import Login from './Components/Login/Login'; // Import Login component

const App = () => {
    return (
        <Router>
            {/* Render the Navbar only if the route is not /signUp or /login */}
            {window.location.pathname !== '/signUp' && window.location.pathname !== '/login' && <Navbar />}
            <Routes>
                <Route path="/crop-suggestion" element={<CropSuggestion />} />
                <Route path="/About" element={<About />} />
                <Route path="/shop" element={<ShopPage />} /> 
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<Blogs />} /> {/* Route for detailed blog page */}
                <Route path="/signUp" element={<SignUp />} /> 
                <Route path="/login" element={<Login />} /> 
            </Routes>
        </Router>
    );
};

export default App;
