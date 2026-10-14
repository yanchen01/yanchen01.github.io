# Yan Chen — personal portfolio

A static portfolio with separate software engineering and photography sections. Built with HTML, CSS, and JavaScript. No framework or build dependencies are needed to preview or build it.

## Local preview

Open `index.html` directly in a browser, or use Node.js 22 or later:

```sh
npm start
```

Visit http://127.0.0.1:4317. For a different port, run `PORT=4318 npm start`. The server reads the source files directly; refresh the browser after editing. No build or dependency installation is needed for previewing the site.

```sh
npm test
```

## Files

- `index.html`: structure and content
- `style.css`: responsive design and light/dark themes
- `app.js`: project data, gallery filtering, optional film studies, and dialogs
- `assets/`: photographs, favicon, and current résumé
- `.nojekyll`: tells GitHub Pages to serve the static files directly
- `scripts/`: optional local server and integrity checks

The appearance toggle remembers your selection across both sections and reloads. Before choosing a theme, work defaults to dark and photography to light. The journal preserves original image proportions; the contact sheet contains full photographs within uniform frames. The viewer follows the active filter and supports arrow keys, Escape, and touch swipes.

## GitHub Pages — no build required

The repository root is a complete static website. GitHub Pages can render `index.html`, CSS, JavaScript, and the assets directly. Navigation uses URL fragments, so both sections work without server-side routing.

This repository currently publishes the root of the `gh-pages` branch. Keep that setting and publish only the public site files with:

```sh
npm ci
npm run deploy
```

There is no `build` or `predeploy` step. The deploy command copies only `index.html`, `style.css`, `app.js`, `robots.txt`, and `assets/` to the `gh-pages` branch and adds `.nojekyll`. It excludes repository metadata, development scripts, documentation, and dependencies. Only run it when you intend to update the live site.

Alternatively, after this PR is merged, configure **Settings → Pages → Deploy from a branch → master → /(root)**. The root files can be served as-is; no Actions workflow or generated build directory is needed. Keep the current Pages source until merging so the existing live site continues to work.

## Content to update

Projects come from the previous public site. Work experience and the downloadable résumé use the supplied 2026 résumé, including the current Senior Software Engineer role at Bloomberg and previous roles at Capital One, Gridology, and Hutyra Research Lab. The photographs are **sample imagery, not Yan's work**, and are labeled accordingly. Replace the `photos` array and assets with original photographs. Film studies are illustrative CSS treatments inspired by Classic Chrome and Acros; they are optional and disabled by default.

Sample image sources:

- https://images.unsplash.com/photo-1519501025264-65ba15a82390
- https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b
- https://images.unsplash.com/photo-1518837695005-2083093ee35b
- https://images.unsplash.com/photo-1464822759023-fed622ff2c3b
- https://images.unsplash.com/photo-1519608487953-e999c86e7455

Typography uses DM Sans and IBM Plex Mono from Google Fonts, with system fallbacks, plus Georgia.
