import './BlogCard.css';

function BlogCard({ blog }) {
  console.log('Blog content:', blog.content); // Check what this actually is
  
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-img" />
      <div className='details'>
        <h2 className="blog-title">{blog.title}</h2>
        <h2 className='blog-author'>by {blog.author}</h2>
        <p className='blog-content'>
          {typeof blog.content === 'string' 
            ? blog.content 
            : JSON.stringify(blog.content)}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;