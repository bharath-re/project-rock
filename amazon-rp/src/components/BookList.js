import BookShow from "./BookShow";
import '../App.css';
import BookEdit from "./BookEdit";


function BookList({books , onDelete, onEdit}) {

    const renderedBooks = books.map((book) => {
        return <div>
            < BookShow key={book.id} book={book} onDelete={onDelete} />
        <BookEdit onEdit={onEdit}/>
        </div>
    })
  return (
    <div className="create-book">
      {renderedBooks}
    </div>
  )
}

export default BookList
