import React from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import CityWeather from './city-weather.json';

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      {CityWeather.map((city) => (
        <WeatherBox
          key={city.id}
          cityName={city.name}
          countryName={city.sys.country}
          main={city.weather[0].main}
          description={city.weather[0].description}
          temp_min={city.main.temp_min}
          temp_max={city.main.temp_max}
          lon={city.coord.lon}
          lat={city.coord.lat}
        />
      ))}
    </div>
  );
}

export default App;
