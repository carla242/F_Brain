import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Tentative d\'ajout du film :', { title, description });

    try {
      const response = await fetch('/add-movie/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await response.json();
      console.log('Réponse serveur :', data);

      if (response.ok) {
        navigate('/');
        window.location.reload();
      } else {
        alert('Erreur lors de l\'ajout du film : ' + JSON.stringify(data));
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      alert('Erreur réseau : impossible de contacter le serveur.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Ajouter un film</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
