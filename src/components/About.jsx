import React from "react";
import "./About.css";
import Headshot from "../images/about-headshot.JPG";
import mvvg from "./files/mvvg.pdf";

const About = () => {
  return (
    <>
      <div className="about-body">
        <h1>About Me</h1>
        <div className="about-container">
          <div className="about-text">
            <p>
              I'm passionate about creating software that makes a difference in
              people's lives. I'm currently looking for opportunities to work on
              projects that challenge me and allow me to grow as a developer. I
              have an interest in <b>Data Science, Software Development,</b> and{" "}
              <b>Full-Stack Development.</b>
            </p>
            <p>
              I'm proficient in <b>Java, Python,</b> and <b>C++</b>. I have
              experience with <b>Front-End Development</b> using <b>React</b>{" "}
              and <b>Back-End Development</b> using
              <b> JavaScript</b> and <b>TypeScript</b>. I'm also familiar with{" "}
              <b>SQL and NoSQL</b> databases. I'm currently learning how to
              utilize <b>Machine learning</b> and <b>AI</b> to create
              intelligent applications.
            </p>
          </div>
          <div className="about-right">
            <div className="about-image">
              <img src={Headshot} alt="Colby Tomita - Portfolio" />
            </div>
            <a className="mvvg-link" href={mvvg}>
              MVVG Paper
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
