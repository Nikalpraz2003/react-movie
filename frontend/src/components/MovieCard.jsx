import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieRating from "./MovieRating"

function MovieCard({ movie }) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

    function onFavoriteClick(e) {
        e.preventDefault()
        if (isFavorite(movie.id)) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
             <div className="movie-overlay">
                <button className={`favorite-btn ${isFavorite(movie.id) ? 'active' : ''}`} onClick={onFavoriteClick}>
                     {isFavorite(movie.id) ? '❤️' : '🤍'}
                </button>
             </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
            <MovieRating rating={movie.vote_average} />
        </div>
    </div>
}

export default MovieCard 