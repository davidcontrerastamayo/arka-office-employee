import React, { useState } from 'react';

const BookDetail: React.FC<{ book: any, onSave: (book: any) => void }> = ({ book, onSave }) => {
    const [editedBook, setEditedBook] = useState(book);

    const handleChange = (field: string, value: string) => {
        setEditedBook({ ...editedBook, [field]: value });
    };

    const handleSave = () => {
        onSave(editedBook);
    };

    return (
        <div>
            <h2>Editar Libro</h2>
            <label>Título</label>
            <input
                type="text"
                value={editedBook.title}
                onChange={(e) => handleChange('title', e.target.value)}
            />
            <label>Sinopsis</label>
            <textarea
                value={editedBook.synopsis}
                onChange={(e) => handleChange('synopsis', e.target.value)}
            />
            <label>Categoría</label>
            <input
                type="text"
                value={editedBook.category}
                onChange={(e) => handleChange('category', e.target.value)}
            />
            <button onClick={handleSave}>Guardar cambios</button>
        </div>
    );
};

export default BookDetail;