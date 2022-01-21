import React, {useState, useEffect} from 'react';

import WeatherCard from './WeatherCard/component'

const WeatherGetter = ({location}) => {

    //Initialize state
    const[query, setQuery] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const[weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  //Fetch data and wait for API response
    const getWeather = async q => {
      setQuery("");
      setLoading(true);
      try{
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
        } );
        } catch (error) {
          setError(true);
        }
      setLoading(false);
};
  //Search query from user
  const searchAPI = e => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      //Conditional rendering while loading
      {!loading && !error ? (
        <div>
          <WeatherCard 
            temp={weather.temp} 
            condition={weather.condition} 
            city={weather.city} 
            country={weather.country}/>
          <form>
            <input class="inputSearch" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button class="searchBtn" onClick={e => searchAPI(e)}>Search</button>
          </form>
        </div>
      ) :loading? (
        <div style={{color: "black"}}>Loading</div>
      ) : !loading && error? (
        <div style={{color: "black"}}>Error encountered!
          <br/>
          <button class="searchBtn" onClick={() => setError(false)}>Reset</button>
        </div>
      ):null}
    </div>
  );
}

export default WeatherGetter;