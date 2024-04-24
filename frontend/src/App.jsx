import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CropSuggestion from './Components/CropSuggestion';
import ShopPage from './Components/Shop';
import Blog from './Components/BlogPage/BlogPage'
import BlogPage from './Components/BlogPage/BlogPage';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/crop-suggestion" element={<CropSuggestion />} />
                <Route path="/shop" element={<ShopPage />} /> 
                <Route path="/Blog" element={<BlogPage />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;
