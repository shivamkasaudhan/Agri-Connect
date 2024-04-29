import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CropSuggestion from './Components/CropSuggestion';
import ShopPage from './Components/Shop';
import BlogList from './Components/BlogList/BlogList';
import BlogPost from './Components/BlogPost/BlogPost'; // Import the component to display full blog post content
import About from './Components/About';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/crop-suggestion" element={<CropSuggestion />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<ShopPage />} /> 
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </Router>
    );
};

export default App;
