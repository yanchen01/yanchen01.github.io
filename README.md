# Yan Chen — personal portfolio

A static portfolio with separate software engineering and photography sections. Built with HTML, CSS, and JavaScript. No framework or build dependencies are needed to preview or build it.

## Local development

Requires Node.js 22 or later.

```sh
npm start
```

Open http://127.0.0.1:4317. To use another port, run `PORT=4318 npm start`. After editing files, restart the server to rebuild the preview.

```sh
npm test
npm run build
```

`build/` contains the complete static website and is ignored by Git. The build includes `.nojekyll` for GitHub Pages.

## Files

- `site/index.html`: structure and page content
- `site/style.css`: responsive design and light/dark themes
- `site/app.js`: project data, gallery filtering, optional film studies, and dialog interactions
- `site/assets/`: photographs and archived résumé
- `scripts/`: build, preview server, and integrity checks

The appearance toggle remembers the selected theme across both sections and reloads. Before choosing a theme, work defaults to dark and photography to light. The photo journal preserves original image proportions; the contact sheet contains full photographs within uniform frames. The viewer follows the active filter and supports arrow keys, Escape, and touch swipes.

## Publishing

The repository currently publishes the `gh-pages` branch from its root. This redesign preserves that setup. To deliberately publish the current checkout:

```sh
npm ci
npm run deploy
```

The deployment command builds the site, then publishes `build/` to `gh-pages`. Opening or merging a PR does not execute this command. Run `npm test` and `npm run build` to validate changes before publishing.

## Content to update

The projects and historical roles come from the previous public site and its December 2020 résumé. Add current experience and a current résumé before launch. The photographs are **sample imagery, not Yan's work**, and are labeled accordingly. Replace the `photos` array and assets with original photographs. Film studies are illustrative CSS treatments inspired by Classic Chrome and Acros; they are optional and disabled by default.

Sample image sources:

- https://images.unsplash.com/photo-1519501025264-65ba15a82390
- https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b
- https://images.unsplash.com/photo-1518837695005-2083093ee35b
- https://images.unsplash.com/photo-1464822759023-fed622ff2c3b
- https://images.unsplash.com/photo-1519608487953-e999c86e7455

Typography uses DM Sans and IBM Plex Mono from Google Fonts, with system fallbacks, plus Georgia.
