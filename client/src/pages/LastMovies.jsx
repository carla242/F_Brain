import React, { useEffect, useState } from 'react';

export default function LastMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies/')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Derniers Films</h1>
      <ul className="mt-4 space-y-2">
        {movies.map(movie => (
          <li key={movie.id} className="p-4 border rounded shadow">{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
