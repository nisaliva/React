import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import WeatherBox from './components/WeatherBox';
import Form from './components/Form';
import ForecastDetail from "./components/ForecastDetail";

function App() {
  const [input, setInput] = useState('');
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`;

  const getCityWeather = async () => {
    try {
      if (input !== '') {
        setLoading(true);
        const res = await fetch(apiUrl );

        if (res.status === 200) {
          const data = await res.json();
          const newData = [data, ...citiesWeather]
          setCitiesWeather(newData);
        } else {
          throw Error('Oh no! There is an error.');
        }
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    getCityWeather();
    e.preventDefault();
  };

  const deleteCity = (id) => {
    setCitiesWeather((cities) => {
      cities = cities.filter((city) => city.id !== id);
      return cities;
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <h1> Weather </h1>
            <Form input={input} setInput={setInput} onSubmit={onSubmit} />
            {isLoading && <p> Loading... </p>}
            {error && <p> Oh no! There is an error. </p>}
            { citiesWeather.length !==0 &&
            citiesWeather.map((city) => (
              <div key={city.id}>
                <WeatherBox searchWeather={city}  deleteCity={deleteCity} />
              </div> 
            ))}
          </div>
      </Route>
        <Route path="/:cityId">
          <ForecastDetail/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;