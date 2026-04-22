import { useState, useEffect } from "react";
import { getGenres, getTVGenres } from "../services/api";
import "../css/GenreFilter.css";

function GenreFilter({ onGenresChange, category = "movies" }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        let genresData;
        if (category === "series") {
          genresData = await getTVGenres();
        } else {
          genresData = await getGenres();
        }
        setGenres(genresData);
        setSelectedGenres([]); // Clear selected genres when category changes
      } catch (error) {
        console.error("Error fetching genres:", error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchGenres();
  }, [category]);

  const handleGenreClick = (genreId) => {
    let updatedGenres;
    
    if (selectedGenres.includes(genreId)) {
      // Remove genre if already selected
      updatedGenres = selectedGenres.filter(id => id !== genreId);
    } else {
      // Add genre if not selected
      updatedGenres = [...selectedGenres, genreId];
    }
    
    setSelectedGenres(updatedGenres);
    onGenresChange(updatedGenres);
  };

  const handleClearAll = () => {
    setSelectedGenres([]);
    onGenresChange([]);
  };

  if (loading) {
    return <div className="genre-filter">Loading genres...</div>;
  }

  return (
    <div className="genre-filter">
      <div className="genre-header">
        <h3>Filter by Genre</h3>
        {selectedGenres.length > 0 && (
          <button onClick={handleClearAll} className="clear-btn">
            Clear All
          </button>
        )}
      </div>
      
      <div className="genre-buttons">
        {genres.map(genre => (
          <button
            key={genre.id}
            className={`genre-btn ${selectedGenres.includes(genre.id) ? 'active' : ''}`}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {selectedGenres.length > 0 && (
        <div className="selected-genres">
          <p className="selected-count">
            {selectedGenres.length} genre{selectedGenres.length > 1 ? 's' : ''} selected
          </p>
        </div>
      )}
    </div>
  );
}

export default GenreFilter;
