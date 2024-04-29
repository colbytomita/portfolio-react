import React from "react";
import StrengthCard from "./StrengthCard";
import "./Strengths.css";
import StrengthIcon1 from "../images/support.png";
import StrengthIcon2 from "../images/helping.png";
import StrengthIcon3 from "../images/growth.png";
import StrengthIcon4 from "../images/future.png";
import StrengthIcon5 from "../images/band-aid.png";

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
              rel="noreferrer"
              className="strength-link"
              href="https://content.reportdeliverables.gallup.com/export-engine/users/clients/501/users/90448701/sf/sf_top_5/pdf/2947932/joiner/output/SF_TOP_5.pdf?AQICAHjZZyAeIGLjM/en1OZA2jJV6l83VcK6KINFslip5MnI/QFr0UapQOv62VFVUsyH/WXzAAAA8jCB7wYJKoZIhvcNAQcGoIHhMIHeAgEAMIHYBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDCrsrKvIxfPVStxeVgIBEICBqgR5eUDfalaWhpQ5XTaW7wKrcsy+iHbAf7WY2fbg+oJ2hXTx7fr8IYIWfKZv2CDVWBJuswaqmMfrJRDt6K9/L1Sk6kFYUEFAU59RIE5mhc6r71Lgis6ICrCPAkWkEQpIg8l53Yot9ZV+uy1B6+7+haNYHmKdsrXFEXEMsPP8gaAa6O7XTVmHtAE+S2uUJH2Q/XWmZVsj5xHF4ld1yqL07ZqArdhTQ5WZrZMf">
              Top 5 Report
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="strength-link"
              href="https://content.reportdeliverables.gallup.com/batch-service/job-results/SFPDFJobProcessor/pdf/signature-theme-501-0-94525627-20240428030523626118036-ZwlevE.pdf?AQICAHjZZyAeIGLjM/en1OZA2jJV6l83VcK6KINFslip5MnI/QHu/GUB9o6VvhoAlb5aS9ztAAABAjCB/wYJKoZIhvcNAQcGoIHxMIHuAgEAMIHoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDFzyY9yqzC0S0h39ZwIBEICBuqOQzZt/cmPkcxIzgDEwFeIi9OhRHL3vljc3w5zswkL4LpPaiWgVXfA7jOG93O0d15qJ1KeQYCXcyMxw01isg0s/wN1+r5f/qJqgxBx899Juj+y9nhIMseLKiVEuSwyPkcNhNugyJd9wYGwN5xCKL/b/xEmQFQ00TD0Em4ijGqYenTqpoqXaiHdUYXk3xRSQ0G0OgULHWPspct11YLQD839YRLI98btkGDZu7JwPEhDU8H4TPUAblX6Y3Q==">
              Signature Themes Report
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strengths;
