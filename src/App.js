import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';


function App() {
  return (
    <div className="App">
      <WeatherCard temp={32} condition="Clear" city='Marrakesh' country='MOR'/>
      <WeatherCard temp={18} condition="Clouds" city='New York' country='USA'/>
      <WeatherCard temp={3} city='Edmonton' country='CAN'/>
      <WeatherCard temp={-25} city='Moscow' country='RUS'/>
    </div>
  );
}

export default App;
