
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),".."),dist=path.join(root,"dist");
async function walk(d){let out=[];for(const x of await readdir(d)){const f=path.join(d,x),s=await stat(f);out.push(...(s.isDirectory()?await walk(f):[f]))}return out}
const files=await walk(dist),set=new Set(files.map(f=>path.resolve(f))),html=files.filter(x=>x.endsWith(".html")),errors=[];
for(const f of html){const s=await readFile(f,"utf8"),rel=path.relative(dist,f);for(const x of ["<title>","name=\"description\"","rel=\"canonical\"","href=\"#content\""])if(!s.includes(x))errors.push(`${rel}: missing ${x}`);if(/Lorem ipsum|TODO|PLACEHOLDER/i.test(s))errors.push(`${rel}: placeholder content`);if(/30 fps|99% accurate|100% accurate/i.test(s))errors.push(`${rel}: unsupported metric`);for(const m of s.matchAll(/(?:href|src)="([^"]+)"/g)){const u=m[1];if(!u||u.startsWith("#")||/^(https?:|mailto:|tel:)/.test(u))continue;const clean=u.split("#")[0].split("?")[0],resolved=path.resolve(path.dirname(f),clean),target=path.extname(resolved)?resolved:path.join(resolved,"index.html");if(!set.has(path.resolve(target)))errors.push(`${rel}: broken ${u}`)}}
for(const x of ["assets/site.css","assets/site.js","assets/favicon.svg","assets/og-card.svg","resume/Ibrahim_Boubakri_CV_EN.pdf","resume/Ibrahim_Boubakri_CV_FR.pdf","sitemap.xml","robots.txt",".nojekyll"])if(!set.has(path.resolve(dist,x)))errors.push(`missing ${x}`);
if(errors.length){console.error(errors.join("\n"));process.exit(1)}console.log(`Quality check passed: ${html.length} HTML pages, ${files.length} files.`);
