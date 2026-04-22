const API_KEY = "12e31b2cb6788a3c458af20a141d8da1";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results  
};


export const getMovieCast = async (movieId) => {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.cast; // Returns array of actors
};


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
     query   
    )}`
 );
    const data = await response.json();
    return data.results  
};


export const getGenres = async () => {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    return data.genres; // Returns array of genres with id and name
};


export const getMoviesByGenre = async (genreId) => {
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
    );
    const data = await response.json();
    return data.results; // Returns array of movies for that genre
};


export const getMoviesByMultipleGenres = async (genreIds) => {
    const genreString = genreIds.join(',');
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreString}&sort_by=popularity.desc`
    );
    const data = await response.json();
    return data.results; // Returns array of movies for selected genres
};


export const getTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Returns trending movies for the week
};


export const getTopRatedMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Returns top rated movies
};


export const getPopularSeries = async () => {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Returns popular TV series
};


export const getTrendingSeries = async () => {
    const response = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Returns trending TV series for the week
};


export const searchSeries = async (query) => {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results; // Returns search results for TV series
};


export const getSeriesByGenre = async (genreIds) => {
    const genreString = genreIds.join(',');
    const response = await fetch(
        `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreString}&sort_by=popularity.desc`
    );
    const data = await response.json();
    return data.results; // Returns TV series for selected genres
};


export const getTVGenres = async () => {
    const response = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`);
    const data = await response.json();
    return data.genres; // Returns array of TV genres
};
