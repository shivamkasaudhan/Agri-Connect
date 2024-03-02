const express = require("express");
const OpenAI = require("openai").default; // Updated for current version
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // Using environment variable for API key
});

app.get('/getResponse', async (req, res) => {
    try {
        const { soilType, weather } = req.query;

        if (!soilType || !weather) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        const message = [
            { "role": "user", "content": `I have ${soilType} soil and it's ${weather} now. Can you suggest crops suitable for this condition?` }
        ];

        const response = await openai.chat.completion.create({ 
            model: 'text-davinci-003', // Updated model name
            messages: message,
            max_tokens: 150 // Increased max_tokens for potentially longer responses
        });

        const cropSuggestions = response.data.choices[0].message.content;
        res.json({ cropSuggestions }); 
    } catch (error) {
        console.error('Error fetching crop suggestions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
