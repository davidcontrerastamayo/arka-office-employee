import React, { useState } from 'react';
import { Publication } from '../types';

const CreatePublication = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('Ficción');
    const [synopsis, setSynopsis] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && synopsis.length >= 40) {
            const newPublication: Publication = { id: Date.now(), title, author, category, synopsis, status: 'Borrador', updatedAt: new Date() };
            onCreate(newPublication);
            setTitle('');
            setAuthor('');
            setSynopsis('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Ficción">Ficción</option>
                <option value="No ficción">No ficción</option>
                <option value="Ensayo">Ensayo</option>
                <option value="Infantil">Infantil</option>
            </select>
            <textarea value={synopsis} onChange={(e) => setSynopsis(e.target.value)} placeholder="Synopsis (min. 40 characters)" required />
            <button type="submit">Create</button>
        </form>
    );
};

export default CreatePublication;