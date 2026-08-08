import React from 'react';

const PublicationDetail = ({ publication }) => {
  if (!publication) return <p>Publicación no encontrada.</p>;

  return (
    <div>
      <h2>{publication.title}</h2>
      <p>Estado: {publication.status}</p>
      <p>Fecha: {publication.date}</p>
      <p>Autor: {publication.author}</p>
      <p>Contenido: {publication.content}</p>
    </div>
  );
};

export default PublicationDetail;