
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),".."),dist=path.join(root,"dist");
async function walk(d){let out=[];for(const x of await readdir(d)){const f=path.join(d,x),s=await stat(f);out.push(...(s.isDirectory()?await walk(f):[f]))}return out}
const files=await walk(dist),set=new Set(files.map(f=>path.resolve(f))),html=files.filter(x=>x.endsWith(".html")),errors=[];
for(const f of html){const s=await readFile(f,"utf8"),rel=path.relative(dist,f);for(const x of ["<title>","name=\"description\"","rel=\"canonical\"","href=\"#content\""].filter(x=>x!=="rel=\"canonical\""||rel!=="404.html"))if(!s.includes(x))errors.push(`${rel}: missing ${x}`);if(/Lorem ipsum|TODO|PLACEHOLDER/i.test(s))errors.push(`${rel}: placeholder content`);if(/30 fps|99% accurate|100% accurate/i.test(s))errors.push(`${rel}: unsupported metric`);for(const m of s.matchAll(/(?:href|src)="([^"]+)"/g)){const u=m[1];if(!u||u.startsWith("#")||/^(https?:|mailto:|tel:)/.test(u))continue;const clean=u.split("#")[0].split("?")[0],resolved=path.resolve(path.dirname(f),clean),target=path.extname(resolved)?resolved:path.join(resolved,"index.html");if(!set.has(path.resolve(target)))errors.push(`${rel}: broken ${u}`)}}
for(const x of ["assets/site.css","assets/site.js","assets/favicon.svg","assets/og-card.svg","assets/vendor/vercel-analytics.mjs","resume/Ibrahim_Boubakri_CV_EN.pdf","resume/Ibrahim_Boubakri_CV_FR.pdf","sitemap.xml","robots.txt",".nojekyll"])if(!set.has(path.resolve(dist,x)))errors.push(`missing ${x}`);

// SEO: canonical host, indexing directives, snippet lengths, structured data and sitemap coverage.
const sitemap=await readFile(path.join(dist,"sitemap.xml"),"utf8"),robots=await readFile(path.join(dist,"robots.txt"),"utf8");
const origin=new URL(sitemap.match(/<loc>([^<]+)<\/loc>/)[1]).origin;
if(!robots.includes(`Sitemap: ${origin}/sitemap.xml`))errors.push(`robots.txt: missing Sitemap line for ${origin}`);
for(const loc of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)){const u=new URL(loc[1]);if(u.origin!==origin)errors.push(`sitemap: foreign host ${loc[1]}`);const rel=u.pathname.replace(/^\//,"")||"index.html";const target=rel.endsWith("/")?rel+"index.html":rel;if(!set.has(path.resolve(dist,target)))errors.push(`sitemap: missing file for ${loc[1]}`)}
for(const f of html){
  const s=await readFile(f,"utf8"),rel=path.relative(dist,f);
  const robotsMeta=s.match(/<meta name="robots" content="([^"]+)"/)?.[1]??"";
  if(rel==="404.html"){if(!robotsMeta.includes("noindex"))errors.push(`${rel}: 404 must be noindex`);if(s.includes('rel="canonical"'))errors.push(`${rel}: 404 must not declare a canonical`);continue}
  if(!robotsMeta.startsWith("index"))errors.push(`${rel}: page must be indexable`);
  const canonical=s.match(/<link rel="canonical" href="([^"]+)"/)?.[1]??"";
  if(!canonical.startsWith(`${origin}/`))errors.push(`${rel}: canonical ${canonical} is not on ${origin}`);
  if(!s.includes('hreflang="x-default"'))errors.push(`${rel}: missing x-default hreflang`);
  const title=s.match(/<title>([^<]*)<\/title>/)?.[1]??"";
  if(title.length>70)errors.push(`${rel}: title longer than 70 characters`);
  const desc=s.match(/<meta name="description" content="([^"]*)"/)?.[1]??"";
  if(desc.length<50||desc.length>160)errors.push(`${rel}: description must be 50–160 characters (${desc.length})`);
  if((s.match(/<h1[\s>]/g)||[]).length!==1)errors.push(`${rel}: expected exactly one <h1>`);
  if(!s.includes('property="og:image"'))errors.push(`${rel}: missing og:image`);
  for(const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){try{JSON.parse(m[1].replaceAll("\\u003c","<"))}catch{errors.push(`${rel}: invalid JSON-LD`)}}
}
if(errors.length){console.error(errors.join("\n"));process.exit(1)}console.log(`Quality check passed: ${html.length} HTML pages, ${files.length} files, SEO checks on ${origin}.`);
