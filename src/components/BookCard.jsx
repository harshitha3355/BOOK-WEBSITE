import './BookCard.css';
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/books/${books.id}`} className="book-card">
      <img src={book.url} alt={book.title} className="book-img" />
      <h2 className="book-title">{book.title}</h2>
      <h2 className="book-author">by {book.author}</h2>
    </Link>
  );
}

export default BookCard;
