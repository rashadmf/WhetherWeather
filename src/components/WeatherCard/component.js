import React from 'react';
import styled from '@emotion/styled';

const WeatherCard = (props) => {

    //Use emotion to write CSS into JS 
    const Card = styled.div`
        margin: 10 auto;
        background: linear-gradient(to top, cyan, navy);
        width: 200px;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `
    return ( 
        <Card className="card">
            <div className="location">
                <h1 className='city'>Sydney</h1>
                <h3 className='country'>AU</h3>
            </div>
            <img className='icon' src="./img/cloudy.png" alt="Weather Icon"/>
            <h1 className='temparature'>20 °C</h1>
            <h3 className='condition'>Clouds</h3>
        </Card>
     );
}
 
export default WeatherCard;