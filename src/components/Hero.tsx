import { hero, site } from "../content";
import { useReducedMotion } from "../lib/hooks";
import "./Hero.css";

// One planet, one ring, one moon. Ring halves are drawn either side of the
// planet's solid disc so the ring passes behind it.
const CX = 300;
const CY = 300;
const R = 112;
const RING_RX = 236;
const RING_RY = 54;
const TILT = -16;

const ringBack = `M ${CX - RING_RX} ${CY} A ${RING_RX} ${RING_RY} 0 0 1 ${CX + RING_RX} ${CY}`;
const ringFront = `M ${CX + RING_RX} ${CY} A ${RING_RX} ${RING_RY} 0 0 1 ${CX - RING_RX} ${CY}`;
const orbit = `M ${CX - 272} ${CY} A 272 118 0 1 1 ${CX + 272} ${CY} A 272 118 0 1 1 ${CX - 272} ${CY}`;
const d = (s: number) => ({ ["--d" as string]: `${s}s` });

function Planet({ animate }: { animate: boolean }) {
  const ring = `rotate(${TILT} ${CX} ${CY})`;
  const tilt = `rotate(${TILT + 6} ${CX} ${CY})`;

  return (
    <svg className="hero__art" viewBox="0 0 600 600" aria-hidden="true">
      <path className="hero__orbit fade" d={orbit} transform={tilt} style={d(1.8)} />
      <g transform={tilt} className="fade" style={d(2.2)}>
        {animate ? (
          <circle className="hero__moon" r="6">
            <animateMotion dur="60s" repeatCount="indefinite" path={orbit} />
          </circle>
        ) : (
          <circle className="hero__moon" r="6" cx={CX + 190} cy={CY - 84} />
        )}
      </g>
      <path className="draw" pathLength={1} d={ringBack} transform={ring} style={d(0.6)} />
      <circle className="hero__planet draw" pathLength={1} cx={CX} cy={CY} r={R} style={d(0)} />
      <path className="draw" pathLength={1} d={ringFront} transform={ring} style={d(1)} />
    </svg>
  );
}

export default function Hero({ ready }: { ready: boolean }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className={`hero${ready ? " is-inview" : ""}`} data-manual-reveal>
      <div className="hero__inner wrap">
        <div className="hero__art-wrap">
          <Planet animate={!reduced} />
        </div>

        <div className="hero__text">
          <h1 className="hero__name">
            <span className="hero__line">
              <span className="hero__word">Colby</span>
            </span>
            <span className="hero__line">
              <span className="hero__word hero__word--italic">Tomita</span>
            </span>
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <p className="hero__now label">
            {hero.now} · {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}
