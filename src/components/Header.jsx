import React, { useState } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import Line from './Line';
import books from '../data/books';
import SearchOverlay from './SearchOverlay';

function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => setSearchVisible(prev => !prev);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="site-title">Page Trail</h1>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#books">Books</a>
            <a href="#blog">Blog</a>
            <a href="#fun">Fun</a>
            <a href="#about">About</a>

            <button onClick={toggleSearch} className="search-icon">
              <FaSearch />
            </button>
          </nav>
        </div>
        <Line />
      </header>

      {searchVisible && (
        <SearchOverlay
          searchTerm={searchTerm}
          onChange={handleInputChange}
          results={filteredBooks}
          onClose={toggleSearch}
        />
      )}
    </>
  );
}

export default Header;
