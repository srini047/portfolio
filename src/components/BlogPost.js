import "./BlogPost.css";
import React from 'react'
// import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="blog">
        <h1 className="blog-heading">Blog posts</h1>
        <div className="card-container">
            <div className="card">
                <h3>- Blog 1 -</h3>
                <span className="bar"></span>
                <p className="btc">- Title 1 -</p>
                <p>- Tag 1 -</p>
                <p>- Tag 2 -</p>
                <p>- Tag 3 -</p>
                <p>- Tag 4 -</p>
                <p>- Tag 5 -</p>
                <a href="/" target="_blank" className="btn" rel="noreferrer">
                    READ MORE...
                </a>
            </div>

            <div className="card">
                <h3>- Blog 2 -</h3>
                <span className="bar"></span>
                <p className="btc">- Title 2 -</p>
                <p>- Tag 1 -</p>
                <p>- Tag 2 -</p>
                <p>- Tag 3 -</p>
                <p>- Tag 4 -</p>
                <p>- Tag 5 -</p>
                <a href="/" target="_blank" className="btn" rel="noreferrer">
                    READ MORE...
                </a>
            </div>

            <div className="card">
                <h3>- Blog 3 -</h3>
                <span className="bar"></span>
                <p className="btc">- Title 3 -</p>
                <p>- Tag 1 -</p>
                <p>- Tag 2 -</p>
                <p>- Tag 3 -</p>
                <p>- Tag 4 -</p>
                <p>- Tag 5 -</p>
                <a href="/" target="_blank" className="btn" rel="noreferrer">
                    READ MORE...
                </a>
            </div>
        </div>
    </div>
  )
}

export default BlogPost