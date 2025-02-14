// src/components/Weather.jsx
import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Replace with your actual WeatherAPI.com key
  const API_KEY = "443a0926ecba4057a59193755251402";
  const location = "Tel Aviv";
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
    location
  )}&aqi=no`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("WeatherAPI.com data:", data);
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div>Loading weather...</div>;
  if (!weather) return <div>Failed to load weather data.</div>;

  return (
    <div
      style={{ padding: "10px", backgroundColor: "#eee", textAlign: "center" }}
    >
      <p>
        {weather.location.name}: {weather.current.condition.text} –{" "}
        {weather.current.temp_c}°C
      </p>
    </div>
  );
};

export default Weather;
