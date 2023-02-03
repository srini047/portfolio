import "./ProjectCard.css";
import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img
        src={props.imgsrc}
        alt="img"
      />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-buttons">
        <a href={props.view} target="_blank" className="btn" rel="noreferrer">
            View
          </a>
          <a href={props.source} target="_blank" className="btn" rel="noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
