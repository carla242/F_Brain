import React, { useEffect, useState } from "react";
import '../styles/animations.css'; 
import './Home.css'; // ← Ajout du style spécifique à Home

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies/')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title animate-fadeInUp delay-1">🎬 Derniers Films</h1>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <li key={movie.id} className={`movie-card animate-fadeInUp delay-${(index % 5) + 2}`}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}