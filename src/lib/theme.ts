import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { prefersReducedMotion } from "./hooks";

export type Theme = "light" | "dark";

const KEY = "theme";
const LIGHT_QUERY = "(prefers-color-scheme: light)";
const META_COLOR: Record<Theme, string> = { dark: "#060606", light: "#efede6" };

function savedTheme(): Theme | null {
  try {
    const t = localStorage.getItem(KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia(LIGHT_QUERY).matches ? "light" : "dark";
}

function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t;
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", META_COLOR[t]);
}

/**
 * The current theme plus a toggle. index.html has already set data-theme
 * before first paint; this hook picks it up from there. Until someone
 * toggles, the page keeps following the system setting.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme | undefined) ?? savedTheme() ?? systemTheme(),
  );

  useEffect(() => {
    const mq = window.matchMedia(LIGHT_QUERY);
    const onChange = () => {
      if (savedTheme()) return;
      const t = systemTheme();
      applyTheme(t);
      setTheme(t);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Private mode: the switch still works, it just won't be remembered.
    }
    const swap = () => {
      applyTheme(next);
      flushSync(() => setTheme(next));
    };
    // Crossfade where supported; instant everywhere else.
    if (document.startViewTransition && !prefersReducedMotion()) {
      document.startViewTransition(swap);
    } else {
      swap();
    }
  }, [theme]);

  return { theme, toggle };
}
