import React, { useState } from 'react';

const PublicationList = ({ publications, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredPublications = publications.filter((publication) => {
    const matchesTitle = publication.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? publication.status === filterStatus : true;
    return matchesTitle && matchesStatus;
  });

  return (
    <div>
      <h2>Listado de Publicaciones</h2>
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
        <option value="">Todos los estados</option>
        <option value="Publicado">Publicado</option>
        <option value="Borrador">Borrador</option>
        <option value="Revisión">Revisión</option>
      </select>
      {filteredPublications.length === 0 ? (
        <p>No hay publicaciones disponibles.</p>
      ) : (
        <ul>
          {filteredPublications.map((publication) => (
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