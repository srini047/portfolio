import "./AboutContent.css";
import React from "react";
// import { NavLink } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a Junior at PSG Institute of Technology and Applied Research
          pursuing a B.E. in Electronics and Communication Engineering📚. A Data
          Science & Machine Learning Enthusiast♥️. I am a life-long learner📖. I
          always try to grab all the opportunities my way and participate in
          many events without being deprived of the fact of losing💪. I also
          write technical blogs in the areas of DS, ML, & WebDev👩‍💻. I like to
          implement what I learned through building projects and participating
          in hackathons👨‍🔧. I am exploring areas of Deep Learning and Web Dev as
          well🧬. I like to play Football a lot ⚽. I am learning German as
          well🗣️.
        </p>
        <a href="https://github.com/srini047/portfolio/blob/master/src/assets/Resume_Sriniketh.pdf" target="_blank" rel="noreferrer">
          <button className="btn">Resume</button>
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <img src="https://user-images.githubusercontent.com/81156510/230940009-bfcfa80e-4a9b-4e4f-842d-d3bb1f5dd521.png" alt="tech stack" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
