# Colorado Commercial Cooling Systems

Static HTML/CSS/JavaScript website prepared for GitHub and Netlify. The approved design, page copy, logo, image selections, responsive layouts, and hero treatments are retained from the final website package.

## Project structure

- `index.html` — home page and Netlify entry point
- `*.html` — individual interior pages
- `css/styles.css` — site-wide styling
- `js/site.js` — responsive navigation behavior
- `images/` — local image and logo assets
- `thank-you.html` — successful contact-form destination
- `netlify.toml` — publishes the repository root with no build step

## Preview locally

Opening `index.html` directly works, but a local web server gives the most accurate preview:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish

Follow [NETLIFY-DEPLOYMENT-GUIDE.md](NETLIFY-DEPLOYMENT-GUIDE.md) to create the GitHub repository, connect it to Netlify, configure the custom domain, and test the project-inquiry form.

The Netlify settings for this package are:

- Production branch: `main`
- Base directory: leave blank
- Build command: leave blank
- Publish directory: `.`

