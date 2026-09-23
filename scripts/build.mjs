
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { identity, media, ui, capabilities, experience, education, certifications, languages, projects } from "../src/content.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = (process.env.SITE_URL || "https://boubakriibrahim.github.io").replace(/\/$/, "");

const e = (v="") => String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const tr = (v,l) => typeof v === "string" ? v : v[l];
const pre = d => "../".repeat(d);
const langRoot = l => l === "fr" ? "fr/" : "";
const href = (l,d,p="") => `${pre(d)}${langRoot(l)}${p}` || "./";
const otherHref = (l,d,p="") => `${pre(d)}${l === "en" ? "fr/" : ""}${p}` || "./";
const cv = l => `resume/Ibrahim_Boubakri_CV_${l === "en" ? "EN" : "FR"}.pdf`;

function head(lang, depth, title, description, currentPath="") {
  const canonical = `${SITE}/${langRoot(lang)}${currentPath}`;
  const alt = lang === "en" ? `${SITE}/fr/${currentPath}` : `${SITE}/${currentPath}`;
  const og = `${SITE}/assets/${lang === "fr" ? "og-card-fr.png" : "og-card.png"}`;
  const schema = {
    "@context":"https://schema.org","@type":"Person",name:identity.name,url:SITE,
    email:`mailto:${identity.email}`,sameAs:[identity.github,identity.linkedin],
    address:{"@type":"PostalAddress",addressLocality:"Québec",addressRegion:"QC",addressCountry:"CA"},
    alumniOf:["Université du Québec à Trois-Rivières","École Nationale des Sciences de l'Informatique"],
    knowsAbout:["Full-stack development","Backend architecture","DevOps","AI integration","Computer vision","Robotics"]
  };
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="${e(description)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#f2efe9" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#111210" media="(prefers-color-scheme: dark)">
<title>${e(title)}</title>
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="${lang === "en" ? "en-CA" : "fr-CA"}" href="${canonical}">
<link rel="alternate" hreflang="${lang === "en" ? "fr-CA" : "en-CA"}" href="${alt}">
<link rel="stylesheet" href="${pre(depth)}assets/site.css">
<link rel="icon" href="${pre(depth)}assets/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website"><meta property="og:locale" content="${ui[lang].locale}">
<meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}">
<meta property="og:url" content="${canonical}"><meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(title)}">
<meta name="twitter:description" content="${e(description)}"><meta name="twitter:image" content="${og}">
<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<","\\u003c")}</script>`;
}

function header(lang, depth, projectSlug="") {
  const u=ui[lang];
  const current = projectSlug ? `work/${projectSlug}/` : "";
  return `<a class="skip-link" href="#content">${lang==="en"?"Skip to content":"Aller au contenu"}</a>
<header class="site-header" data-header>
  <div class="shell header-inner">
    <a class="brand" href="${href(lang,depth)}" aria-label="${identity.name} — home"><span>IB</span><b>.</b></a>
    <nav class="desktop-nav" aria-label="Primary">
      <a href="${href(lang,depth)}#work">${e(u.navWork)}</a>
      <a href="${href(lang,depth)}#about">${e(u.navAbout)}</a>
      <a href="${href(lang,depth)}#contact">${e(u.navContact)}</a>
    </nav>
    <div class="header-actions">
      <button class="theme-toggle" data-theme-toggle type="button" aria-label="Toggle color theme">◐</button>
      <a class="lang-link" href="${projectSlug ? otherHref(lang,depth,current) : otherHref(lang,depth)}" hreflang="${lang==="en"?"fr":"en"}">${u.langSwitch}</a>
      <a class="header-contact" href="mailto:${identity.email}">${lang==="en"?"Email":"Écrire"}</a>
      <button class="menu-button" data-menu-button aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><i>Menu</i></button>
    </div>
  </div>
  <nav id="mobile-menu" class="mobile-menu shell" data-mobile-menu hidden>
    <a href="${href(lang,depth)}#work">${e(u.navWork)}</a>
    <a href="${href(lang,depth)}#about">${e(u.navAbout)}</a>
    <a href="${href(lang,depth)}#contact">${e(u.navContact)}</a>
    <a href="${pre(depth)}${cv(lang)}">${e(u.resume)}</a>
  </nav>
</header>`;
}

function footer(lang, depth) {
  return `<footer class="site-footer"><div class="shell footer-grid">
  <div><strong>${identity.name}</strong><p>${lang==="en"?"Software from interface to infrastructure.":"Du produit à l’infrastructure."}</p></div>
  <div class="footer-links"><a href="mailto:${identity.email}">${identity.email}</a><a href="${identity.github}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${identity.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
  <div class="footer-meta"><span>Québec, Canada</span><span>© <span data-year>2026</span> Ibrahim Boubakri</span></div>
</div></footer><script src="${pre(depth)}assets/site.js" defer></script>`;
}

const sectionHead=(k,t,intro="")=>`<div class="section-head"><p class="eyebrow">${e(k)}</p><h2>${e(t)}</h2>${intro?`<p class="section-intro">${e(intro)}</p>`:""}</div>`;

function visual(p,lang,hero=false){
  if(p.image){
    return `<div class="visual ${hero?"visual-hero":""} visual-image"><img src="${media[p.image]}" alt="${lang==="en"?"Synthetic warehouse scene for pallet perception workflows":"Scène synthétique d’entrepôt pour workflows de perception de palettes"}" ${hero?'fetchpriority="high"':'loading="lazy"'}><div class="visual-meta"><span>${e(tr(p.eyebrow,lang))}</span><span>${p.year}</span></div></div>`;
  }
  return `<div class="visual ${hero?"visual-hero":""} visual-system tone-${p.slug}"><div class="visual-index">${String(projects.indexOf(p)+1).padStart(2,"0")}</div><div class="mini-flow">${p.flow[lang].map((x,i)=>`<span>${e(x)}</span>${i<p.flow[lang].length-1?`<b>→</b>`:""}`).join("")}</div><div class="visual-meta"><span>${e(tr(p.eyebrow,lang))}</span><span>${p.year}</span></div></div>`;
}

function projectRow(p,lang,depth,i){
  const u=ui[lang];
  return `<article class="project-row">
    <div class="project-no">${String(i+1).padStart(2,"0")}</div>
    <div class="project-copy">
      <p class="project-type">${e(tr(p.eyebrow,lang))}</p>
      <h3><a href="${href(lang,depth,`work/${p.slug}/`)}">${e(tr(p.title,lang))}</a></h3>
      <p>${e(tr(p.summary,lang))}</p>
      <div class="project-meta"><span>${p.year}</span><span>${e(p.org)}</span>${p.private?`<span>${lang==="en"?"Private product · safe detail only":"Produit privé · détails limités"}</span>`:""}</div>
      <div class="project-actions"><a href="${href(lang,depth,`work/${p.slug}/`)}">${e(u.viewCase)} →</a>${p.public?`<a href="${identity.repo}" target="_blank" rel="noreferrer">${e(u.publicRepo)} ↗</a>`:""}</div>
    </div>
    <a class="visual-link" href="${href(lang,depth,`work/${p.slug}/`)}" aria-label="${e(u.viewCase)}: ${e(tr(p.title,lang))}">${visual(p,lang)}</a>
  </article>`;
}

function capabilityRows(lang){
  return `<div class="capabilities">${capabilities.map(c=>`<article><span class="num">${c.n}</span><div><h3>${e(tr(c.title,lang))}</h3><p>${e(tr(c.desc,lang))}</p></div><div class="tech-line">${c.tech.map(x=>`<span>${e(x)}</span>`).join("")}</div></article>`).join("")}</div>`;
}

function experienceRows(lang){
  return `<div class="timeline">${experience.map(x=>`<article><div class="period">${e(tr(x.period,lang))}</div><div><h3>${e(tr(x.title,lang))}</h3><p class="org">${e(x.org)} · ${e(tr(x.place,lang))}</p><ul>${x.points[lang].map(p=>`<li>${e(p)}</li>`).join("")}</ul></div></article>`).join("")}</div>`;
}

function contact(lang,depth){
  const u=ui[lang];
  return `<section id="contact" class="section contact"><div class="shell contact-grid">
    <div>${sectionHead(u.contactKicker,u.contactTitle,u.contactBody)}</div>
    <div class="contact-action"><a class="email-link" href="mailto:${identity.email}">${identity.email}<span>↗</span></a><div><a href="${identity.github}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${identity.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="${pre(depth)}${cv(lang)}">${e(u.resume)} ↓</a></div></div>
  </div></section>`;
}

function home(lang){
  const d=lang==="en"?0:1, u=ui[lang];
  const principles=lang==="en"?["Software first.","Automation everywhere.","AI where it earns its place."]:["Le logiciel d’abord.","Automatiser ce qui doit l’être.","L’IA là où elle apporte une vraie valeur."];
  const body=`<main id="content">
<section class="hero shell">
  <div class="status"><span></span>${e(u.status)}</div>
  <div class="hero-grid"><div class="hero-main"><p class="eyebrow">${e(u.kicker)}</p><h1>${e(u.hero)}</h1><p class="hero-intro">${e(u.intro)}</p><div class="hero-links"><a href="#work">${e(u.navWork)} ↓</a><a href="${pre(d)}${cv(lang)}">${e(u.resume)} ↓</a></div></div>
  <aside class="profile-index"><div><span>${lang==="en"?"Name":"Nom"}</span><strong>${identity.name}</strong></div><div><span>${lang==="en"?"Based":"Basé à"}</span><strong>Québec, Canada</strong></div><div><span>Core</span><strong>Full stack · Backend · DevOps</strong></div><div><span>Edge</span><strong>AI · Vision · Robotics</strong></div><p><a href="${identity.github}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${identity.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a></p></aside></div>
  <div class="hero-rule"><span>01</span><span>${lang==="en"?"Selected engineering work":"Travaux d’ingénierie sélectionnés"}</span></div>
</section>

<section id="work" class="section shell">
  ${sectionHead(u.workKicker,u.workTitle,u.workIntro)}
  <div class="projects">${projects.map((p,i)=>projectRow(p,lang,d,i)).join("")}</div>
</section>

<section class="section open-source"><div class="shell os-grid"><div><p class="eyebrow">${lang==="en"?"Open source spotlight":"Open source"}</p><h2>PalletDataGenerator</h2><p>${lang==="en"?"A reusable Python library for synthetic pallet and warehouse datasets with Blender, multi-format annotations, GPU rendering, keypoint tooling, testing and containerized development.":"Une bibliothèque Python réutilisable pour générer des jeux de données synthétiques de palettes et d’entrepôts avec Blender, annotations multi-format, rendu GPU, outils de keypoints, tests et développement conteneurisé."}</p><div class="os-links"><a href="${identity.repo}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${identity.pypi}" target="_blank" rel="noreferrer">PyPI ↗</a></div></div><div class="os-spec"><div><span>01</span><b>Blender</b><small>${lang==="en"?"Synthetic scenes":"Scènes synthétiques"}</small></div><div><span>02</span><b>YOLO / COCO / VOC</b><small>${lang==="en"?"Annotation exports":"Exports d’annotations"}</small></div><div><span>03</span><b>GPU</b><small>Cycles rendering</small></div><div><span>04</span><b>Keypoints</b><small>${lang==="en"?"Visibility + debug tooling":"Visibilité + débogage"}</small></div></div></div></section>

<section class="section shell">${sectionHead(u.capabilities,u.capabilitiesTitle)}${capabilityRows(lang)}</section>

<section class="section shell">${sectionHead(u.experience,u.experienceTitle)}${experienceRows(lang)}</section>

<section id="about" class="section shell about">
  <p class="eyebrow">${e(u.about)}</p><div class="about-grid"><h2>${e(u.aboutTitle)}</h2><div><p>${e(u.about1)}</p><p>${e(u.about2)}</p></div></div>
  <div class="principles">${principles.map((x,i)=>`<div><span>0${i+1}</span><strong>${e(x)}</strong></div>`).join("")}</div>
</section>

<section class="section shell cv-grid">
  <div><p class="eyebrow">${e(u.education)}</p>${education.map(x=>`<article><span>${x.period}</span><h3>${e(tr(x.degree,lang))}</h3><p>${e(x.school)}</p><small>${e(tr(x.place,lang))}</small></article>`).join("")}</div>
  <div><p class="eyebrow">${e(u.certifications)}</p><div class="plain-list">${certifications[lang].map(x=>`<div>${e(x)}</div>`).join("")}</div><p class="eyebrow sub">${e(u.languages)}</p><div class="plain-list compact">${languages[lang].map(x=>`<div>${e(x)}</div>`).join("")}</div></div>
</section>
${contact(lang,d)}
</main>`;
  const title=lang==="en"?"Ibrahim Boubakri — Full-Stack Software Engineer":"Ibrahim Boubakri — Développeur full stack";
  const desc=lang==="en"?"Full-stack software engineer in Québec building backend platforms, DevOps automation, AI-enabled workflows, computer-vision systems and production software.":"Développeur full stack à Québec spécialisé en plateformes backend, DevOps, intégration IA, vision par ordinateur et logiciels de production.";
  return shell(lang,d,"",title,desc,body,"home");
}

function projectPage(p,lang){
  const d=lang==="en"?2:3,u=ui[lang],idx=projects.indexOf(p),next=projects[(idx+1)%projects.length];
  const gallery=p.public?`<div class="gallery shell"><figure><img src="${media.warehouse}" alt="${lang==="en"?"Synthetic warehouse scene":"Scène synthétique d’entrepôt"}" loading="lazy"><figcaption>${lang==="en"?"Synthetic warehouse output from the public PalletDataGenerator project.":"Sortie synthétique d’entrepôt du projet public PalletDataGenerator."}</figcaption></figure><figure><img src="${media.pallet}" alt="${lang==="en"?"Synthetic pallet scene":"Scène synthétique de palette"}" loading="lazy"><figcaption>${lang==="en"?"Controlled scene generation for perception experiments.":"Génération de scènes contrôlées pour les expérimentations de perception."}</figcaption></figure></div>`:"";
  const body=`<main id="content">
<section class="case-hero shell">
<a class="back" href="${href(lang,d)}">← ${e(u.back)}</a>
<div class="case-head"><div><p class="eyebrow">${e(tr(p.eyebrow,lang))}</p><h1>${e(tr(p.title,lang))}</h1><p class="case-summary">${e(tr(p.summary,lang))}</p></div><dl><div><dt>${lang==="en"?"Role":"Rôle"}</dt><dd>${e(tr(p.role,lang))}</dd></div><div><dt>${lang==="en"?"Organization":"Organisation"}</dt><dd>${e(p.org)}</dd></div><div><dt>${lang==="en"?"Period":"Période"}</dt><dd>${p.year}</dd></div>${p.public?`<div><dt>Open source</dt><dd><a href="${identity.repo}" target="_blank" rel="noreferrer">PalletDataGenerator ↗</a></dd></div>`:""}</dl></div>
${visual(p,lang,true)}
</section>

<section class="case-section shell case-context"><p class="eyebrow">01 · ${e(u.context)}</p><div><h2>${e(tr(p.title,lang))}</h2><p>${e(tr(p.context,lang))}</p></div></section>

<section class="case-section shell"><p class="eyebrow">02 · ${e(u.built)}</p><div class="case-list">${p.built[lang].map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><p>${e(x)}</p></article>`).join("")}</div></section>

<section class="case-section flow-section"><div class="shell"><p class="eyebrow">03 · ${lang==="en"?"System flow":"Flux système"}</p><div class="flow">${p.flow[lang].map((x,i)=>`<div><span>${String(i+1).padStart(2,"0")}</span><b>${e(x)}</b></div>${i<p.flow[lang].length-1?`<i>→</i>`:""}`).join("")}</div></div></section>
${gallery}
<section class="case-section shell"><p class="eyebrow">04 · ${e(u.decisions)}</p><div class="decisions">${p.decisions[lang].map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><h3>${e(x[0])}</h3><p>${e(x[1])}</p></article>`).join("")}</div></section>

<section class="case-section shell stack"><p class="eyebrow">05 · ${e(u.stack)}</p><div>${p.tech.map(x=>`<span>${e(x)}</span>`).join("")}<p>${e(u.source)}</p></div></section>
<a class="next shell" href="${href(lang,d,`work/${next.slug}/`)}"><span class="eyebrow">${e(u.next)}</span><strong>${e(tr(next.title,lang))}</strong><b>→</b></a>
${contact(lang,d)}
</main>`;
  return shell(lang,d,`work/${p.slug}/`,`${tr(p.title,lang)} — ${identity.name}`,tr(p.summary,lang),body,"case",p.slug);
}

function shell(lang,depth,currentPath,title,desc,body,bodyClass="",projectSlug=""){
  return `<!doctype html><html lang="${lang}" data-theme="auto"><head>${head(lang,depth,title,desc,currentPath)}</head><body class="${bodyClass}">${header(lang,depth,projectSlug)}${body}${footer(lang,depth)}</body></html>`;
}

async function emit(rel,html){const f=path.join(dist,rel);await mkdir(path.dirname(f),{recursive:true});await writeFile(f,html,"utf8");}

await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
await cp(path.join(root,"public"),dist,{recursive:true});
await cp(path.join(root,"src","site.css"),path.join(dist,"assets","site.css"));
await cp(path.join(root,"src","site.js"),path.join(dist,"assets","site.js"));

await emit("index.html",home("en"));
await emit("fr/index.html",home("fr"));
for(const p of projects){await emit(`work/${p.slug}/index.html`,projectPage(p,"en"));await emit(`fr/work/${p.slug}/index.html`,projectPage(p,"fr"));}

const notFound=`<!doctype html><html lang="en"><head>${head("en",0,"404 — Ibrahim Boubakri","Page not found.","404.html")}</head><body><a class="skip-link" href="#content">Skip to content</a><main id="content" class="error shell"><p class="eyebrow">404</p><h1>That page is not here.</h1><p>The portfolio is still where it should be.</p><a href="./">Back home →</a></main><script src="assets/site.js" defer></script></body></html>`;
await emit("404.html",notFound);

const routes=["","fr/",...projects.map(p=>`work/${p.slug}/`),...projects.map(p=>`fr/work/${p.slug}/`)];
await emit("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r=>`<url><loc>${SITE}/${r}</loc></url>`).join("\n")}\n</urlset>`);
await emit("robots.txt",`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
await emit(".nojekyll","");
console.log(`Built ${routes.length+1} HTML pages.`);
