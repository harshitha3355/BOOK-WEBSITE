import React, { useState } from 'react';
import './Books.css';
import BookCard from '../components/BookCard';
import Subtitle from '../components/Subtitle';
import books from '../data/books';
import { FaSearch, FaFilter } from 'react-icons/fa';

function Books() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedBinding, setSelectedBinding] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filters
  const categories = ['All', ...new Set(books.flatMap(book => book.categories || []))];
  const authors = ['All', ...new Set(books.map(book => book.author))];
  const genres = ['All', ...new Set(books.map(book => book.genre).filter(Boolean))];
  const bindings = ['All', ...new Set(books.flatMap(book => book.binding || []))];
  const moodThemes = ['All', ...new Set(books.flatMap(book => book.moodThemes || []))];

  // Get top recommendations
  const topRecommendations = books
    .filter(book => book.isRecommended)
    .sort((a, b) => b.recommendationScore - a.recommendationScore)
    .slice(0, 5);

  // Filter books based on all selected criteria
  const filteredBooks = books.filter(book => {
    const matchesSearch = searchTerm === '' || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || 
      (book.categories && book.categories.includes(selectedCategory));

    const matchesAuthor = selectedAuthor === 'All' || 
      book.author === selectedAuthor;

    const matchesGenre = selectedGenre === 'All' || 
      book.genre === selectedGenre;

    const matchesBinding = selectedBinding === 'All' || 
      (book.binding && book.binding.includes(selectedBinding));

    const matchesMood = selectedMood === 'All' || 
      (book.moodThemes && book.moodThemes.includes(selectedMood));

    return matchesSearch && matchesCategory && matchesAuthor && 
           matchesGenre && matchesBinding && matchesMood;
  });

  return (
    <div className="books-page">
      <Subtitle heading="Books"/>
      <div className="book-filter-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button 
            className="filter-toggle-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Book Filter Section - From PDF */}
        {showFilters && (
          <div className="book-filter">
            <h3>Book Filter</h3>
            
            <div className="filter-grid">
              {/* All Categories */}
              <div className="filter-category">
                <h4>All Categories</h4>
                <div className="filter-options">
                  {categories.slice(0, 5).map(category => (
                    <label key={category} className="filter-option">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Author Filter */}
              <div className="filter-category">
                <h4>Author</h4>
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  value={selectedAuthor === 'All' ? '' : selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value || 'All')}
                  className="filter-input"
                />
              </div>

              {/* Binding Filter */}
              <div className="filter-category">
                <h4>Binding</h4>
                <select 
                  value={selectedBinding}
                  onChange={(e) => setSelectedBinding(e.target.value)}
                  className="filter-select"
                >
                  {bindings.map(binding => (
                    <option key={binding} value={binding}>{binding}</option>
                  ))}
                </select>
              </div>

              {/* Genre Filter */}
              <div className="filter-category">
                <h4>Genre</h4>
                <input
                  type="text"
                  placeholder="Enter the genre"
                  value={selectedGenre === 'All' ? '' : selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value || 'All')}
                  className="filter-input"
                />
              </div>
            </div>

            {/* Additional Categories - Second Row from PDF */}
            <div className="additional-categories">
              {categories.slice(5, 10).map(category => (
                <label key={category} className="filter-option inline">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(
                      selectedCategory === category ? 'All' : category
                    )}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>

            <div className="additional-categories">
              {categories.slice(10, 13).map(category => (
                <label key={category} className="filter-option inline">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(
                      selectedCategory === category ? 'All' : category
                    )}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Books by Mood/Theme Section */}
      <div className="mood-section">
        <h3>Books by Mood / Theme</h3>
        <div className="mood-grid">
          <div className="mood-column">
            <h4>Contemporary Fiction</h4>
            <h4>Fantasy</h4>
            <h4>Mystery & Thriller</h4>
            <h4>Romance</h4>
            <h4>Historical Fiction</h4>
          </div>
          <div className="mood-column">
            <h4>Fast-Paced Page-Turners</h4>
            <h4>Magical & Dreamy</h4>
            <h4>Spooky & Atmospheric</h4>
            <h4>Travel & Wanderlust</h4>
          </div>
          <div className="mood-column">
            <h4>Fantasy</h4>
            <h4>Mystery & Thriller</h4>
            <h4>Romance</h4>
            <h4>Historical Fiction</h4>
          </div>
          <div className="mood-column">
            <h4>Fantasy</h4>
            <h4>Mystery & Thriller</h4>
            <h4>Romance</h4>
            <h4>Historical Fiction</h4>
          </div>
        </div>
      </div>

      <div className="recommendations-section">
        <Subtitle heading="Top Recommendations"/>
        <div className="recommendations-grid">
          {topRecommendations.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div className="all-books-section">
        <Subtitle heading="All Books"/>
        <div className="books-grid">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;