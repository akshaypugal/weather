const express = require('express');
const axios = require('axios'); // Make sure to install axios using npm install axios

const app = express();
const port = 5000;

// OpenWeatherMap API key (replace with your own key)
const apiKey = '5b292fada0b6f29dfdedfaa587d2a13e';

// Endpoint to get weather information
app.get('/api/weather', async (req, res) => {
  try {
    // Example: Get weather data for a specific city (Paris in this case)
    const city = 'Paris';
    const weatherResponse = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const weatherData = weatherResponse.data;
    res.json({ weather: weatherData });
  } catch (error) {
    console.error('Error fetching weather data', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
