import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subtitle from "../components/Subtitle";
import TrendingBlogs from "../components/TrendingBlogs";
import books from "../data/books";
import blogs from "../data/blogs";
import Line from "../components/Line";
import BookCard from "../components/BookCard";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <section className="trending-section">
          <Subtitle heading={"Trending Blogs"} />
          <TrendingBlogs blogs={blogs} />
        </section>
        <Line />
        <section className="new-releases">
          <Subtitle heading={"New Releases"} />
          <div className="books-grid">
            {books.slice(0, 24).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
           <Link to="/books" className="link"><h2 className="view-more">View more</h2></Link>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;