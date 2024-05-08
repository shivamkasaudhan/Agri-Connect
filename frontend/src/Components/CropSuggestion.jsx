import React, { useState, useEffect } from 'react';
import Layout from './layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const API_KEY = "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";

function CropSuggestion() {
  // State variables
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("English");
  const [cropSuggestions, setCropSuggestions] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Translations object
  const translations = {
    English: {
      inputText: "Input Text",
      inputTextPlaceholder: "Enter your text here...",
      selectLanguage: "Select Language",
      submit: "Submit",
      voiceInput: "Voice Input",
      readAloud: "Read Aloud",
      resultTitle: "Your Result"
    },
    Hindi: {
      inputText: "इनपुट पाठ",
      inputTextPlaceholder: "अपना पाठ यहाँ दर्ज करें...",
      selectLanguage: "भाषा चुनें",
      submit: "प्रस्तुत",
      voiceInput: "आवाज़ इनपुट",
      readAloud: "उच्च स्वर में पढ़ें",
      resultTitle: "आपका परिणाम"
    },
    Tamil: {
      inputText: "உள்ளீடு உரை",
      inputTextPlaceholder: "உங்கள் உரையை இங்கே உள்ளிடவும்...",
      selectLanguage: "மொழி தேர்வு செய்க",
      submit: "சமர்ப்பிக்க",
      voiceInput: "ஆவணச் செய்திஉள்ளீடு",
      readAloud: "உச்ச ஒலியாகவும் படிக்கவும்",
      resultTitle: "உங்கள் முடிவு"
    },
    Telugu: {
      inputText: "ఇన్‌పుట్ టెక్స్ట్",
      inputTextPlaceholder: "మీ వచనాన్ని ఇక్కడ నమోదు చేయండి...",
      selectLanguage: "భాషను ఎంచుకోండి",
      submit: "సమర్పించు",
      voiceInput: "ధ్వని ఇన్‌పుట్",
      readAloud: "మించిపోయిన ధ్వనిలో చదవండి",
      resultTitle: "మీ ఫలితం"
    },
    Bengali: {
      inputText: "ইনপুট টেক্সট",
      inputTextPlaceholder: "আপনার টেক্সট এখানে লিখুন...",
      selectLanguage: "ভাষা নির্বাচন করুন",
      submit: "জমা দিন",
      voiceInput: "ভয়স ইনপুট",
      readAloud: "উচ্চ ধ্বনিতে পড়ুন",
      resultTitle: "আপনার ফলাফল"
    },
    Marathi: {
      inputText: "इनपुट टेक्स्ट",
      inputTextPlaceholder: "आपले टेक्स्ट इथे नोंदवा...",
      selectLanguage: "भाषा निवडा",
      submit: "सबमिट करा",
      voiceInput: "आवाज इनपुट",
      readAloud: "उच्च स्वरात वाचा",
      resultTitle: "आपले परिणाम"
    },
    Gujarati: {
      inputText: "ઇનપુટ ટેક્સ્ટ",
      inputTextPlaceholder: "તમારો ટેક્સ્ટ અહીં નાખો...",
      selectLanguage: "ભાષા પસંદ કરો",
      submit: "સબમિટ કરો",
      voiceInput: "આવાજ ઇનપુટ",
      readAloud: "ઊચો આવાજમાં વાંચો",
      resultTitle: "તમારો પરિણામ"
    },
    Kannada: {
      inputText: "ಇನ್‌ಪುಟ್ ಟೆಕ್ಸ್ಟ್",
      inputTextPlaceholder: "ನಿಮ್ಮ ಪಠ್ಯವನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ...",
      selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
      submit: "ಸಲ್ಲಿಸಿ",
      voiceInput: "ಧ್ವನಿ ಇನ್‌ಪುಟ್",
      readAloud: "ಹೆಚ್ಚಿನ ಧ್ವನಿಯಲ್ಲಿ ಓದಿ",
      resultTitle: "ನಿಮ್ಮ ಫಲಿತಾಂಶ"
    },
    Oriya: {
      inputText: "ଇନ୍‌ପୁଟ୍ ଟେକ୍ସଟ୍",
      inputTextPlaceholder: "ଆପଣଙ୍କ ଲେଖା ଏଠାରେ ଲେଖନ୍ତୁ...",
      selectLanguage: "ଭାଷା ଚୟନ କରନ୍ତୁ",
      submit: "ଜମା ଦିନ",
      voiceInput: "ସ୍ବର ଇନପୁଟ୍",
      readAloud: "ଉଚ୍ଚ ଆବାଜରେ ପଢ଼ନ୍ତୁ",
      resultTitle: "ଆପଣଙ୍କ ଫଳାଫଳ"
    },
    Punjabi: {
      inputText: "ਇਨਪੁਟ ਟੈਕਸਟ",
      inputTextPlaceholder: "ਆਪਣਾ ਟੈਕਸਟ ਇੱਥੇ ਦਾਖਲ ਕਰੋ...",
      selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
      submit: "ਸਬਮਿਟ ਕਰੋ",
      voiceInput: "ਆਵਾਜ਼ ਇਨਪੁੱਟ",
      readAloud: "ਉੱਚੀ ਆਵਾਜ਼ ਵਿਚ ਪੜ੍ਹੋ",
      resultTitle: "ਤੁਹਾਡਾ ਨਤੀਜਾ"
    }
  };


  // Function to handle API call
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
      // "max_tokens": 64,
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

  // useEffect hook to reset speaking state after speech ends
  useEffect(() => {
    // Reset speaking state after speech ends
    window.speechSynthesis.onend = () => {
      setIsSpeaking(false);
    };
  }, []);
  // Inside the CropSuggestion component
function getLanguageCode(language) {
  switch (language) {
    case 'English':
      return 'en-US';
    case 'Hindi':
      return 'hi-IN';
    case 'Tamil':
      return 'ta-IN';
    case 'Telugu':
      return 'te-IN';
    case 'Bengali':
      return 'bn-IN';
    case 'Marathi':
      return 'mr-IN';
    case 'Gujarati':
      return 'gu-IN';
    case 'Kannada':
      return 'kn-IN';
    case 'Oriya':
      return 'or-IN';
    case 'Punjabi':
      return 'pa-IN';
    // Add cases for other languages
    default:
      return 'en-US'; // Default language code
  }
}


  // Function to handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-brandWhite">
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="inputText" className="block text-sm font-medium text-gray-700">
              {translations[language].inputText}:
            </label>
            <textarea
              id="inputText"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={4}
              placeholder={translations[language].inputTextPlaceholder}
              className="mt-2 mb-2 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-brandYellow focus:border-brandYellow sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
              {translations[language].selectLanguage}:
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="mt-2 mb-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brandYellow focus:border-brandYellow sm:text-sm"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">தமிழ்</option>
              <option value="Telugu">తెలుగు</option>
              <option value="Bengali">বাংলা</option>
              <option value="Marathi">मराठी</option>
              <option value="Gujarati">ગુજરાતી</option>
              <option value="Kannada">ಕನ್ನಡ</option>
              <option value="Oriya">ଓଡ଼ିଆ</option>
              <option value="Punjabi">ਪੰਜਾਬੀ</option>

              {/* Add more language options */}
            </select>
          </div>
          <button onClick={apiCall} className="bg-brandYellow py-2 px-4  mb-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black">
            {translations[language].submit}
          </button>
          <button onClick={handleVoiceInput} className="bg-brandYellow py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black ml-4">
            <FontAwesomeIcon icon={faMicrophone} className="mr-2" />
            {translations[language].voiceInput}
          </button>
          <button onClick={handleReadAloud} className="bg-brandYellow py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-brandYellow focus:ring-offset-2 focus:ring-offset-gray-100 text-black ml-4">
            <FontAwesomeIcon icon={faVolumeUp} className="mr-2" />
            {translations[language].readAloud}
          </button>
          {cropSuggestions.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">{translations[language].resultTitle}:</h3>
              <ul>
                {cropSuggestions.map((crop, index) => (
                  <li key={index} className="text-gray-800">{crop}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CropSuggestion;
