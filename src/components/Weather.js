import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [apiKey] = useState('4e6e2622c185b1a30d5a30235f61e80b'); // Replace with your API key

  useEffect(() => {
    if (city) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [city, apiKey]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
