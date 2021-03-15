import React, { useEffect, useState } from 'react'
import axios from '../../data/axios';
import requests from '../../data/requests';
import Banner from './components/Banner';

const BannerContainer = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData()
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <Banner movie={movie} truncate={truncate} />
    )
}

export default BannerContainer
