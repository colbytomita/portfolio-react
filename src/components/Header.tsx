import { useEffect, useRef, useState } from "react";
import { sections, site } from "../content";
import { useScrollLock } from "../lib/hooks";
import type { Theme } from "../lib/theme";
import "./Header.css";

const navItems = sections.filter((s) => s.id !== "top");

type Props = {
  active: string;
  theme: Theme;
  onToggleTheme: () => void;
};

/** Half-filled circle: one icon for both modes, rotated half a turn between them. */
function ThemeIcon() {
  return (
    <svg className="header__theme-icon" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8 1.75 A6.25 6.25 0 0 1 8 14.25 Z" fill="currentColor" />
    </svg>
  );
}

export default function Header({ active, theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="header__bar">
        <a className="header__name" href="#top" onClick={() => setOpen(false)}>
          {site.name}
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {navItems.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__theme"
            data-theme-state={theme}
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <ThemeIcon />
          </button>

          <button
            ref={toggle}
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="header__sheet" hidden={!open}>
        <ul>
          {navItems.map((s, i) => (
            <li key={s.id}>
              <a ref={i === 0 ? firstLink : undefined} href={`#${s.id}`} onClick={() => setOpen(false)}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
