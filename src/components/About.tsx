import { about } from "../content";
import portrait from "../assets/portrait.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap section__grid">
        <h2 className="section__label">About</h2>

        <div>
          <p className="about__title" data-reveal>
            {about.title}
          </p>

          <div className="about__row">
            <div className="about__text" data-reveal>
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <figure className="about__photo" data-reveal>
              <img
                src={portrait}
                alt="Black and white portrait of Colby Tomita standing outdoors under trees"
                width={900}
                height={1348}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
