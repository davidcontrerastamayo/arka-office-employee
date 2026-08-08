import React, { useState, useEffect } from 'react';
import { getPublications, savePublications } from './utils/localStorage';
import PublicationList from './components/PublicationList';
import EditPublicationForm from './components/EditPublicationForm';
import PublicationDetail from './components/PublicationDetail';

const App = () => {
  const [publications, setPublications] = useState(getPublications());
  const [selectedPublication, setSelectedPublication] = useState(null);

  useEffect(() => {
    savePublications(publications);
  }, [publications]);

  const handleCreateOrUpdate = (publication) => {
    // Check if publication has a title for validation
    if (!publication.title) return;

    const updatedPublications = selectedPublication
      ? publications.map((pub) => (pub.id === publication.id ? publication : pub))
      : [
          ...publications,
          { id: Date.now(), ...publication }, // id for new publication
        ];
    setPublications(updatedPublications);
    setSelectedPublication(null);
  };

  return (
    <div>
      <h1>Catálogo Editorial</h1>
      <PublicationList publications={publications} onEdit={setSelectedPublication} />
      <EditPublicationForm publication={selectedPublication} onSubmit={handleCreateOrUpdate} />
      <PublicationDetail publication={selectedPublication} />
    </div>
  );
};

export default App;