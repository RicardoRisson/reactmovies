// File: /reactmovies-frontend/src/services/api.example.js

/**
 * TMDB API CONFIGURATION
 *
 * 1. Create an account at: https://www.themoviedb.org/signup
 * 2. Get your API KEY at: https://www.themoviedb.org/settings/api
 * 3. Rename this file to 'api.js' (never commit your real key!)
 */

const API_KEY = "INSERT_YOUR_KEY_HERE"; // 👈 Replace with your actual key
const BASE_URL = "https://api.themoviedb.org/3";

// API Endpoints
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getSearchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

/* USAGE INSTRUCTIONS:
1. Rename this file to 'api.js'
2. Never commit the renamed file!
3. Keep your API key secret
4. Add 'api.js' to your .gitignore file
*/
