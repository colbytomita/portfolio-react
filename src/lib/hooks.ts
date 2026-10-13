import { useEffect, useState } from "react";

const REDUCED = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCED).matches;
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia(REDUCED);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Adds .is-inview (once) to every [data-reveal] and [data-inview] element as it
 * scrolls into view. Elements inside the hero are left alone: the hero is
 * started by the intro leader, not by scroll.
 */
export function useRevealOnScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-inview]"),
    ).filter((el) => !el.closest("[data-manual-reveal]"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
}

/** The id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    const root = document.documentElement;
    if (locked) root.classList.add("is-locked");
    else root.classList.remove("is-locked");
    return () => root.classList.remove("is-locked");
  }, [locked]);
}
