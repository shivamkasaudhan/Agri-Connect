import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CropSuggestion from './Components/CropSuggestion';
import BlogList from './Components/BlogList/BlogList';
import BlogPost from './Components/BlogPost/BlogPost';
import About from './Components/About';
import SignUp from './Components/Login/SignUp';
import Login from './Components/Login/Login'; 
import Profile from './Components/profile/Profile';
import Footer from './Components/footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            {window.location.pathname !== '/signUp' && window.location.pathname !== '/login' && <Navbar />}
                {/* <Footer/> */}
            <Routes>
                <Route path="/Login" element={<Login />} /> {/* Route for detailed blog page */}
                <Route path="/crop-suggestion" element={<CropSuggestion />} />
                <Route path="/about" element={<About />} />
                <Route path="/SignUp" element={<SignUp />} /> {/* Route for detailed blog page */}
                <Route path="/BlogList" element={<BlogList />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/BlogPost/:id" element={<BlogPost />} /> {/* Route for detailed blog page */}

            </Routes>
        </BrowserRouter>
    );
};

export default App;
