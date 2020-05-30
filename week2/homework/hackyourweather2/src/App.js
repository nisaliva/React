import React, { useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import Form from './components/Form';

function App() {
  const [input, setInput] = useState('');
  const [searchWeather, setWeather] = useState({});
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
          setWeather(data);
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
  const cityWeather= Object.keys(searchWeather).length !== 0;

  return (
    <div className="App">
      <h1> Weather </h1>
      <Form input={input} setInput={setInput} onSubmit={onSubmit} />
      {isLoading && <p> Loading... </p>}
      {error && <p> Oh no! There is an error. </p>}
      {cityWeather && (
        <div>
          <WeatherBox searchWeather={searchWeather} />
        </div>
      )}
    </div>
  );
}

export default App;
