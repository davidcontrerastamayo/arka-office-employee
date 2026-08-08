import React, { useState } from 'react';

const CreateBook = () => {
  const [prompt, setPrompt] = useState('');
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async () => {
    setLoading(true);
    setError('');

    // Mock IA response
    const mockResponse = {
      title: 'Título generado',
      synopsis: 'Sinopsis generada',
      category: 'Ficción',
      chapters: ['Capítulo 1', 'Capítulo 2', 'Capítulo 3'],
    };

    if (!prompt) {
      setError('El prompt no puede estar vacío.');
      setLoading(false);
      return;
    }

    // Simulate creation delay
    setTimeout(() => {
      setBook(mockResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Crear libro asistido por IA</h2>
      <textarea
        placeholder="Escribe tu idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleCreate} disabled={loading}>Crear libro</button>
      {loading && <p>Generando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {book && <p>Libro creado: {book.title}</p>}
    </div>
  );
};

export default CreateBook;