import React from 'react';

const CropSuggestion = () => {
    return (
        <div className="bg-brandWhite min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-center text-brandBlue">Crop Suggestion Page</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2 text-gray-700" htmlFor="soilType">Soil Type</label>
                        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brandBlue" type="text" id="soilType" name="soilType" placeholder="Enter soil type..." />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700" htmlFor="weather">Weather</label>
                        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brandBlue" type="text" id="weather" name="weather" placeholder="Enter weather..." />
                    </div>
                    <button className="w-full bg-brandBlue text-white py-2 rounded-md hover:bg-blue-700 transition duration-300" type="submit">Get Crop Suggestions</button>
                </form>
            </div>
        </div>
    );
};

export default CropSuggestion;
