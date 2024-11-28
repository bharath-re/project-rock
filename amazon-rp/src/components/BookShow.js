import { useState } from 'react';
import '../App.css';
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit }) {
    const [showEdit,setShowEdit]=useState(false);

    const handleClickDelete = () => {
        onDelete(book.id);
    };

   const handleClickEdit = () => {
    setShowEdit(!showEdit);
   }

   const handleSubmit = (id,title) => {
    setShowEdit(false);
    onEdit(id,title);
   }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content =<BookEdit book={book} onSubmit={handleSubmit}/> 
    }

   
  return (
    <div className='book-show'>
        <div>{content}</div>

      <div className='actions'>
        <button className='delete' onClick={handleClickDelete}> Delete </button>
        <button className='edit' onClick={handleClickEdit}> edit </button>


      </div>
    </div>
  )
}

export default BookShow
