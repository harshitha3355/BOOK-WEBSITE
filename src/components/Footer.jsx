import React from "react";
import './Footer.css';
import { FaPinterest, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from "react-router-dom";
import Line from "./Line";

function Footer(){
    return(
        <footer className="footer">
            <Line />
            <div className="foot-container">
                <div className="title-medialinks">
                    <Link to="/" className="site-title">Page Trail</Link>
                    <div className="media-icons">
                        <FaPinterest size={20}/>
                        <FaYoutube size={20}/>
                        <FaInstagram size={20}/>
                        <FaLinkedin size={20}/>
                        <SiGmail size={20}/>
                        <FaFacebook size={20}/>
                    </div>
                </div>
                <div className="quote">
                    <blockquote>
                        "Page Trail is where stories meet readers discover new releases, explore bookish insights. From fresh releases to fun challenges, Page Trail brings the magic of reading to life, one book at a time."
                    </blockquote>
                </div>
                <div className="quicklinks">
                    <h3 id="heading">Quick Links</h3>
                    <ul id="ql-list">
                        <li><Link to="/about" className='ql-list-dec'>About</Link></li>
                        <li><Link to="/blog" className='ql-list-dec'>Blog</Link></li>
                        <li><Link to="/books" className='ql-list-dec'>Books</Link></li>
                        <li><Link to="/fun" className='ql-list-dec'>Fun</Link></li>
                        <li><Link to="/privacy-policy" className='ql-list-dec'>Privacy Policy</Link></li>
                        <li><Link to="/terms-and-conditions" className='ql-list-dec'>Terms and Conditions</Link></li>
                    </ul>
                </div>
            </div>
           <p id="end-line">
            &copy;2025 <Link to="/" className='ql-list-dec'> Page Trail </Link> | <Link to="/terms-and-conditions" className='ql-list-dec'> Terms and Conditions </Link> | <Link to="/privacy-policy" className='ql-list-dec'> Privacy Policy </Link> </p>
        </footer>
    )
}

export default Footer;