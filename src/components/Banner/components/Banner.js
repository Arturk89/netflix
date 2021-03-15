import React from 'react'
import Header from './Header';
import Content from './Content';
import styled from 'styled-components';

const Banner = ({movie, truncate}) => {
    return (
        <Header movie={movie}>
            <Content movie={movie} truncate={truncate} />
            <FadeBottom />
        </Header>
    )
}

export default Banner

const FadeBottom = styled.div`
    height: 7.4rem;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
    );
`
