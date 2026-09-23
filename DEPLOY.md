# GitHub Pages deployment

This repository is ready for the profile site `boubakriibrahim.github.io`.

1. Copy the project to the repository root.
2. Commit and push to `main`.
3. In **GitHub → Settings → Pages**, choose **GitHub Actions** as the publishing source.
4. The included `Build and deploy portfolio` workflow builds, validates and publishes `dist/` automatically.

Local verification:

```bash
npm run build
npm run check
```

If the public URL changes, update `SITE_URL` in `.github/workflows/deploy.yml`.
