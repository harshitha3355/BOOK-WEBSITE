import "./TrendingBlogs.css";
import Line from "./Line.jsx"

function TrendingBlogs({ blogs }) {
  const featuredBlog = blogs[0];
  const sideBlogs = blogs.slice(1,4);
  return (
    <div className="trending-blogs-card">
      {/* LEFT FEATURE BLOG */}
      <div className="blog-card-left">
        <img src={featuredBlog.image} alt={featuredBlog.title} className="blog-img" />
        <div className="details">
          <h2 className="blog-title">{featuredBlog.title}</h2>
          <h2 className="blog-author">by {featuredBlog.author}</h2>
          <p className="blog-content-left">
            {featuredBlog.content}
          </p>
        </div>
      </div>
      <Line/>
      {/* RIGHT BLOG LIST */}
      <div className="blog-card-right">
        {sideBlogs.map((blog) => (
          <div className="side-blog" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="details-right">
              <h2 className="blog-title">{blog.title}</h2>
              <h2 className="blog-author">by {blog.author}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingBlogs;