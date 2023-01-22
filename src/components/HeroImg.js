import React from 'react';
import './HeroImg.css';
import IntroImg from "../assets/images/intro.jpeg";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="https://lexica.art/prompt/e42a6121-8433-40a6-91c6-e3fcbb6d6b7b" />
      </div>
      <div className="content">
        <p><i>I am a passionate developer...</i></p>
        <h1>ML & Web Developer</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg