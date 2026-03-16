import Header from '../components/Header';
import Footer from '../components/Footer';
import Line from "../components/Line";
import Subtitle from '../components/Subtitle';
import BlogCard from '../components/BlogCard';
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <>
    <Header/>
    <div className="blog-post-container">
        <div className="blog-post-meta">Blog | {blog.type}</div>
      <h1 className="blog-post-title">{blog.title}</h1>
      <div className="blog-post-meta">
        <span className="blog-post-author">by {blog.author}</span> • {blog.date}
      </div>
      <img 
        src={blog.image}
        alt={blog.title}
        className="blog-post-image"
      />
      <div className="blog-post-content">
        <p>{blog.content}</p>
      </div>
   </div>
    <Line/>
    <Subtitle heading={"Recommended"} />
    <div className="blog-section">
        {blogs.slice(4,8).map((bl) => (
            <BlogCard key={bl.id} blog={bl} />
        ))}
    </div>
    <Footer/>
    </>

  );
}

export default BlogPost;