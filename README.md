# Ibrahim Boubakri — Engineering Portfolio

A bilingual English/French engineering portfolio built as a small static-site generator. Vercel builds and deploys it from `main`; the repository's own scripts build and validate it.

## Highlights

- Editorial, restrained UI — no generic AI landing-page styling
- English + French
- Six bilingual technical case studies, including security teaching and ENSI Cyber Range
- Real résumé-based experience, education, skills and certifications
- Public PalletDataGenerator / PyPI links and three security repositories
- Project films with English narration and English/French captions, plus the original Service Desk launch film
- Optimized local project previews with image credits and full-size views
- Simplified Archify system diagrams and short diagram loops, each with a dark-theme version
- English + French CV PDFs and TeX sources
- Responsive light/dark design
- Keyboard focus, semantic HTML, restrained entrance/hover motion and reduced-motion support
- SEO metadata, JSON-LD, sitemap, robots.txt and social cards
- One dependency: Vercel Web Analytics, served from the site's own origin
- Deployed on Vercel from `main`

## Run locally

Node.js 22+:

```bash
npm ci
npm run build
npm run check
npm run preview
```

Open `http://localhost:4173`.

## Deploy

Vercel builds every push to `main` and serves `https://ibrahimboubakri.me`, the canonical host for all URLs, the sitemap and `robots.txt`. See [DEPLOY.md](DEPLOY.md) for the project settings.

## Structure

```text
.
├── docs/
│   ├── PROJECT_SOURCES.md
│   └── SKILL.md
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
A project can carry a `video` field (source, poster, captions); when it does, the
film becomes the case-study hero, or a numbered section after the context when
the project also has a diagram loop. Optional `tracks` provide English and French
WebVTT captions, with the page language selected by default. Films load only when
played. A `diagram` field (English and French PNG paths
plus alt text) adds a system diagram after the flow section; the build reads each
PNG's dimensions. A `motion` field (English and French MP4 loop plus poster)
gives a project with no other image a short diagram loop on its work card and
case-study hero. Each diagram and loop file has a dark-theme twin with a `-dark`
suffix, and the page shows the one that matches the active theme. Loops play
continuously while visible, pause off-screen or in a hidden tab, and have a
visible play/pause button. Reduced motion keeps the static poster. Only the
active theme's video is loaded; without JavaScript the posters remain visible.
See [project sources](docs/PROJECT_SOURCES.md) for the original assets and evidence.

After editing:

```bash
npm run build
npm run check
```

## Content integrity

The site uses the supplied English and French CVs as the source of truth. Public PalletDataGenerator details are only used where supported by the public GitHub/PyPI project. No performance metrics, testimonials, clients or project outcomes are fabricated.

The complete design specification used for this implementation is preserved in `docs/SKILL.md`.
