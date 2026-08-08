import React from 'react';

const PublicationList = ({ publications, onEdit }) => {
  return (
    <div>
      <h2>Listado de Publicaciones</h2>
      {publications.length === 0 ? (
        <p>No hay publicaciones disponibles.</p>
      ) : (
        <ul>
          {publications.map((publication) => (
            <li key={publication.id}>
              <h3>{publication.title}</h3>
              <p>Estado: {publication.status}</p>
              <p>Fecha: {publication.date}</p>
              <p>Autor: {publication.author}</p>
              <button onClick={() => onEdit(publication)}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PublicationList;