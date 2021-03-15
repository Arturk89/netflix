import React, {useEffect, useState} from 'react'
import axios from '../../../data/axios';
import movieTrailer from 'movie-trailer';
import RowItem from './RowItem';



const RowContainer = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [isError, setIsError] = useState("");
    const [positionY, setPositionY] = useState(null);

    console.log(trailerUrl)

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

        return () => {
            fetchData();
        }
    }, [fetchUrl])

    const clearTrailer = () => {
        setTrailerUrl("");
        setPositionY(null)
    }
    const clearError = () => {
        setIsError("")
        setPositionY(null)
    }

    const handleClick = (movie, e) => {

        const posY = e.pageY;

        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.original_title || movie?.original_name)
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
                setPositionY(posY)
            })
            .catch(error => {
                setIsError(error)
                setPositionY(posY)
            });
        }
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    return (
        <RowItem 
            title={title}
            movies={movies} 
            opts={opts} 
            trailerUrl={trailerUrl} 
            isLargeRow={isLargeRow}
            handleClick={handleClick}
            clearTrailer={clearTrailer}
            isError={isError}
            clearError={clearError}
            positionY={positionY}
        />
    )
}

export default RowContainer
