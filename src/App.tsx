import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const App: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [currentBook, setCurrentBook] = useState<any>(null);

    const handleSaveBook = (book: any) => {
        setBooks([...books, book]);
    };

    const handleEditBook = (index: number) => {
        setCurrentBook(books[index]);
    };

    const handleSaveEdit = (book: any) => {
        const updatedBooks = books.map(b => b.id === book.id ? book : b);
        setBooks(updatedBooks);
        setCurrentBook(null);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Editorial AI</h1>
            <BookForm onSave={handleSaveBook} />
            <BookList books={books} onEdit={handleEditBook} />
            {currentBook && <BookDetail book={currentBook} onSave={handleSaveEdit} />}
        </div>
    );
};

export default App;