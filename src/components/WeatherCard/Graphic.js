import React from 'react';
import styled from '@emotion/styled';

const Graphic = (props) => {

    const Picture = styled.img`
        width: 50%;
    `;

    var graphic = '';
  switch (props.condition) {
    case "Clouds":
      graphic = `./img/Cloudy.png`;
      break;
    case "Clear":
      graphic = `./img/Clear.png`;
      break;
    case "Haze":
      graphic = `./img/Haze.png`;
      break;
    case "Hail":
      graphic = `./img/Hail.png`;
      break;
    case "Fog":
      graphic = `./img/Fog.png`;
      break;
    case "Tornado":
      graphic = `./img/Tornado.png`;
      break;
    case "Dust":
      graphic = `./img/Dust.png`;
      break;
    case "Mist":
      graphic = `./img/Mist.png`;
      break;
    case "Snow":
      graphic = `./img/Snow.png`;
      break;
    case "Rain":
      graphic = `./img/Rain.png`;
      break;
    case "Drizzle":
      graphic = `./img/Drizzle.png`;
      break;
    case "Thunderstorm":
      graphic = `./img/Thunder.png`;
      break;
    default:
      graphic = `./img/Fog.png`;
      break;
  }

    return ( 
        <Picture src={graphic} alt="Weather"/>
     );
}
 
export default Graphic;