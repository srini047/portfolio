import "./BlogCard.css";
import React from 'react';

const BlogPost = (props) => {
    var values = props.tags.map(function(value, i){
        return (
          <p>{value}</p>
        );
    });
  return (
        <div className="card-container">
            <div className="card">
                <h2>{props.title}</h2>
                <span className="bar"></span>
                <h3>{props.platform}</h3>
                <span className="bar"></span>
                <p>{values}</p>
                <a href={props.link} target="_blank" className="btn" rel="noreferrer">
                    READ MORE...
                </a>
            </div>
        </div>
  )
}

export default BlogPost