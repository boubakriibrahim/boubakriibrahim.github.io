# Ibrahim Boubakri — Portfolio

Personal portfolio website for **Ibrahim Boubakri**, a full-stack software developer focused on backend platforms, DevOps automation and practical AI integration.

## Highlights

- English / French language switch
- Dark / light theme
- Responsive desktop and mobile design
- Smooth scroll and scroll-triggered interactions
- Sticky project storytelling on larger screens
- Mobile-friendly project flow
- Project detail modal
- English and French CV downloads
- Automatic GitHub Pages deployment

## Local development

Validate the project:

```bash
python3 scripts/check.py
```

Build the deployable site:

```bash
python3 scripts/build.py
```

Run a local server:

```bash
python3 scripts/serve.py
```

Then open `http://127.0.0.1:8000/`.

## Deployment

Push to the `main` branch of `boubakriibrahim.github.io`. GitHub Actions builds the site and publishes the generated `dist/` directory to GitHub Pages.
