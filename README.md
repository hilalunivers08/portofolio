# Happier

A personal portfolio site with a Star Wars-inspired theme: a starry sky, an
animated Millennium Falcon, and a short intro sequence on first load.

## Features

- Starfield background with twinkling stars.
- Millennium Falcon with a floating (drift) animation.
- Clickable Falcon that reveals a minimal text navigation menu.
- "Where you headed visitor?" speech bubble that reacts to scroll direction.
- Star Wars-style intro screen that fades out automatically.
- About section with smooth in-page navigation.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Plain CSS (no UI library)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  App.tsx        # Main app, starfield, Falcon, intro, navigation
  index.css      # All styling
  main.tsx       # Entry point
  assets/        # Images (Millennium Falcon, etc.)
```

## Notes

- The intro screen only locks scrolling while it is visible.
- Navigation menu closes on outside click, `Esc`, link click, or scroll.