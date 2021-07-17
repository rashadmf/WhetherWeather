import React, {useEffect, useState} from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';
import WeatherGetter from './components/WeatherGetter';


function App() {

  return (
    <div className="App">
      <WeatherGetter location="Toronto,CA"/>
      <WeatherGetter location="Moscow,RU"/>
      <WeatherGetter location="Beijing,CN"/>
      <WeatherGetter location="Barrow,US"/>
    </div>
  );
  
}

export default App;
