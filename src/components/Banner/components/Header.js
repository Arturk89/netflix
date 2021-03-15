import React from 'react'
import styled from 'styled-components';

const Header = ({movie, children}) => {
    return (
        <HeaderContent
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "top center"
            }}
        >
        {children}
        </HeaderContent>
    )
}

export default Header

const HeaderContent = styled.header`
    color: white;
    /* object-fit: contain; */
    height: 648px;
`
