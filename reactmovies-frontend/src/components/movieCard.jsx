import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function favoriteOnClick() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={favoriteOnClick}>
            ♡
          </button>
        </div>
      </div>
      <div className="movieInfo">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
