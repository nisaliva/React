import React from "react";

function WeatherBox({cityName, countryName, main, description, temp_min, temp_max, lon, lat, }) {
  return (
    <div className="box">
        <h1> {cityName}, {countryName} </h1>

        <div className="main">
            <h2> {main} </h2>
            <p> {description} </p>
        </div>

        <div className="temp">
            <p> min temp: {temp_min} </p>
            <p> max temp: {temp_max} </p>
            <p> location: {lon}, {lat} </p>
        </div>
    </div>
  );
}

export default WeatherBox;