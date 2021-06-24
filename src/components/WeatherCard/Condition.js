import React from 'react';
import styled from '@emotion/styled';

const Condition = ({temp, condition}) => {

    const Temperature = styled.h1`
        font-family: 'Fira Sans', sans-serif;
        font-size: 2rem;
        font-weight: 170;
    `;
    const Status = styled.h3`
        font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;
    `;

    return ( 
        <>
        <Temperature>{temp}°C</Temperature>
        <Status>{condition}</Status>
        </>
     );
}
 
export default Condition;