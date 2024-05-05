import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Login/SignUp';
import Login from './Components/Login/Login';
import Home from './Components/home/home';
import Profile from './Components/profile/Profile';
import BlogList from './Components/BlogList/BlogList'
import CropSuggestion from './Components/CropSuggestion';
import About from './Components/About/About'
import AddProduct from './Components/addProduct/AddProduct';
// import BlogPost from './Components/BlogPost/BlogPost'; // Import the BlogPost component
import AddBlog from './Components/add blog/AddBlog';
import HindiBlogPost from './Components/BlogPost/HindiBlogPost';
import EnglishBlogPost from './Components/BlogPost/EnglishBlogPost';
import MarathiBlogPost from './Components/BlogPost/MarathiBlogpost';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bloglist" element={<BlogList />} />
                <Route path="/farmguide" element={<CropSuggestion />} />
                <Route path="/about" element={<About />} />
                <Route path="/addblog" element={<AddBlog />} />
                <Route path="/addProduct" element={<AddProduct />} />
                {/* Add the Route for BlogPost with the parameter ':id' */}
                {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
                <Route path="/blog/:id/en" element={<EnglishBlogPost />} />
                <Route path="/blog/:id/hi" element={<HindiBlogPost />} />
                <Route path="/blog/:id/mr" element={<MarathiBlogPost />} />
                <Route path="/profile/:id" element={<Profile />} />

            </Routes>
        </Router>
    );
};

export default App;
