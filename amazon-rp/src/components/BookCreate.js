import React, { useState } from 'react';
import '../App.css';

function BookCreate({onCreate}) {
    const [title,setTitle]=useState('');

    const handleChange= (event)=> {
        setTitle(event.target.value);
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };
  return (
    <div>
        <form className="form-1" onSubmit={handleSubmit}>
            <h3 className='create-book'> create a book </h3>
            <label className='title'> Title </label>
            <input className='input' value={title} onChange={handleChange} />
            <button className='create-button'> Create! </button>
        </form>
    </div>
  )
}

export default BookCreate
