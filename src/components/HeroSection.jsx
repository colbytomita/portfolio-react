import React from "react";
import heroHeadshot from "../images/hero-headshot.JPG";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-body">
        <div className="hero-container">
          {/* insert and image for my hero sections here */}
          <div className="hero-image">
            <img src={heroHeadshot} alt="Colby Tomita - Portfolio" />
          </div>

          <div className="hero-text">
            <h1>Hi, I'm Colby Tomita</h1>
            <p>
              I'm a recent <b>Software Engineer</b> grad, currently
            </p>
            <p>
              working as a <b>Systems Analyst</b> at
            </p>
            <p>
              <b>Kamehameha Schools.</b>
            </p>
            {/* <a href="#about-me" className="btn">
              About Me
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
