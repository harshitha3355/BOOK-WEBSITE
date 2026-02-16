import React from "react";
import "./SearchOverlay.css";
import BookCard from "./BookCard";

function SearchOverlay({ searchTerm, onChange, results, onClose }) {
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
          {results.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
