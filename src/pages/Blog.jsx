import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subtitle from '../components/Subtitle';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs'; 
import './Blog.css';

function Blog(){
    const newsBlogs = blogs.filter(blog => blog.type === 'news');
    return(
        <>
            <Header/>
            <Subtitle heading={'Blogs'}/>
            <div className="blog-section">
                {newsBlogs.map((bl) => (
                    <BlogCard key={bl.id} blog={bl} />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Blog;