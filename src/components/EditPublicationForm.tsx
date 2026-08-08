import React, { useState, useEffect } from 'react';

const EditPublicationForm = ({ publication, onSubmit }) => {
  const [title, setTitle] = useState(publication?.title || '');
  const [status, setStatus] = useState(publication?.status || '');
  const [date, setDate] = useState(publication?.date || '');
  const [author, setAuthor] = useState(publication?.author || '');

  useEffect(() => {
    if (publication) {
      setTitle(publication.title);
      setStatus(publication.status);
      setDate(publication.date);
      setAuthor(publication.author);
    }
  }, [publication]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...publication, title, status, date, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Estado:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Autor:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditPublicationForm;
