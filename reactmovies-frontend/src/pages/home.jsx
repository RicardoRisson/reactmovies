import MovieCard from "../components/movieCard";

function Home() {
  const movies = [
    {
      id: 1,
      title: "Terrifier",
      release_date: "2023",
      url: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Terminator",
      release_date: "1999",
      url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Matrix",
      release_date: "1998",
      url: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
