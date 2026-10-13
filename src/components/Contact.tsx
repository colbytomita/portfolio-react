import { useState } from "react";
import { site } from "../content";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is still on screen to select.
    }
  };

  return (
    <section id="contact" className="section">
      <div className="wrap section__grid">
        <h2 className="section__label">Contact</h2>

        <div data-reveal>
          <p className="contact__sub">Email is the fastest way to reach me.</p>
          <a className="contact__email text-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <ul className="contact__links">
            <li>
              <button type="button" onClick={copy}>
                {copied ? "Copied" : "Copy email"}
              </button>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </li>
            {site.resume && (
              <li>
                <a href={site.resume} target="_blank" rel="noreferrer">
                  Resume ↗
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
