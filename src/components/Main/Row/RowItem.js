import React, { useState, useRef, useEffect } from 'react'
import RowPosters from './RowPosters';
import Youtube from 'react-youtube';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ClearIcon from '@material-ui/icons/Clear';


const RowItem = ({title, movies, opts, trailerUrl, isLargeRow, handleClick, clearTrailer, isError, clearError, positionY}) => {

const ModalItem = styled.div`
position: absolute;
top: ${positionY}px;
left: 50%;
z-index: 1;
transform: translate(-50%, -50%);
padding: 20px;
width: 60%;
background-color: #111;
border: 1px solid black;
`

    const rowItem = useRef();

    const scrollItem = (scrollOffset, direction = "") => {
        if(direction === 'left'){
            rowItem.current.scrollLeft -= scrollOffset;
        }else{
            rowItem.current.scrollLeft += scrollOffset;
        }
    }

    return (
        <RowItemContent>
            <TitleBox>
                <RowTitle>{title}</RowTitle>
                <RowArrow>
                    <ArrowBackIosIcon onClick={() => scrollItem(200, 'left')}/>
                    <ArrowForwardIosIcon onClick={() => scrollItem(200)} />
                </RowArrow>
            </TitleBox>
            <RowPosters 
                movies={movies} 
                isLargeRow={isLargeRow}
                handleClick={handleClick} 
                ref={rowItem}
            />
            {trailerUrl && (
                <ModalItem>
                    {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
                    <ExitButton onClick={clearTrailer}>
                        <ClearIcon />
                    </ExitButton>
                </ModalItem>
            )}
            {
                isError && (
                    <ModalItem>
                        <TextError>
                            Niestety nie posiadamy tego filmu
                        </TextError>
                        <ExitButton onClick={clearError}>
                            <ClearIcon />
                        </ExitButton>
                    </ModalItem>
                )
            }
        </RowItemContent>
    )
}

export default RowItem

const TextError = styled.p`
    text-align: center;
    text-transform: uppercase;
`

const RowItemContent = styled.div`
  margin-left: 20px;
  color: white;
`

const ExitButton = styled.div`
    position: absolute;
    top: -20px;
    right: -20px;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: 5px;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const RowTitle = styled.h2``

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const RowArrow = styled.div`
    margin-right: 20px;
    cursor: pointer;
`