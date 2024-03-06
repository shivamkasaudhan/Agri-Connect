import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CropSuggestion from './Components/CropSuggestion';
import ShopPage from './Components/Shop';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/crop-suggestion" element={<CropSuggestion />} />
                <Route path="/shop" element={<ShopPage />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;
