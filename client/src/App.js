import React, { useState, useEffect } from 'react';

const App = () => {
  const [weather, setWeather] = useState({}); // Use parentheses instead of square brackets
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/weather')
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.weather);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error in fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Weather Information</h2>
          <p>City: {weather.name}</p>
        </div>
      )}
    </div>
  );
};

export default App;
