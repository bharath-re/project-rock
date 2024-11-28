import { useState } from "react";
import "../App.css";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleClickDelete = () => {
    onDelete(book.id);
  };

  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/200/300`}
      ></img>

      <div className="actions">
        <button className="delete" onClick={handleClickDelete}>
          {" "}
          Delete{" "}
        </button>
        <button className="edit-1" onClick={handleClickEdit}>
          {" "}
          edit{" "}
        </button>
      </div>
    </div>
  );
}

export default BookShow;
