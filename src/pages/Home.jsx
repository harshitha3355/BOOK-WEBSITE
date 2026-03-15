import React from "react";
import author from "../assets/author.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subtitle from "../components/Subtitle";
import TrendingBlogs from "../components/TrendingBlogs";
import books from "../data/books";
import blogs from "../data/blogs";
import Line from "../components/Line";
import BookCard from "../components/BookCard";
import BlogCard from "../components/BlogCard";
import "./Home.css";

function Home() {
  const newsBlogs = blogs.filter((blog) => blog.type === "news");
  const stackBlogs = blogs.filter((blog) => blog.type === "stack");
  return (
    <>
      <Header />
      <div className="home">
        <section className="trending-section">
          <Subtitle heading={"Trending Blogs"} />
          <TrendingBlogs blogs={newsBlogs} />
        </section>
        <Line />
        <section className="new-releases">
          <Subtitle heading={"New Releases"} />
          <div className="books-grid">
            {books.slice(0, 24).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <Link to="/books" className="link">
            <h2 className="view-more">View more</h2>
          </Link>
        </section>
      </div>
      <div className="two-sections">
        <div className="left-section">
          <section className="stacks">
            <Subtitle heading={"Stacks"} />
            <div className="stack-section">
              {stackBlogs.slice(0, 6).map((blog) => (
                <div key={blog.id} className="stack-flex">
                  <img src={blog.image} alt={blog.title} className="stack-img" />
                  <h2 className="stack-title">{blog.title}</h2>
                </div>
              ))}
            </div>
            <Link to="/blog" className="link">
            <h2 className="view-more">View more</h2>
          </Link>
          </section>
          <Line/>
          <section className="pageplay">
            <Subtitle heading={"Page Play"} />
          </section>
        </div>
        <Line />
        <div className="right-section">
          <section className="abt-author">
            <img src={author} alt="Author"  id="author-img"/>
            <p id="author-note">Book blogger, reviewer, and proud page turner. I live for witty heroines, unforgettable worlds, and the thrill of finding that one story you can't put down.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
