#!/usr/bin/env python3
from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
dist = root / "dist"
if dist.exists():
    shutil.rmtree(dist)
dist.mkdir(parents=True)
shutil.copy2(root / "index.html", dist / "index.html")
for name in ["404.html", "robots.txt", ".nojekyll"]:
    src = root / name
    if src.exists():
        shutil.copy2(src, dist / name)
shutil.copytree(root / "resume", dist / "resume")
print(f"Built {dist}")
