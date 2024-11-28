import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);


  const deleteBookById = (id) => 
    {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
   };

   

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title},
    ];
    setBooks(updateBooks);

   

   
  };

  return (
    <div className='booklist'>
      < BookList books={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
