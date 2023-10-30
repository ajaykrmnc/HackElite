import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [city, setCity] = useState('Washington');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather = (city) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your own API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process the data as per your requirements
        return data;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    getWeather(city);
  }, [city]);

  return (
    <div className="background">
      <div className="container">
        <svg id="back">
          {/* Add SVG content here */}
        </svg>
        <nav>
          <div>
            <input
              type="text"
              value={city}
              className="custom-input"
              onChange={handleCityChange}
            />
            <button className="custom-button" onClick={() => getWeather(city)}>
              Get weather
            </button>
          </div>
        </nav>
        <div id="card" className="weather">
          <svg id="inner">
            {/* Add SVG content here */}
          </svg>
          <div className="details">
            <div className="temp" id="temp"></div>
            <div className="right">
              <div id="city"></div>
              <div id="summary"></div>
            </div>
          </div>
        </div>
        <svg id="outer"></svg>
      </div>
    </div>
  );
};

export default WeatherApp;
