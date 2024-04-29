import React from "react";
import "./Resume.css";
import resumePdf from "./files/resume.pdf";

const Resume = () => {
  return (
    <>
      <div className="resume-body">
        <h1>Resume</h1>
        <div className="resume-container">
          <h2>Download my resume!</h2>
          <a className="resume-link" href={resumePdf} download>
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
