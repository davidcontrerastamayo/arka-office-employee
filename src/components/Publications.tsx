import React, { useState } from 'react';
import Catalog from './Catalog';
import CreatePublication from './CreatePublication';
import EditPublication from './EditPublication';
import { Publication } from '../types';

const Publications = () => {
    const [publications, setPublications] = useState<Publication[]>([]);

    const handleCreatePublication = (publication: Publication) => {
        setPublications([...publications, publication]);
    };

    return (
        <div>
            <Catalog publications={publications} />
            <CreatePublication onCreate={handleCreatePublication} />
        </div>
    );
};

export default Publications;