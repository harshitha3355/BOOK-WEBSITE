import pagetrail from '../assets/pagetrail.pdf'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Line from "../components/Line";
import Subtitle from "../components/Subtitle";
import BookCard from "../components/BookCard";
import { useParams } from "react-router-dom";
import books from "../data/books";
import "./BookPost.css";

function BookPost() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) {
    return <h2>Book not found</h2>;
  }
  return (
    <>
      <Header />
      <div className="book-post-container">
        <div className="bkp-left">
          <img src={book.url} alt={book.title} className="bkp-img" /><br/>
          <button
            onClick={() => window.open(pagetrail, "_blank")}
            className="pdf-btn"
          >
            View PDF
          </button>
          <div className="bkp-meta">
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Categories:</strong> {book.categories.join(", ")}</p>
            <p><strong>Mood/Themes:</strong> {book.moodThemes.join(", ")}</p>
            <p><strong>Language:</strong> {book.language}</p>
            <p><strong>Format:</strong> {book.format}</p>
            <p><strong>Published:</strong> {book.publicationYear}</p>
            <p><strong>Pages:</strong> {book.pageCount}</p>
            <p><strong>Rating:</strong> {book.rating} ⭐ ({book.ratingCount} reviews)</p>
            <p><strong>Binding:</strong> {book.binding.join(", ")}</p>
            <p><strong>Awards:</strong> {book.awards.join(", ")}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p>
              <strong>Availability:</strong>{" "}
              {book.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>
        <Line/>
        <div className="bkp-right">
          <h2 className="bkp-title">{book.title}</h2>
          <h2 className="bkp-author">by {book.author}</h2>
          <h2 className="bkp-rating">Rating: {book.rating} </h2>
          <h2 className="bkp-title">Quote</h2>
          <h2 className="bkp-quote">{book.favquote}</h2>
          <h2 className="bkp-title">Description</h2>
          <p className="bkp-desc">{book.description}</p>
        </div>
      </div>
      <Line />
      <Subtitle heading={"Recommended"} />
      <div className="book-section">
        {books
          .filter(
            (bk) =>
              bk.id !== book.id &&
              bk.categories.some((cat) => book.categories.includes(cat)),
          )
          .slice(4, 12)
          .map((bk) => (
            <BookCard key={bk.id} book={bk} />
          ))}
      </div>
      <Footer />
    </>
  );
}

export default BookPost;
