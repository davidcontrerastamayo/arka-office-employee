import React, { useState } from 'react';

const PublicationForm = ({ onSave }: { onSave: any }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [synopsis, setSynopsis] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && author && synopsis.length >= 40) {
            onSave({ title, author, category, synopsis });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor" required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoría" />
            <textarea value={synopsis} onChange={(e) => setSynopsis(e.target.value)} placeholder="Sinopsis (mínimo 40 caracteres)" required />
            <button type="submit">Guardar Publicación</button>
        </form>
    );
};

export default PublicationForm;