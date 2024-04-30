import React from "react";
import StrengthCard from "./StrengthCard";
import "./Strengths.css";
import StrengthIcon1 from "../images/support.png";
import StrengthIcon2 from "../images/helping.png";
import StrengthIcon3 from "../images/growth.png";
import StrengthIcon4 from "../images/future.png";
import StrengthIcon5 from "../images/band-aid.png";
import Top5Report from "./files/SF_TOP_5.pdf";
import SignatureThemesReport from "./files/signature-theme.pdf";

const Strengths = () => {
  return (
    <>
      <div className="strengths-body">
        <div className="strengths-title">
          <h1>My Strengths</h1>
          <p>via. StrengthsFinder 2.0</p>
        </div>
        <div className="strengths-container" id="first-row">
          <StrengthCard
            title="Relator"
            image={StrengthIcon1}
            description="I enjoy close relationships with others. I find deep satisfaction in working hard with friends to
            achieve a goal."
          />
          <StrengthCard
            title="Empathy"
            image={StrengthIcon2}
            description="I can sense other people’s feelings by imagining myself in others’ lives or situations."
          />
          <StrengthCard
            title="Developer"
            image={StrengthIcon3}
            description="I can recognize and cultivate the potential in others. I can spot the signs of each small improvement and
            derive satisfaction from evidence of progress."
          />
        </div>
        <div className="strengths-container" id="second-row">
          <StrengthCard
            title="Futuristic"
            image={StrengthIcon4}
            description="I'm inspired by the future and what could be. I energize others with my visions of the future."
          />
          <StrengthCard
            title="Restorative"
            image={StrengthIcon5}
            description="I'm adept at dealing with problems. I'm good at figuring out what is wrong and resolving it. "
          />
        </div>
        <div className="strengths-links">
          <h2>Find out more about my strengths here.</h2>
          <div className="links">
            <a
              target="_blank"
              className="strength-link"
              href={Top5Report}
              rel="noreferrer">
              Top 5 Report
            </a>
            <a
              target="_blank"
              className="strength-link"
              href={SignatureThemesReport}
              rel="noreferrer">
              Signature Themes Report
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strengths;
