import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-content">
        <span className="blog-card-id">#{blog.id}</span>

        <h2 className="blog-card-title">{blog.title}</h2>

        <p className="blog-card-summary">
          {blog.summary}
        </p>

        <p className="blog-card-body">
          {blog.body}
        </p>

        <button className="read-more">
          Read More <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;