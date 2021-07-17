import React, {useState, useEffect} from 'react';

import WeatherCard from './WeatherCard/component'

const WeatherGetter = ({location}) => {

    //Initialize state
    const[query, setQuery] = useState("");
    const[weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  //Fetch data and wait for API response
    const getWeather = async q => {
    const apiResult = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=b211b3a06f4b1e6ba9ac27c7622375d4`
  );
  //Convert result to JSON file 
  const JSONResult = await apiResult.json();
  setWeather({
    temp: JSONResult.main.temp,
    city: JSONResult.name,
    condition: JSONResult.weather[0].main,
    country: JSONResult.country
  });
};

  const searchAPI = e => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country}/>
      <form>
        <input value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={e => searchAPI(e)}>Search</button>
      </form>
    </div>
  );
}

export default WeatherGetter;