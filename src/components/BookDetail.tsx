import React, { useState } from 'react';

const BookDetail = ({ book, onUpdate }) => {
  const [title, setTitle] = useState(book.title);
  const [synopsis, setSynopsis] = useState(book.synopsis);
  const [category, setCategory] = useState(book.category);
  const [state, setState] = useState(book.state);

  const handleSave = () => {
    onUpdate({ ...book, title, synopsis, category, state });
  };

  return (
    <div>
      <h2>Detalle del Libro</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <textarea
        value={synopsis}
        onChange={(e) => setSynopsis(e.target.value)}
        placeholder="Sinopsis"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value='Ficción'>Ficción</option>
        <option value='No ficción'>No ficción</option>
        <option value='Infantil'>Infantil</option>
        <option value='Poesía'>Poesía</option>
      </select>
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value='draft'>Borrador</option>
        <option value='published'>Publicado</option>
      </select>
      <button onClick={handleSave}>Guardar Cambios</button>
    </div>
  );
};

export default BookDetail;