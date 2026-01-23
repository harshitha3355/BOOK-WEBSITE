import './BlogCard.css';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-img" />
      <div className='details'>
        <h2 className="blog-title">{blog.title}</h2>
        <h2 className='blog-author'>by {blog.author}</h2>
        <p className='blog-content'>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogCard;