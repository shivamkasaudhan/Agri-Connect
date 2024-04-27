import React, { useState, useEffect } from 'react';

const API_KEY = "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";

function CropSuggestion() {
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("English");
  const [cropSuggestions, setCropSuggestions] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  async function apiCall() {
    console.log("Calling Api");
    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": inputText + " in " + language
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

  // Function to handle voice input
  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition(); // Create a new SpeechRecognition object
    recognition.lang = getLanguageCode(language); // Set the recognition language based on language selection
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // Get the transcribed speech
      setInputText(transcript); // Set the input text state with the transcribed speech
    };
    recognition.start(); // Start recognition
  };

  // Function to get language code based on language selection
  const getLanguageCode = (language) => {
    switch (language) {
      case 'English':
        return 'en-US';
      case 'हिन्दी':
        return 'hi-IN';
      case 'தமிழ்':
        return 'ta-IN';
      case 'తెలుగు':
        return 'te-IN';
      case 'বাংলা':
        return 'bn-IN';
      case 'मराठी':
        return 'mr-IN';
      case 'ગુજરાતી':
        return 'gu-IN';
      case 'ಕನ್ನಡ':
        return 'kn-IN';
      case 'ଓଡ଼ିଆ':
        return 'or-IN';
      case 'ਪੰਜਾਬੀ':
        return 'pa-IN';
      default:
        return 'en-US';
    }
  };

  // Function to handle reading aloud
  const handleReadAloud = () => {
    if (!isSpeaking && cropSuggestions.length > 0) {
      const synthesis = window.speechSynthesis; // Get the SpeechSynthesis object
      synthesis.cancel(); // Reset SpeechSynthesis to stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(cropSuggestions.join(" ")); // Create a new utterance with the crop suggestions
      utterance.lang = getLanguageCode(language); // Set the language of the utterance
      synthesis.speak(utterance); // Speak the utterance
      setIsSpeaking(true); // Set speaking state
    }
  };

  useEffect(() => {
    // Reset speaking state after speech ends
    window.speechSynthesis.onend = () => {
      setIsSpeaking(false);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brandWhite">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="inputText" className="block text-sm font-medium text-gray-700">Input Text:</label>
          <textarea
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            className="mt-2 mb-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brandYellow focus:border-brandYellow sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Select Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-2 mb-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brandYellow focus:border-brandYellow sm:text-sm"
          >
            <option value="English">English</option>
            <option value="हिन्दी">हिन्दी</option>
            <option value="தமிழ்">தமிழ்</option>
            <option value="తెలుగు">తెలుగు</option>
            <option value="বাংলা">বাংলা</option>
            <option value="मराठी">मराठी</option>
            <option value="ગુજરાતી">ગુજરાતી</option>
            <option value="ಕನ್ನಡ">ಕನ್ನಡ</option>
            <option value="ଓଡ଼ିଆ">ଓଡ଼ିଆ</option>
            <option value="ਪੰਜਾਬੀ">ਪੰਜਾਬੀ</option>
          </select>
        </div>
        <button onClick={apiCall} className="bg-brandYellow py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black">Submit</button>
        <button onClick={handleVoiceInput} className="bg-brandYellow py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black ml-4">Voice Input</button>
        <button onClick={handleReadAloud} className="bg-brandYellow py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black ml-4">Read Aloud</button>
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
