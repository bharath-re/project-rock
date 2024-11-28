import '../App.css';

function BookShow({book, onDelete , onEdit}) {
    const handleClickDelete = () => {
        onDelete(book.id);
    };

   
  return (
    <div className='title'>
      {book.title}
      <div className='delete-title'>
        <button className='delete-button' onClick={handleClickDelete}> Delete </button>
        {/* <button className='edit-button' onClick={handleClickEdit}> edit </button> */}


      </div>
    </div>
  )
}

export default BookShow
