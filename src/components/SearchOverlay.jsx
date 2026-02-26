import React from "react";
import "./SearchOverlay.css";
import BookCard from "./BookCard";
import BlogCard from "./BlogCard";
import FunCard from "./FunCard";
import Subtitle from "./Subtitle";

function SearchOverlay({ searchTerm,  onChange,  filteredBooks=[],  filteredBlogs=[],  filteredFun=[],  onClose}) {
  
  const hasResults = filteredBooks.length > 0 || filteredBlogs.length > 0 || filteredFun.length > 0;
  
  return (
    <div className="search-overlay">
      <div className="search-panel">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for books, quizzes, challenges and blogs..."
          value={searchTerm}
          onChange={onChange}
          autoFocus
        />

        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="search-results">
          {!hasResults && searchTerm && (
            <div className="no-results">
              No results found for "<span>{searchTerm}</span>"
            </div>
          )}
          <Subtitle heading="Books"/>
          {filteredBooks.length > 0 && (
            <div className="books-section">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
          <Subtitle heading="Blogs"/>
          {filteredBlogs.length > 0 && (
            <div className="blogs-section">
              {filteredBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
          <Subtitle heading="Fun"/>
          {filteredFun.length > 0 && (
            <div className="fun-section">
              {filteredFun.map(f => (
                <FunCard key={f.id} fun={f} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;