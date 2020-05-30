import React from "react";

function WeatherBox({searchWeather}) {

  if (searchWeather.cod === 200) {
    const {
      name,
      sys: { country },
      weather,
      main: { temp_min, temp_max },
      coord: { lon, lat },
    } = searchWeather;

    const { main, description } = weather[0]

    return (
      <div className="box">
          <h1> {name}, {country} </h1>

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

  } else {
    return <p> Please enter a correct city name </p>;

  }

}
export default WeatherBox;
