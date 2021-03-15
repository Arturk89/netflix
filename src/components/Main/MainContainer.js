import React from 'react'
import requests from '../../data/requests';
import { movies } from '../../data/movies';
import { v4 as uuidv4} from 'uuid';
import Row from './Row/RowContainer';
import styled from 'styled-components';

const MainConatiner = () => {
    return (
        <MainContent>
        {
            movies.map(movie => (
                <Row 
                    key={uuidv4()}
                    id={movie.id}
                    title={movie.title}
                    fetchUrl={movie.fetchUrl}
                    isLargeRow={movie.isLargeRow}
                />
            ))
        }
    </MainContent>
        
    )
}

export default MainConatiner

const MainContent = styled.div``