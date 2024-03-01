import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CropSuggestion from './Components/CropSuggestion';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/crop-suggestion" element={<CropSuggestion/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
