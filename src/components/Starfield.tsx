import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/hooks";
import type { Theme } from "../lib/theme";

type Star = { x: number; y: number; r: number; a: number; depth: number };

const DENSITY = 1 / 9000; // stars per px²

/**
 * A sparse, still sky. It only redraws on scroll (slight parallax), resize,
 * and theme change. Star color comes from the --star / --star-alpha tokens:
 * white points on black in dark mode, ink dots on paper in light mode.
 */
export default function Starfield({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const redraw = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = prefersReducedMotion();
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let raf = 0;

    const seed = () => {
      stars = Array.from({ length: Math.round(w * h * DENSITY) }, () => {
        const depth = Math.random() ** 2 * 0.9 + 0.1;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.3 + depth * 0.8,
          a: 0.2 + depth * 0.55,
          depth,
        };
      });
    };

    const draw = () => {
      raf = 0;
      const scroll = reduced ? 0 : window.scrollY;
      // Stars step back once you leave the hero so they never compete with text.
      const dim = 1 - 0.5 * Math.min(1, window.scrollY / h);
      const css = getComputedStyle(document.documentElement);
      const rgb = css.getPropertyValue("--star").trim() || "235, 232, 225";
      const tone = Number.parseFloat(css.getPropertyValue("--star-alpha")) || 1;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = `rgb(${rgb})`;
      for (const s of stars) {
        let y = (s.y - scroll * 0.04 * s.depth) % h;
        if (y < 0) y += h;
        ctx.globalAlpha = s.a * dim * tone;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const prevW = w;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Mobile browsers change the height as the URL bar hides; only reseed on width.
      if (w !== prevW || stars.length === 0) seed();
      draw();
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    redraw.current = draw;
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    redraw.current();
  }, [theme]);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
