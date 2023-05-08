import "./BlogCard.css";
import React from "react";
import BlogCard from "./BlogCard";
import BlogPostData from "./BlogPostData";

const Blog = () => {
  return (
    <div className="blog">
      <div className="card-container">
          {BlogPostData.map((value, index) => {
            return (
              <BlogCard
                key={index}
                title={value.title}
                platform={value.platform}
                tags={value.tags}
                link={value.link}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
