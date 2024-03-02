import React, { useState } from 'react';

const CropSuggestion = () => {
    const [selectedSoilType, setSelectedSoilType] = useState('');
    const [selectedWeather, setSelectedWeather] = useState('');

    const soilTypes = ['Alluvial','Red Soil', 'Black Soil','Regur Soil','Sandy','Laterite Soil','Saline soil','Peaty','Swampy','Forest Soil','Sub-mountain Soil','Snowfields'];
    const weatherConditions = ['Spring Season','Summer Season','Monsoon Season','Autumn Season','Pre-Winter Season','Winter Season'];

    const handleSoilTypeChange = (event) => {
        setSelectedSoilType(event.target.value);
    };

    const handleWeatherChange = (event) => {
        setSelectedWeather(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform action based on selected soil type and weather
        console.log('Selected Soil Type:', selectedSoilType);
        console.log('Selected Weather:', selectedWeather);
    };

    return (
        <div className="bg-brandWhite min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-center text-secondary">Get Crop Suggestion</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-gray-400" htmlFor="soilType">Soil Type</label>
                        <select
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-secondary"
                            id="soilType"
                            name="soilType"
                            value={selectedSoilType}
                            onChange={handleSoilTypeChange}
                        >
                            <option value="">Select Soil Type</option>
                            {soilTypes.map((soilType, index) => (
                                <option key={index} value={soilType}>{soilType}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-400" htmlFor="weather">Weather</label>
                        <select
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-secondary"
                            id="weather"
                            name="weather"
                            value={selectedWeather}
                            onChange={handleWeatherChange}
                        >
                            <option value="">Select Weather</option>
                            {weatherConditions.map((weather, index) => (
                                <option key={index} value={weather}>{weather}</option>
                            ))}
                        </select>
                    </div>
                    <button className="w-full bg-gray-900 text-brandYellow py-2 rounded-md hover:bg-gray-600 transition duration-300" type="submit">Get</button>
                </form>
            </div>
        </div>
    );
};

export default CropSuggestion;
