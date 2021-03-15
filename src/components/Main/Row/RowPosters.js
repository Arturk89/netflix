import React, { useEffect, useRef} from 'react'
import { BASE_URL } from '../../../data/url';
import styled from 'styled-components'


const RowPostersContent = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    position: relative;
    scroll-behavior: smooth;
    
    ::-webkit-scrollbar {
        display: none;
    }
`

const RowPoster = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    margin-right: 10px;
    transition: transform 450ms;
    cursor: pointer;

    :hover {
        transform: scale(1.08);
    }
`



const RowPosters = React.forwardRef((props, ref) => {

    const { movies, isLargeRow, handleClick } = props;

    const IsPosterLarge = styled(RowPoster)`
        ${isLargeRow && `
            max-height: 250px;
                :hover{
            transform: scale(1.09);
        }
    `}
    `
    return (
        <RowPostersContent ref={ref}>
           
                {
                    movies.map(movie => (
                        <IsPosterLarge 
                            key={movie.id}
                            onClick={(e) => handleClick(movie, e)}
                            src={`${BASE_URL}${
                                isLargeRow ? 
                                movie.poster_path :
                                movie.backdrop_path
                            }`}
                            alt={movie.name} 
                        />
                    ))
                }
                
                    {/* <ArrowContent onClick={() => scrollItem(200)}>
                        {isArrow && <ArrowForwardIosIcon />}
                    </ArrowContent> */}
        
        </RowPostersContent>
    )


})

export default RowPosters

const ArrowContent = styled.div`
    position: absolute;
    top:50%;
    right: 20px;
    z-index: 1;
    cursor: pointer;

    > .MuiSvgIcon-root {
        background-color: #111;
        padding: 20px;
    }
`
