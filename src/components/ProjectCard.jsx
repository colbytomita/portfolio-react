import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card-body">
        <h2>{props.name}</h2>
        <div className="project-card-container">
          <div className="image-container">
            <img className="cover-image" src={props.image} alt="Project" />
          </div>
          <div>
            {/* <p>Technologies Used</p> */}
            {props.technologies && (
              <div className="icon-container">
                {props.technologies.map((technology) => (
                  <img
                    className="technology-icons"
                    src={technology}
                    alt="icon"></img>
                ))}
              </div>
            )}
          </div>
          <a className="github-link" href={props.link}>
            Github Link
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
