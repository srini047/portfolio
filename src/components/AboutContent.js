import "./AboutContent.css";
import React from "react";
// import { NavLink } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          A passionate software and ML developer enthusiastic about the latest
          advancements. Always keen to learn and be curious. I always like to
          upskill myself. Ask me about open-source, AI-ML, software dev, and
          anything in general. Always willing to collaborate and contribute to
          the community. I'm inculcating the habit of reading books. I like to
          play füßall a lot and learning deutsch as well.
        </p>
        <a
          href="https://github.com/srini047/portfolio/blob/master/src/assets/Sriniketh_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Resume</button>
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <img
            src="https://user-images.githubusercontent.com/81156510/230940009-bfcfa80e-4a9b-4e4f-842d-d3bb1f5dd521.png"
            alt="tech stack"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
