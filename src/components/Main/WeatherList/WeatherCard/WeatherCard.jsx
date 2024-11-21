import React from "react";

const WeatherCard = (data) => {
  const { weather } = data;

  return (
    <article className="weather-card">
      <div>
        <h3>{weather.dt_txt.slice(0, 10)}</h3>
      </div>
      <div>
        {/* https://openweathermap.org/weather-conditions */}
        <p>{weather.weather[0].icon}</p>
        <div id="weather">
          <p>{weather.weather[0].description}</p>
        </div>
      </div>
      <div className="moreInfo">
        <section>
          <article>
            <h4>Temperatura</h4>
            <p>{(weather.main.temp - 273, 15)}º</p>
          </article>
        </section>
        <section>
          <article>
            <h5>Mín</h5>
            <p>{weather.main.temp_min}º</p>
          </article>
          <article>
            <h5>Máx</h5>
            <p>{weather.main.temp_max}º</p>
          </article>
        </section>
      </div>
    </article>
  );
};

export default WeatherCard;