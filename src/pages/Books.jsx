import React, { useState } from "react";
import "./Books.css";
import BookCard from "../components/BookCard";
import Subtitle from "../components/Subtitle";
import Line from "../components/Line";
import books from "../data/books";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Books() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract categories
  const categories = [
    "All Books",
    ...new Set(books.flatMap((book) => book.categories || [])),
  ];

  // Filter books based on selected category
  const filteredBooks =
    selectedCategory === "All Books"
      ? books
      : books.filter(
          (book) =>
            book.categories &&
            book.categories.includes(selectedCategory)
        );

  const topRecommendations = books
    .filter((book) => book.isRecommended)
    .sort((a, b) => b.recommendationScore - a.recommendationScore)
    .slice(0, 8);

  return (
    <>
      <Header />
      <h2 className="book-subtitle">All Categories</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <Line />
      <Subtitle heading={selectedCategory} />
      <div className="all-books-section">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Subtitle heading="Top Recommendations" />
      <div className="recommendations-section">
        {topRecommendations.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Books;