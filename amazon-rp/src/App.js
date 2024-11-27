import React, { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {

  const[books,setBooks]=useState([]);

  const createBook = (title)=> {
    console.log('need to add a book with :',title)

  }


  return (
    <div>
       <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App
