import React from 'react';
import styled from '@emotion/styled';

const Location = (props) => {

    const Container = styled.div`
        text-align: center;
    `;
    const City = styled.div`
        font-family: 'Merriweather', sans-serif;
        font-size: 1.4em;
        size: 6px;
    `;
    const Country = styled.h3`
        font-family: 'Fira Sans', sans-serif;
        font-size: 1.1rem;
    `;
    return ( 
        <Container>
            <City>Sydney</City>
            <Country>AU</Country>
        </Container>
     );
}
 
export default Location;