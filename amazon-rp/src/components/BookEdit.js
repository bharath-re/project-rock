import { useState } from 'react';
import '../App.css';


function BookEdit({book, onEdit,onSubmit }) {
    const [title,setTitle]=useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // Corrected typo
        onSubmit(book.id,title);
    }

    
   
  return (
      <div >
        <form className="form1" onSubmit={handleSubmit}>
            <label className='tittle'> Title </label>
            <input className='input' value={title} onChange={handleChange}/>
            <button className='edit-button'> Save </button>
        </form>
      </div>    
  )
}

export default BookEdit
