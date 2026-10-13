import { projects } from "../content";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap section__grid">
        <h2 className="section__label">Projects</h2>

        <ol className="projects">
          {projects.map((p) => (
            <li key={p.title} className="project" data-reveal>
              <div className="project__head">
                <h3 className="project__title">{p.title}</h3>
                <span className="label">{p.year}</span>
              </div>
              <p className="project__tagline">{p.tagline}</p>
              <p className="project__body">{p.body}</p>
              <div className="project__foot">
                <span className="project__stack">{p.stack}</span>
                {p.link ? (
                  <a className="project__link text-link" href={p.link.href} target="_blank" rel="noreferrer">
                    {p.link.label} ↗
                  </a>
                ) : (
                  <span className="project__link label">Private</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
