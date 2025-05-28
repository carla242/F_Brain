import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <input
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre du film"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
    </form>
  );
}
