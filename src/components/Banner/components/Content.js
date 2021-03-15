import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

const Content = ({movie, truncate}) => {

    let history = useHistory();

    const GoToMyAccount = () => {
        history.push("/account");
    }

    return (
        <BannerContents>
            <BannerTitle>
                {movie?.title || movie?.name || movie?.original_name}
            </BannerTitle>
            <BannerButtons>
                <BannerButton>Play</BannerButton>
                <BannerButton onClick={GoToMyAccount}>My List</BannerButton>
            </BannerButtons>
            <BannerDescription>
                {truncate(movie?.overview, 150)}
            </BannerDescription>
        </BannerContents>
    )
}

export default Content

const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 390px;
`

const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`

const BannerButtons = styled.div``

const BannerButton = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;

    :hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`

const BannerDescription = styled.p`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    max-width: 360px;
    height: 80px;
`

