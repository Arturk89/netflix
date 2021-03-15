import requests from './requests';


export const movies = [
    {
        id: 1,
        title: "NETFLIX ORIGINAL",
        fetchUrl: requests.fetchNetflixOriginals,
        isLargeRow: true
    },
    {
        id: 2,
        title: "Trending Now",
        fetchUrl: requests.fetchTrending,
        isLargeRow: false
    },
    {
        id: 3,
        title: "Top Rated",
        fetchUrl: requests.fetchTopRated,
        isLargeRow: false
    },
    {
        id: 4,
        title: "Action Movies",
        fetchUrl: requests.fetchActionMovies,
        isLargeRow: false
    },
    {
        id: 5,
        title: "Comedy Movies",
        fetchUrl: requests.fetchComedyMovies,
        isLargeRow: false
    },
    {
        id: 6,
        title: "Horror Movies",
        fetchUrl: requests.fetchHorrorMovies,
        isLargeRow: false
    },
    {
        id: 7,
        title: "Romance Movies",
        fetchUrl: requests.fetchRomanceMovies,
        isLargeRow: false
    },
    {
        id: 8,
        title: "Documentaries",
        fetchUrl: requests.fetchDocumentaries,
        isLargeRow: false
    },
]