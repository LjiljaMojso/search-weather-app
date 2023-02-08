import React from "react";

import Spiner from "./Spiner";

const Card = ({ loadingData, weather, showData, forecast }) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;
  var url = "";
  var iconUrl = "";
  var iconUrl1 = "";
  var iconUrl2 = "";
  var iconUrl3 = "";

  var forecastDate1 = "";
  var forecastDate2 = "";
  var forecastDate3 = "";
  if (loadingData) {
    return <Spiner />;
  }
  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
    iconUrl1 = url + forecast.list[6].weather[0].icon + ".png";
    iconUrl2 = url + forecast.list[14].weather[0].icon + ".png";
    iconUrl3 = url + forecast.list[22].weather[0].icon + ".png";

    forecastDate1 =
      forecast.list[6].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[6].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[6].dt_txt.substring(0, 4);
    forecastDate2 =
      forecast.list[14].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[14].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[14].dt_txt.substring(0, 4);
    forecastDate3 =
      forecast.list[22].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[22].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[22].dt_txt.substring(0, 4);
  }

  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{weather.name}</p>
          {showData === true ? <span>{date}</span> : null}
        </div>
        <div className="temp">
          {weather.main ? <h1>{weather.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div>
          {weather.weather ? (
            <p className="description">
              <img src={iconUrl} alt="icon" />
              {weather.weather[0].description}
            </p>
          ) : null}
        </div>
      </div>

      {weather.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {weather.main ? (
              <p className="bold">{weather.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {weather.main ? (
              <p className="bold">{weather.main.humidity}%</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {weather.wind ? (
              <p className="bold">{weather.wind.speed.toFixed()} M/S</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
      {weather.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            <p className="date">{forecastDate1}</p>
            <p className="bold">{forecast.list[6].main.temp.toFixed()}°C</p>
            <p>
              <img src={iconUrl1} alt="icon" />
            </p>
            <p>{forecast.list[6].weather[0].description}</p>
          </div>
          <div className="feels">
            <p className="date">{forecastDate2}</p>
            <p className="bold">{forecast.list[14].main.temp.toFixed()}°C</p>
            <p>
              <img src={iconUrl2} alt="icon" />
            </p>
            <p>{forecast.list[14].weather[0].description}</p>
          </div>
          <div className="feels">
            <p className="date">{forecastDate3}</p>
            <p className="bold">{forecast.list[22].main.temp.toFixed()}°C</p>
            <p>
              <img src={iconUrl3} alt="icon" />
            </p>
            <p>{forecast.list[22].weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
