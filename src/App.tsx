import React from 'react';
import CreateBook from './components/CreateBook';
import Catalog from './components/Catalog';
import BookDetail from './components/BookDetail';

const App = () => {
  return (
    <div>
      <h1>MVP Editorial AI</h1>
      <CreateBook />
      <Catalog />
      {/* The BookDetail component would display details of a
      selected book, assuming state management for selected book */}
    </div>
  );
};

export default App;