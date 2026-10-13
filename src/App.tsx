import { useEffect, useState } from "react";
import { sections } from "./content";
import { useActiveSection, useRevealOnScroll } from "./lib/hooks";
import { useTheme } from "./lib/theme";
import FilmOverlay from "./components/FilmOverlay";
import Starfield from "./components/Starfield";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionIds = sections.map((s) => s.id);

export default function App() {
  const [ready, setReady] = useState(false);
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();

  useRevealOnScroll(true);

  // Start the hero one frame after mount so its entrance transitions run.
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Starfield theme={theme} />
      <Header active={active} theme={theme} onToggleTheme={toggle} />

      <div className="page">
        <main>
          <Hero ready={ready} />
          <About />
          <Work />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      <FilmOverlay />
    </>
  );
}
