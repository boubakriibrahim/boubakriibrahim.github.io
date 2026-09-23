# Ibrahim Boubakri — Engineering Portfolio

A bilingual English/French engineering portfolio built as a small dependency-free static-site generator. It is designed for GitHub Pages, with automated build, validation and deployment on every push to `main`.

## Highlights

- Editorial, restrained UI — no generic AI landing-page styling
- English + French
- Six bilingual technical case studies, including security teaching and ENSI Cyber Range
- Real résumé-based experience, education, skills and certifications
- Public PalletDataGenerator / PyPI links and three security repositories
- Optimized local project previews with image credits and full-size views
- English + French CV PDFs and TeX sources
- Responsive light/dark design
- Keyboard focus, semantic HTML, restrained entrance/hover motion and reduced-motion support
- SEO metadata, JSON-LD, sitemap, robots.txt and social cards
- Zero third-party runtime/build dependencies
- Automated GitHub Pages deployment

## Run locally

Node.js 22+:

```bash
npm run build
npm run check
npm run preview
```

Open `http://localhost:4173`.

No `npm install` is required.

## Deploy to GitHub Pages

This package is configured for the existing profile site:

```text
https://boubakriibrahim.github.io
```

1. Replace the contents of the `boubakriibrahim.github.io` repository with this project.
2. Push to `main`.
3. In GitHub: **Settings → Pages → Source → GitHub Actions**.
4. The included workflow builds, validates and deploys automatically.

If you use another domain, update `SITE_URL` in `.github/workflows/deploy.yml`.

## Structure

```text
.
├── .github/workflows/deploy.yml
├── docs/SKILL.md
├── public/
│   ├── assets/
│   └── resume/
├── scripts/
│   ├── build.mjs
│   └── check.mjs
├── src/
│   ├── content.mjs
│   ├── site.css
│   └── site.js
├── dist/               # generated production site
├── package.json
└── README.md
```

## Edit content

All bilingual portfolio content is centralized in:

```text
src/content.mjs
```

Project repository links live on each project's `repo` field. Local image metadata,
bilingual alt text and source credits live in `projectMedia`. Preview images are
stored in `public/assets/projects/`, with an 800px variant for smaller displays.
See [project sources](docs/PROJECT_SOURCES.md) for the original assets and evidence.

After editing:

```bash
npm run build
npm run check
```

## Content integrity

The site uses the supplied English and French CVs as the source of truth. Public PalletDataGenerator details are only used where supported by the public GitHub/PyPI project. No performance metrics, testimonials, clients or project outcomes are fabricated.

The complete design specification used for this implementation is preserved in `docs/SKILL.md`.
