import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);


  const editBookbyId = (id, newTitle)=> {
    const updatedBookd = books.map((book) => {
      if (book.id === id ){
        return {...books, title: newTitle 

        };
      } 
      return books;
    });
    setBooks(updatedBookd)
  }


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
      < BookList books={books} onDelete={deleteBookById} onEdit={editBookbyId}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
