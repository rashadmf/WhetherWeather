import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Condition from './Condition';
import Graphic from './Graphic';

const WeatherCard = (props) => {

    //-20 to 15 is cold. 15 to 42 is hot. Anything beyond is extreme weather.
    let topColour, bottomColour = 0;
    let backGround = null;

    if(props.temp >= 15)
    {
        topColour = (1-(props.temp-15)/27)*255;
        bottomColour = topColour-150;
        backGround = `linear-gradient(
            to top, rgb(255,${topColour},0), rgb(255,${bottomColour},0)
            )`;
    } else if(props.temp < 15) {
        topColour = (1-(props.temp+20)/35)*255;
        bottomColour = topColour-150;
        backGround = `linear-gradient(
            to top, rgb(0,${topColour},255), rgb(0,${bottomColour},255)
            )`;
    }

    //Use emotion to write CSS into JS 
    const Card = styled.div`
        margin: 10 auto;
        background: ${backGround};
        width: 200px;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `
    return ( 
        <Card>
            <Location/>
            <Graphic/>
            <Condition/>
        </Card>
     );
}
 
export default WeatherCard;