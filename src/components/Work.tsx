import { jobs, tools } from "../content";
import "./Work.css";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap section__grid">
        <h2 className="section__label">Work</h2>

        <div>
          <ol className="jobs">
            {jobs.map((j) => (
              <li key={j.org} className="job" data-reveal>
                <span className="job__dates label">{j.dates}</span>
                <div>
                  <h3 className="job__role">
                    {j.role} <span className="job__org">· {j.org}</span>
                  </h3>
                  <p className="job__text">{j.text}</p>
                  {j.points && (
                    <ul className="job__points">
                      {j.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <dl className="tools" data-reveal>
            {tools.map(([k, v]) => (
              <div key={k} className="tools__row">
                <dt className="label">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
