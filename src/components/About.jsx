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
              I'm passionate about leveraging technology to solve complex
              problems and drive impactful solutions. My expertise lies in{" "}
              <b>Data Engineering, Cloud Computing,</b> and{" "}
              <b>Software Development</b>. I’m excited about working on projects
              that challenge me and contribute to business success through
              scalable and innovative systems.
            </p>
            <p>
              I’m proficient in <b>Python, SQL, Java,</b> and <b>C++</b>, with
              hands-on experience in <b>Data Pipeline Development</b> and{" "}
              <b>Cloud Platforms</b> like <b>Azure</b> and <b>AWS</b>. I’ve
              built solutions using <b>React</b> for front-end development and{" "}
              <b>Django</b> for back-end frameworks. Additionally, I’ve worked
              extensively with <b>PostgreSQL</b> and implemented machine
              learning models with high accuracy.
            </p>
          </div>
          <div className="about-right">
            <div className="about-image">
              <img src={Headshot} alt="Colby Tomita - Portfolio" />
            </div>
            <a
              className="mvvg-link"
              href={mvvg}
              target="_blank"
              rel="noreferrer">
              MVVG Paper
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
