import BookShow from "./BookShow";
import '../App.css';


function BookList({books , onDelete}) {

    const renderedBooks = books.map((book) => {
        return <div>
            < BookShow key={book.id} book={book} onDelete={onDelete} />
        
        </div>
    })
  return (
    <div className="create-book">
      {renderedBooks}
    </div>
  )
}

export default BookList
