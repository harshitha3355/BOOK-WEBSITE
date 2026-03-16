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
        
      </div>
      <Line />
      <Subtitle heading={"Recommended"} />
      <div className="blog-section">
        {blogs.slice(4, 8).map((bl) => (
          <BookCard key={bl.id} blog={bl} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default BookPost;