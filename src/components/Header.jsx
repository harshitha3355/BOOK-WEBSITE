import React, { useState } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Line from './Line';
import books from '../data/books';
import blogs from '../data/blogs';
import fun from '../data/fun';
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

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const filteredFun = fun.filter(f =>
    f.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  console.log(filteredBooks, filteredBlogs, filteredFun);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="site-title">Page Trail</h1>

          <nav className="nav">
            <Link to="/" className='nav-opt'>Home</Link>
            <Link to="/books" className="nav-opt">Books</Link>
            <Link to="/blog" className="nav-opt">Blog</Link>
            <Link to="/fun" className="nav-opt">Fun</Link>
            <Link to="/about" className="nav-opt">About</Link>
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
          filteredBooks={filteredBooks}
          filteredFun={filteredFun}
          filteredBlogs={filteredBlogs}
          onClose={toggleSearch}
        />
      )}
    </>
  );
}

export default Header;
