import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies/')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Derniers Films</h1>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-card">{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
