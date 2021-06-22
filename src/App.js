import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';


function App() {
  return (
    <div className="App">
      <WeatherCard temp={32}/>
      <WeatherCard temp={22}/>
      <WeatherCard temp={-15}/>
      <WeatherCard temp={-25}/>
      <WeatherCard temp={-55}/>
      <WeatherCard temp={8}/>
    </div>
  );
}

export default App;
