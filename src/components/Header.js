import "./Header.css";
import React from 'react';

function Header ({ content }) {
    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{content.heading}</h1>
                <p>{content.text}</p>
            </div>
         </div>
    );
  }

export default Header