import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import Line from './Line';
import {useState} from 'react';

function Header(){
    const [searchVisible, setSearchVisible]=useState(false);
    const [searchTerm, setSearchTerm]=useState(' ');

    const toggleSearch=()=>{setSearchVisible(!searchVisible)};

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <header className='header'>
            <div className='header-container'>
                <h1 className="site-title">Page Trail</h1>
                <nav className="nav"> 
                    <a href="#home">Home</a>
                    <a href="#books">Books</a>
                    <a href="#blog">Blog</a>
                    <a href="#fun">Fun</a>
                    <a href="#about">About</a>
                    <button onClick={toggleSearch} className="search-icon" aria-label="Toggle Search Input">
                        <FaSearch id='search-icon' />
                    </button>
                </nav>
            </div>
            <Line />
            {searchVisible && (
                <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
                autoFocus 
                />
            )}
        </header>
    );
}
export default Header;