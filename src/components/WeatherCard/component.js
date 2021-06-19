import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Condition from './Condition';
import Graphic from './Graphic';

const WeatherCard = (props) => {

    const temp = 200;
    //Use emotion to write CSS into JS 
    const Card = styled.div`
        margin: 10 auto;
        background: linear-gradient(to top, rgba(${temp},200,200), navy);
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