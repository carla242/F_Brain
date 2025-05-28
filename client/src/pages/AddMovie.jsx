import React, { useState } from "react";
import "./AddMovie.css";

export default function AddMovie() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/movies/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        className="add-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre du film"
      />
      <button className="add-button">Ajouter</button>
    </form>
  );
}
