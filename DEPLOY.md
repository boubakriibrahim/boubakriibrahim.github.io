# Deployment

The site is hosted on Vercel, connected to this repository's `main` branch. Every push to `main` builds and deploys production.

Project settings:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Web Analytics: enabled. `src/site.js` loads the vendored `@vercel/analytics` module from `assets/vendor/`.

Domains: `ibrahimboubakri.me` is the production domain, and `www.ibrahimboubakri.me` redirects to it with a 308.

Before pushing, run the same checks locally:

```bash
npm ci
npm run build
npm run check
```

`SITE_URL` (default `https://ibrahimboubakri.me`) sets the canonical host used in metadata, the sitemap and `robots.txt`. Set it as an environment variable only if the production domain changes.
