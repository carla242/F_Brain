import React, { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/movies/')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Derniers Films</h1>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
