import { useEffect, useState } from "react";
import "./FilmOverlay.css";

/** Builds one tile of monochrome noise; the CSS shifts it around to animate grain. */
function makeGrainTile(size = 200): string {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const v = Math.random() * 255;
    d[i] = v;
    d[i + 1] = v;
    d[i + 2] = v;
    d[i + 3] = 26;
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL("image/png");
}

/** Film grain and a soft vignette. Nothing else. */
export default function FilmOverlay() {
  const [tile, setTile] = useState("");

  useEffect(() => {
    setTile(makeGrainTile());
  }, []);

  return (
    <div className="film" aria-hidden="true">
      <div className="film__grain" style={tile ? { backgroundImage: `url(${tile})` } : undefined} />
      <div className="film__vignette" />
    </div>
  );
}
