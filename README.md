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

Projects come from the previous public site. Work experience and the downloadable résumé use the supplied 2026 résumé, including the current Senior Software Engineer role at Bloomberg and previous roles at Capital One, Gridology, and Hutyra Research Lab. The photography gallery contains 23 original photographs organized into Japan (July 2026), Switzerland (June 2025), Steamboat (March 2026), Los Angeles (July 2026), and Elsewhere. Browser-ready JPEGs include 1400px gallery versions and 2400px viewer versions, retaining original proportions and colors. HEIC originals were converted to JPEG. Original files remain untouched outside the repository; published copies omit EXIF metadata. Film studies remain optional and disabled by default.

To add photographs, place web-ready versions in `assets/photos/` and update the `photos` array in `app.js` with `src`, `fullSrc`, `title`, `category`, `collection`, `alt`, `width`, and `height`. Collection counts update automatically. The gallery is grouped chronologically, with a sticky timeline showing location, month, and year. Clicking a timeline stop scrolls to that collection; the active stop follows scrolling. The Elsewhere photos use their original EXIF capture months (August, September, and October 2026). Published JPEGs remain metadata-free.

Typography uses DM Sans and IBM Plex Mono from Google Fonts, with system fallbacks, plus Georgia.
