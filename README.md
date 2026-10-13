# colbytomita · portfolio

Personal site. Black and white and mostly empty: a sparse starfield, light film grain, and one single-line drawing of a planet. The type does the rest.

Built with React 19, TypeScript and Vite. No UI library; every style is hand-written CSS.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build into dist/
npm run preview   # serve dist/ locally
```

## Where things live

| What | File |
|---|---|
| All copy (bio, work, tools, projects) | `src/content.ts` |
| Hero and the planet drawing | `src/components/Hero.tsx` |
| Film grain + vignette | `src/components/FilmOverlay.tsx` |
| Starfield | `src/components/Starfield.tsx` |
| Design tokens (color, type, spacing), both themes | `src/styles/global.css` |
| Light/dark toggle logic | `src/lib/theme.ts` |

To show a resume link in the contact section, put the PDF at `public/resume.pdf` and set `resume: "/resume.pdf"` in `src/content.ts`.

## Light and dark

The site follows the visitor's system setting until they click the half-circle toggle in the header; after that their choice is saved in `localStorage`. A small script in `index.html` sets `data-theme` before first paint so there's no flash. Dark is silver-on-black; light is ink on photo paper, with the stars turning into dark dots like a printed star chart.

## Deploy

Hosted on Vercel. `vercel.json` pins the framework to Vite and the output to `dist/`, so the project settings left over from the old Create React App build don't apply.
