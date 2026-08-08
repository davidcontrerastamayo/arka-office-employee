import React from 'react';
import { Publication } from '../types';

const EditPublication = ({ publication, onSave }) => {
    const { title, author, category, synopsis, status } = publication;
    return (
        <div>
            <h1>Edit Publication</h1>
            <CreatePublication onCreate={onSave} />
        </div>
    );
};

export default EditPublication;