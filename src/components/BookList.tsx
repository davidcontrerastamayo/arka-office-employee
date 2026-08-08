import React from 'react';

const BookList: React.FC<{ books: any[], onEdit: (id: number) => void }> = ({ books, onEdit }) => {
    if (books.length === 0) return <p>No hay libros disponibles.</p>;

    return (
        <ul>
            {books.map((book, index) => (
                <li key={index}>
                    <h3>{book.title}</h3>
                    <button onClick={() => onEdit(index)}>Editar</button>
                </li>
            ))}
        </ul>
    );
};

export default BookList;