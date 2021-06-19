import React from 'react';
import styled from '@emotion/styled';

const Graphic = () => {

    const Picture = styled.img`
        width: 50%;
    `;

    return ( 
        <Picture src="./img/cloudy.png" alt="Weather Icon"/>
     );
}
 
export default Graphic;