import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CropSuggestion = () => {
  const [selectedSoilType, setSelectedSoilType] = useState('');
  const [selectedWeather, setSelectedWeather] = useState('');
  const [cropSuggestions, setCropSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const soilTypes = [
    'Alluvial', 'Red Soil', 'Black Soil', 'Regur Soil', 'Sandy',
    'Laterite Soil', 'Saline soil', 'Peaty', 'Swampy', 'Forest Soil',
    'Sub-mountain Soil', 'Snowfields'
  ];
  const weatherConditions = [
    'Spring Season', 'Summer Season', 'Monsoon Season', 'Autumn Season',
    'Pre-Winter Season', 'Winter Season'
  ];

  const handleSoilTypeChange = (event) => {
    setSelectedSoilType(event.target.value);
  };

  const handleWeatherChange = (event) => {
    setSelectedWeather(event.target.value);
  };

  useEffect(() => {
    if (selectedSoilType && selectedWeather) {
      fetchData();
    }
  }, [selectedSoilType, selectedWeather]);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/getResponse', {
        params: {
          soilType: selectedSoilType,
          weather: selectedWeather
        }
      });
      setCropSuggestions(response.data.cropSuggestions);
    } catch (error) {
      console.error('Error fetching crop suggestions:', error);
      setError('Error fetching crop suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brandWhite min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-secondary">Get Crop Suggestion</h1>
        <form className="space-y-4">
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
        </form>
        {loading && <p className="text-gray-600 text-center">Loading...</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
        {cropSuggestions.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Crop Suggestions:</h2>
            <ul>
              {cropSuggestions.map((crop, index) => (
                <li key={index}>{crop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropSuggestion;
