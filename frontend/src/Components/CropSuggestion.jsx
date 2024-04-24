import React, { useState } from 'react';

const API_KEY = "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";

function CropSuggestion() {
  const [soilType, setSoilType] = useState("");
  const [weather, setWeather] = useState("");
  const [language, setLanguage] = useState("English");
  const [cropSuggestions, setCropSuggestions] = useState([]);

  async function apiCall() {
    console.log("Calling Api");
    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": `suggest crop for ${soilType} soiltype and ${weather} weather in ${language}`
        }
      ],
      "temperature": 0.7,
      "max_tokens": 64,
      "top_p": 1
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
      });
      const data = await response.json();
      console.log(data);
      setCropSuggestions(data.choices[0].message.content.split(","));
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  }

  const soilTypes = [
    'Alluvial', 'Red Soil', 'Black Soil', 'Regur Soil', 'Sandy',
    'Laterite Soil', 'Saline soil', 'Peaty', 'Swampy', 'Forest Soil',
    'Sub-mountain Soil', 'Snowfields'
  ];
  const weatherConditions = [
    'Spring Season', 'Summer Season', 'Monsoon Season', 'Autumn Season',
    'Pre-Winter Season', 'Winter Season'
  ];
  const languages = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'বাংলা', 'मराठी', 'ગુજરાતી', 'ಕನ್ನಡ', 'ଓଡ଼ିଆ', 'ਪੰਜਾਬੀ'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-brandWhite">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="soilType" className="block text-sm font-medium text-gray-700">Select Soil Type:</label>
          <select
            id="soilType"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            className="mt-2 mb-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brandYellow focus:border-brandYellow sm:text-sm"
          >
            <option value="">Select Soil Type</option>
            {soilTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="weather" className="block text-sm font-medium text-gray-900">Select Weather:</label>
          <select
            id="weather"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="mt-2 mb-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brandYellow focus:border-brandYellow sm:text-sm"
          >
            <option value="">Select Weather</option>
            {weatherConditions.map((condition, index) => (
              <option key={index} value={condition}>{condition}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Select Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-2 mb-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brandYellow focus:border-brandYellow sm:text-sm"
          >
            {languages.map((lang, index) => (
              <option key={index} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        <button onClick={apiCall} className="bg-brandYellow py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black">Submit</button>
        {cropSuggestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Crop Suggestions:</h3>
            <ul>
              {cropSuggestions.map((crop, index) => (
                <li key={index} className="text-gray-800">{crop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CropSuggestion;
