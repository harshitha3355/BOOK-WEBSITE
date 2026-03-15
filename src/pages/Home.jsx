import React from "react";
import author from "../assets/author.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subtitle from "../components/Subtitle";
import TrendingBlogs from "../components/TrendingBlogs";
import books from "../data/books";
import blogs from "../data/blogs";
import fun from "../data/fun";
import buy from "../data/buy";
import Line from "../components/Line";
import BookCard from "../components/BookCard";
import SubscribeForm from "../components/SubscribeForm";
import "./Home.css";

function Home() {
  const newsBlogs = blogs.filter((blog) => blog.type === "news");
  const stackBlogs = blogs.filter((blog) => blog.type === "stack");
  return (
    <>
      <Header />
      <div className="home">
        <div className="trending-section">
          <Subtitle heading={"Trending Blogs"} />
          <TrendingBlogs blogs={newsBlogs} />
        </div>
        <Line />
        <div className="new-releases">
          <Subtitle heading={"New Releases"} />
          <div className="books-grid">
            {books.slice(0, 24).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <Link to="/books" className="link">
            <h2 className="view-more">View more</h2>
          </Link>
        </div>
      </div>
      <div className="two-sections">
        <div className="left-section">
          <div className="stacks">
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
          </div>
          <Line/>
          <div className="pageplay">
            <Subtitle heading={"Page Play"} />
              {fun.slice(0,5).map((f)=>(
                <div key={f.id} className="pageplay-cont">
                  <img src={f.image} alt={f.title} className="pp-img" />
                  <h2 className="pp-title">{f.title}</h2>
                  <h2 className="pp-btntxt">{f.buttonText}</h2>
                </div>
              ))}
          </div>
        </div>
        <Line />
        <div className="right-section">
          <div className="abt-author">
            <img src={author} alt="Author"  id="author-img"/>
            <p id="author-note">Book blogger, reviewer, and proud page turner. I live for witty heroines, unforgettable worlds, and the thrill of finding that one story you can't put down.</p>
          </div>
          <Subtitle heading={"Quote of The Day"} />
          <h2 className="quote">“I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library.”<br/><br/>― Jane Austen, Pride and Prejudice</h2>
          <SubscribeForm />
        </div>
      </div>
      <Line/>
      <div className="buy-section">
        <div className="buy-details">
          <h2 className="buy-title">Reader's Corner - Recommended Finds</h2>
          <p className="buy-cont">Books are only part of the reading journey. The right tools and accessories can make reading, studying, and organizing your thoughts much more enjoyable. In this section, you’ll find a curated collection of products for readers and learners—from practical reading essentials to thoughtful gifts for book lovers. These recommendations are selected to enhance your reading experience and support a more comfortable and productive study environment. Some of the links may be affiliate links, which means I may earn a small commission if you choose to purchase through them, at no extra cost to you.</p>
          <Link to="/buy" className="link"><button className="exp-btn">Explore More</button> </Link>
        </div>
        <div className="buy-items">
          {buy.slice(0,4).map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className={`buy-img ${index % 2 === 0 ? "up" : "down"}`}
            >
              <img src={item.image} alt="product" />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
