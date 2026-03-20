import "./TrendingBlogs.css";
import Line from "./Line.jsx";
import { Link } from "react-router-dom";

function TrendingBlogs({ blogs }) {
  const featuredBlog = blogs[0];
  const sideBlogs = blogs.slice(1,4);

  return (
    <div className="trending-blogs-card">

      {/* LEFT FEATURE BLOG */}
      <Link to={`/blog/${featuredBlog.id}`} className="bg-card-left">
        <img src={featuredBlog.image} alt={featuredBlog.title} className="bg-img" />
        <div className="details">
          <h2 className="bg-title">{featuredBlog.title}</h2>
          <h2 className="bg-author">by {featuredBlog.author}</h2>
          <p className="bg-content-left">
            {featuredBlog.content}
          </p>
        </div>
      </Link>

      <Line/>

      {/* RIGHT BLOG LIST */}
      <div className="bg-card-right">
        {sideBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} className="side-blog" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="details-right">
              <h2 className="bg-title">{blog.title}</h2>
              <h2 className="bg-author">by {blog.author}</h2>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default TrendingBlogs;