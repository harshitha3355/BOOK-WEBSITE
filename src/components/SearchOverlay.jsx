import React from "react";
import "./SearchOverlay.css";
import BookCard from "./BookCard";
import BlogCard from "./BlogCard";
import FunCard from "./FunCard";

function SearchOverlay({ searchTerm,  onChange,  filteredBooks=[],  filteredBlogs=[],  filteredFun=[],  onClose}) {
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
          {filteredBooks.length > 0 && (
            <>
              <h3>Books</h3>
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </>
          )}

          {filteredBlogs.length > 0 && (
            <>
              <h3>Blogs</h3>
              {filteredBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </>
          )}

          {filteredFun.length > 0 && (
            <>
              <h3>Fun</h3>
              {filteredFun.map(f => (
                <FunCard key={f.id} fun={f} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
