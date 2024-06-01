import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import Project1 from "../images/reservoir-project.png";
import Project2 from "../images/react-project.png";
import PythonImg from "../images/python.png";
import DjangoImg from "../images/django.png";
import JavaScriptImg from "../images/java-script.png";
import ReactImg from "../images/react.png";

const Projects = () => {
  return (
    <>
      <div className="project-body">
        <h1>Projects</h1>
        <div className="project-container">
          <ProjectCard
            name="Water Reservoir Project"
            image={Project1}
            technologies={[PythonImg, DjangoImg]}
            link="https://github.com/colbytomita/water_reservoir_ml_predictor"
          />
          <ProjectCard
            name="Personal Portfolio"
            image={Project2}
            technologies={[JavaScriptImg, ReactImg]}
            link="https://github.com/colbytomita/portfolio-react"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
