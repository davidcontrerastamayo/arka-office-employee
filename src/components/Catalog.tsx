import React, { useState, useEffect } from 'react';

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books') || '[]');
    setBooks(storedBooks);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredBooks = books.filter((book) => 
    book.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Catálogo de Libros</h2>
      <input
        type="text"
        placeholder="Filtrar por categoría"
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredBooks.length > 0 ? (
        <ul>
          {filteredBooks.map(book => (
            <li key={book.id}>{book.title} - {book.category}</li>
          ))}
        </ul>
      ) : (
        <p>No hay libros disponibles.</p>
      )}
    </div>
  );
};

export default Catalog;