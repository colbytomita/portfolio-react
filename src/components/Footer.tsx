import { site } from "../content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap rule footer__row">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href={site.source} target="_blank" rel="noreferrer">
          Source ↗
        </a>
        <a href="#top">Top ↑</a>
      </div>
    </footer>
  );
}
