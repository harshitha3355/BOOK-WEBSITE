import './BookCard.css';

function BookCard({ book }) {
  return (
    <div className="book-disp">
      <div className='book-card'>
        <img src={book.url} alt={book.title} className="book-img" />
        <h2 className="book-title">{book.title}</h2>
        <h2 className='book-author'>by {book.author}</h2>
      </div>
    </div>
  );
}

export default BookCard;
