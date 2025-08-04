import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"; // Adjust path as per your folder structure

const API_KEY = "639a06ef18064ef2ac1300081b76427c";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        console.log("Fetched movies:", data);
        setMovies(data.results); // safely accessing results
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div className="home">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
