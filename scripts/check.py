#!/usr/bin/env python3
from pathlib import Path

root = Path(__file__).resolve().parents[1]
required = [
    root / "index.html",
    root / "resume" / "Ibrahim_Boubakri_CV_EN.pdf",
    root / "resume" / "Ibrahim_Boubakri_CV_FR.pdf",
    root / ".github" / "workflows" / "deploy-pages.yml",
    root / "LICENSE",
]
missing = [str(p.relative_to(root)) for p in required if not p.exists()]
if missing:
    raise SystemExit("Missing required files: " + ", ".join(missing))

html = (root / "index.html").read_text(encoding="utf-8")
checks = {
    "profile name": "Ibrahim Boubakri" in html,
    "strong profile title": "Full-Stack Software Developer" in html,
    "English CV link": "Ibrahim_Boubakri_CV_EN.pdf" in html,
    "French CV link": "Ibrahim_Boubakri_CV_FR.pdf" in html,
    "GitHub profile": "github.com/boubakriibrahim" in html,
    "LinkedIn profile": "linkedin.com/in/ibrahimboubakri" in html,
    "viewport meta": 'name="viewport"' in html,
    "responsive CSS": "@media" in html,
    "GSAP": "gsap" in html.lower(),
    "ScrollTrigger": "ScrollTrigger" in html,
    "Lenis": "Lenis" in html,
    "language switch": "ib-lang" in html,
    "theme switch": "ib-theme" in html,
}
failed = [name for name, ok in checks.items() if not ok]
if failed:
    raise SystemExit("Validation failed: " + ", ".join(failed))
print("Portfolio validation: PASS")
for name in checks:
    print(f"  OK - {name}")
