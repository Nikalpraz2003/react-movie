import { Link } from "react-router-dom";
import "../css/MovieRating.css"

function MovieRating({ rating }) {
  const stars = Math.round(rating / 2); // Convert 10-point to 5-star
  
  return (
    <div className="movie-rating">
      <span className="stars">
        {'⭐'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </span>
      <span className="rating-text">{rating}/10</span>
    </div>
  );
}

export default MovieRating