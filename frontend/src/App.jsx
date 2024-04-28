import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CropSuggestion from './Components/CropSuggestion';
import ShopPage from './Components/Shop';
import BlogPage from './Components/BlogPage/BlogPage';
import Blogs from './Components/BlogPage/Blogs'; // Import Blogs component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/crop-suggestion" element={<CropSuggestion />} />
                <Route path="/shop" element={<ShopPage />} /> 
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<Blogs />} /> {/* Route for detailed blog page */}
            </Routes>
        </Router>
    );
};

export default App;
