import MovieCard from "../components/movieCard";
import { useState, useEffect } from "react";
import { getSearchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
// 🚨 API KEY NOTICE 🚨
// This app uses TMDB API but the demo key has usage limits.
// If movies fail to load:
// 1. Create a FREE account at https://www.themoviedb.org/signup
// 2. Get your API KEY at https://www.themoviedb.org/settings/api
// 3. Create an `api.js` file INSIDE /services folder with:

/*
const API_KEY = "YOUR_KEY_HERE"; // 👈 Paste your key
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return await response.json().results;
};

export const getSearchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  return await response.json().results;
};
*/

// Reload the app and enjoy! 🍿
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load popular movies :(");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await getSearchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to search movies :(");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="Search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error msg">{error}</div>}
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
