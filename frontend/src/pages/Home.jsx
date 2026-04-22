import MovieCard from "../components/MovieCard"
import GenreFilter from "../components/GenreFilter"
import CategoryTabs from "../components/CategoryTabs"
import { useState, useEffect } from "react";
import { 
  searchMovies, 
  getPopularMovies, 
  getMoviesByMultipleGenres,
  getTrendingMovies,
  getTopRatedMovies,
  getPopularSeries,
  getTrendingSeries,
  searchSeries,
  getSeriesByGenre,
  getTVGenres
} from "../services/api";
import "../css/Home.css"

function Home() {
      const [category, setCategory] = useState("movies"); // 'trending', 'movies', 'series'
      const [searchQuery, setSearchQuery] = useState("");
      const [movies, setMovies] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      const [selectedGenres, setSelectedGenres] = useState([]);

    // Load initial data based on category
    useEffect(() => {
        const loadInitialData = async () => {
           try {
            let data;
            if (category === "trending") {
              data = await getTrendingMovies();
            } else if (category === "movies") {
              data = await getPopularMovies();
            } else if (category === "series") {
              data = await getPopularSeries();
            }
            setMovies(data);
            setSelectedGenres([]); // Reset genres when switching category
            setSearchQuery(""); // Reset search
           } catch (error) {
             console.log("Error fetching data:", error);
             setError("Failed to load content..");
           }
           finally {
            setLoading(false);
           }
           };

           setLoading(true);
           loadInitialData();
    }, [category]);

    const handleCategoryChange = (newCategory) => {
      setCategory(newCategory);
      setError(null);
    };

    const handleGenresChange = async (genreIds) => {
        setSelectedGenres(genreIds);
        setSearchQuery(""); // Clear search when filtering by genre
        
        if (genreIds.length === 0) {
            // If no genres selected, load default data for category
            setLoading(true);
            try {
                let data;
                if (category === "trending") {
                  data = await getTrendingMovies();
                } else if (category === "movies") {
                  data = await getPopularMovies();
                } else if (category === "series") {
                  data = await getPopularSeries();
                }
                setMovies(data);
                setError(null);
            } catch (error) {
                console.log("Error fetching data:", error);
                setError("Failed to load content..");
            } finally {
                setLoading(false);
            }
        } else {
            // Fetch content by selected genres
            setLoading(true);
            try {
                let filteredData;
                if (category === "series") {
                  filteredData = await getSeriesByGenre(genreIds);
                } else {
                  filteredData = await getMoviesByMultipleGenres(genreIds);
                }
                setMovies(filteredData);
                setError(null);
            } catch (error) {
                console.log("Error fetching content by genre:", error);
                setError("Failed to load filtered content..");
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSearch = async(e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return 

        setLoading(true)
        setSelectedGenres([]); // Clear genre filters when searching
        try {
            let searchResults;
            if (category === "series") {
              searchResults = await searchSeries(searchQuery);
            } else {
              searchResults = await searchMovies(searchQuery);
            }
            setMovies(searchResults)
            setError(null)
        }catch (err) {
            console.log(err)
            setError("Failed to search for content..")
        }finally {
            setLoading(false)
        }
    }

    return(
    <div className="home">
          <CategoryTabs activeCategory={category} onCategoryChange={handleCategoryChange} />

          <form onSubmit={handleSearch} className="search-form">
        <input 
            type="text"
            placeholder={`Search for ${category}...`}
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className='search-button'>Search</button>
          </form>

          <GenreFilter onGenresChange={handleGenresChange} category={category} />

          {error && <div className="error-message">{error}</div>}

          {loading ? (
          <div className="loading">Loading...</div>
          ) : (
        <div className="movies-grid">
        {movies.map(
            (movie) => (
        <MovieCard movie={movie} key={movie.id} />
        )
        )}
        </div>
    )}
    </div>
    );
}