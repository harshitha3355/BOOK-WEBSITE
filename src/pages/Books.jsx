import React, { useState } from "react";
import "./Books.css";
import BookCard from "../components/BookCard";
import Subtitle from "../components/Subtitle";
import Line from "../components/Line";
import books from "../data/books";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedBinding, setSelectedBinding] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filters
  const categories = [
    "All",
    ...new Set(books.flatMap((book) => book.categories || [])),
  ];
  const authors = ["All", ...new Set(books.map((book) => book.author))];
  const genres = [
    "All",
    ...new Set(books.map((book) => book.genre).filter(Boolean)),
  ];
  const bindings = [
    "All",
    ...new Set(books.flatMap((book) => book.binding || [])),
  ];
  const moodThemes = [
    "All",
    ...new Set(books.flatMap((book) => book.moodThemes || [])),
  ];

  // Get top recommendations
  const topRecommendations = books
    .filter((book) => book.isRecommended)
    .sort((a, b) => b.recommendationScore - a.recommendationScore)
    .slice(0, 5);

  // Filter books based on all selected criteria
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      searchTerm === "" ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      (book.categories && book.categories.includes(selectedCategory));

    const matchesAuthor =
      selectedAuthor === "All" || book.author === selectedAuthor;

    const matchesGenre =
      selectedGenre === "All" || book.genre === selectedGenre;

    const matchesBinding =
      selectedBinding === "All" ||
      (book.binding && book.binding.includes(selectedBinding));

    const matchesMood =
      selectedMood === "All" ||
      (book.moodThemes && book.moodThemes.includes(selectedMood));

    return (
      matchesSearch &&
      matchesCategory &&
      matchesAuthor &&
      matchesGenre &&
      matchesBinding &&
      matchesMood
    );
  });

  return (
    <>
      <Header />
      <Subtitle heading="Books" />
      <h2 className="book-subtitle">Book Filter</h2>
      <Line/>
      <h2 className="book-subtitle">All Categories</h2>
      <Line/>
      <div className="recommendations-section">
        <Subtitle heading="Top Recommendations" />
        {topRecommendations.map((book) => (
        <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className="all-books-section">
        <Subtitle heading="All Books" />
        {books.map((book) => (
        <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Books;
