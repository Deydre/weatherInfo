import React from "react";

const WeatherCard = (data) => {
  const {weather} = data;
  
  return (
    <article className="weather-card">
      <div>
        <h4>Fecha</h4>
        <p>{weather.dt_txt.slice(0,10)}</p>
      </div>
      <div>
        <p>{weather.weather[0].description}</p>
        {/* https://openweathermap.org/weather-conditions */}
        <p>{weather.weather[0].icon}</p>
      </div>
      <div>
        <h4>Humedad</h4>
        <p>{weather.main.humidity}</p>
      </div>
      <div>
        <h4>Temperatura</h4>
        <p>{(weather.main.temp - 273,15)}</p>
        <div>
          <h6>Mín</h6>
          <p>{weather.main.temp_min}</p>
          <h6>Máx</h6>
          <p>{weather.main.temp_max}</p>
        </div>
      </div>
    </article>
  );
};

export default WeatherCard;