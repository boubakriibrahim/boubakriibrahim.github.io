
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { identity, projectMedia, ui, capabilities, experience, education, certifications, languages, projects } from "../src/content.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = (process.env.SITE_URL || "https://ibrahimboubakri.me").replace(/\/$/, "");

const e = (v="") => String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const tr = (v,l) => typeof v === "string" ? v : v[l];
const pre = d => "../".repeat(d);
const langRoot = l => l === "fr" ? "fr/" : "";
const href = (l,d,p="") => `${pre(d)}${langRoot(l)}${p}` || "./";
const otherHref = (l,d,p="") => `${pre(d)}${l === "en" ? "fr/" : ""}${p}` || "./";
const cv = l => `resume/Ibrahim_Boubakri_CV_${l === "en" ? "EN" : "FR"}.pdf`;
// Diagrams and loops ship a dark-theme twin named with a "-dark" suffix.
const darkOf = src => src.replace(/(\.[a-z0-9]+)$/, "-dark$1");

// Search snippets read best at ~150–160 characters; cut on a word boundary.
const clip = (text, max = 158) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max).replace(/\s+\S*$/, "");
  return `${cut.replace(/[,;:\s]+$/, "")}…`;
};

const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

function jsonLd(lang, canonical, title, description, og, crumbs) {
  const inLanguage = lang === "en" ? "en-CA" : "fr-CA";
  const graph = [
    {
      "@type": "Person", "@id": PERSON_ID, name: identity.name, url: SITE, image: `${SITE}/assets/og-card.png`,
      jobTitle: lang === "en" ? "Full-Stack Developer" : "Développeur full stack",
      email: `mailto:${identity.email}`, sameAs: [identity.github, identity.linkedin],
      address: { "@type": "PostalAddress", addressLocality: "Québec", addressRegion: "QC", addressCountry: "CA" },
      alumniOf: ["Université du Québec à Trois-Rivières", "École Nationale des Sciences de l'Informatique"],
      knowsAbout: ["Full-stack development", "Backend architecture", "DevOps", "AI integration", "Computer vision", "Robotics"],
      knowsLanguage: ["English", "French"]
    },
    {
      "@type": "WebSite", "@id": WEBSITE_ID, url: SITE, name: identity.name, inLanguage: ["en-CA", "fr-CA"],
      publisher: { "@id": PERSON_ID }
    },
    {
      "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description, inLanguage,
      isPartOf: { "@id": WEBSITE_ID }, about: { "@id": PERSON_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: og }
    }
  ];
  if (crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url }))
    });
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
}

function head(lang, depth, title, rawDescription, currentPath = "", { indexable = true, crumbs = [] } = {}) {
  const description = clip(rawDescription);
  const canonical = `${SITE}/${langRoot(lang)}${currentPath}`;
  const enUrl = `${SITE}/${currentPath}`;
  const frUrl = `${SITE}/fr/${currentPath}`;
  const og = `${SITE}/assets/${lang === "fr" ? "og-card-fr.png" : "og-card.png"}`;
  const ogAlt = lang === "en"
    ? `${identity.name}, full-stack developer`
    : `${identity.name}, développeur full stack`;
  const robots = indexable
    ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    : "noindex,nofollow";
  const alternates = indexable ? `
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en-CA" href="${enUrl}">
<link rel="alternate" hreflang="fr-CA" href="${frUrl}">
<link rel="alternate" hreflang="x-default" href="${enUrl}">` : "";
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="${e(description)}">
<meta name="robots" content="${robots}">
<meta name="author" content="${identity.name}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#f2efe9" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#111210" media="(prefers-color-scheme: dark)">
<title>${e(title)}</title>${alternates}
<script>try{const t=localStorage.getItem("ib-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch{}</script>
<link rel="stylesheet" href="${pre(depth)}assets/site.css">
<link rel="icon" href="${pre(depth)}assets/favicon.svg" type="image/svg+xml">
<link rel="me" href="${identity.github}">
<link rel="me" href="${identity.linkedin}">
<meta property="og:type" content="${currentPath ? "article" : "website"}">
<meta property="og:site_name" content="${identity.name}">
<meta property="og:locale" content="${ui[lang].locale}">
<meta property="og:locale:alternate" content="${ui[lang === "en" ? "fr" : "en"].locale}">
<meta property="og:title" content="${e(title)}">
<meta property="og:description" content="${e(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${e(ogAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${e(title)}">
<meta name="twitter:description" content="${e(description)}">
<meta name="twitter:image" content="${og}">
<meta name="twitter:image:alt" content="${e(ogAlt)}">
${indexable ? `<script type="application/ld+json">${jsonLd(lang, canonical, title, description, og, crumbs)}</script>` : ""}`;
}

function header(lang, depth, projectSlug="") {
  const u=ui[lang];
  const current = projectSlug ? `work/${projectSlug}/` : "";
  return `<a class="skip-link" href="#content">${lang==="en"?"Skip to content":"Aller au contenu"}</a>
<header class="site-header" data-header>
  <div class="shell header-inner">
    <a class="brand" href="${href(lang,depth)}" aria-label="${identity.name} — ${lang==="en"?"home":"accueil"}"><span>IB</span><b>.</b></a>
    <nav class="desktop-nav" aria-label="${lang==="en"?"Primary":"Navigation principale"}">
      <a href="${href(lang,depth)}#work">${e(u.navWork)}</a>
      <a href="${href(lang,depth)}#about">${e(u.navAbout)}</a>
      <a href="${href(lang,depth)}#contact">${e(u.navContact)}</a>
    </nav>
    <div class="header-actions">
      <button class="theme-toggle" data-theme-toggle type="button" aria-label="${lang==="en"?"Toggle color theme":"Changer de thème"}">◐</button>
      <a class="lang-link" href="${projectSlug ? otherHref(lang,depth,current) : otherHref(lang,depth)}" hreflang="${lang==="en"?"fr":"en"}" lang="${lang==="en"?"fr":"en"}" aria-label="${lang==="en"?"Lire en français":"Read in English"}">${u.langSwitch}</a>
      <a class="header-contact" href="mailto:${identity.email}">${lang==="en"?"Email":"Écrire"}</a>
      <button class="menu-button" data-menu-button aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><i>Menu</i></button>
    </div>
  </div>
  <nav id="mobile-menu" class="mobile-menu shell" data-mobile-menu aria-label="${lang==="en"?"Mobile navigation":"Navigation mobile"}" hidden>
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
</div></footer><script type="module" src="${pre(depth)}assets/site.js"></script>`;
}

const sectionHead=(k,t,intro="")=>`<div class="section-head"><p class="eyebrow">${e(k)}</p><h2>${e(t)}</h2>${intro?`<p class="section-intro">${e(intro)}</p>`:""}</div>`;

const motionControl=(p,lang)=>`<button class="motion-toggle" type="button" data-motion-toggle data-motion-title="${e(tr(p.title,lang))}" hidden>${lang==="en"?"Pause animation":"Mettre en pause"}</button>`;

function visual(p,lang,depth,hero=false){
  // `homeCard` is a homepage-only still; the case-study hero can keep its motion loop.
  const asset=hero?(p.card||projectMedia[p.slug]):(p.homeCard||p.card||projectMedia[p.slug]);
  const year=p.year?e(tr(p.year,lang)):"";
  const sizes=hero?'(max-width: 1280px) 100vw, 1240px':'(max-width: 1000px) 100vw, 620px';
  // Diagram motion runs only in view; the adjacent button lets visitors pause it.
  // Posters are lazy images per theme, so the hidden theme's poster is never fetched.
  if(!asset&&p.motion){
    const m=p.motion;
    const poster=(theme,src)=>`<img class="${theme}-only" src="${pre(depth)}${src}" srcset="${pre(depth)}${src.replace(".webp","-800.webp")} 800w, ${pre(depth)}${src} ${m.width}w" sizes="${sizes}" width="${m.width}" height="${m.height}" alt="" loading="lazy" decoding="async">`;
    const loop=(theme,src)=>`<video class="${theme}-only" autoplay muted loop playsinline preload="none" width="${m.width}" height="${m.height}" aria-hidden="true" data-card-motion><source data-src="${pre(depth)}${src}" type="video/mp4"></video>`;
    return `<div class="visual ${hero?"visual-hero":""} visual-image visual-evidence visual-diagram"${hero?' data-motion-player':""}><div class="motion">${poster("light",m.poster[lang])}${poster("dark",darkOf(m.poster[lang]))}${loop("light",m.video[lang])}${loop("dark",darkOf(m.video[lang]))}</div><div class="visual-meta"><span>${e(tr(p.eyebrow,lang))}</span>${year?`<span>${year}</span>`:""}</div>${hero?motionControl(p,lang):""}</div>`;
  }
  if(asset){
    const src=`${pre(depth)}${asset.src}`;
    const responsive=asset.src.endsWith(".webp")?`srcset="${src.replace('.webp','-800.webp')} 800w, ${src} ${asset.width}w" sizes="${sizes}"`:"";
    return `<div class="visual ${hero?"visual-hero":""} visual-image visual-evidence"><img src="${src}" ${responsive} width="${asset.width}" height="${asset.height}" alt="${e(tr(asset.alt,lang))}" ${hero?'fetchpriority="high"':'loading="lazy"'} decoding="async"><div class="visual-meta"><span>${e(tr(p.eyebrow,lang))}</span>${year?`<span>${year}</span>`:""}</div></div>`;
  }
  return `<div class="visual ${hero?"visual-hero":""} visual-system tone-${p.slug}"><div class="visual-index">${String(projects.indexOf(p)+1).padStart(2,"0")}</div><div class="mini-flow">${p.flow[lang].map((x,i)=>`<span>${e(x)}</span>${i<p.flow[lang].length-1?`<b>→</b>`:""}`).join("")}</div><div class="visual-meta"><span>${e(tr(p.eyebrow,lang))}</span><span>${year}</span></div></div>`;
}

function mediaCredit(p,lang,depth){
  const a=projectMedia[p.slug];if(!a)return "";
  return `<p class="media-credit">${e(tr(a.caption,lang))}${a.source?`<a href="${a.source}" target="_blank" rel="noreferrer">${lang==="en"?"Image source":"Source de l’image"} ↗</a>`:""}<a href="${pre(depth)}${a.src}" target="_blank" rel="noreferrer">${lang==="en"?"View full image":"Voir l’image entière"} ↗</a></p>`;
}

function caseFilm(p,lang,depth){
  const v=p.video,src=`${pre(depth)}${tr(v.src,lang)}`;
  const tracks=(v.tracks||[]).map(track=>`<track kind="captions" src="${pre(depth)}${track.src}" srclang="${e(track.lang)}" label="${e(track.label)}"${track.lang===lang?' default':""}>`).join("");
  const playLabel=lang==="en"?"Play the film":"Lire le film";
  const playName=`${playLabel}${lang==="en"?": ":" : "}${tr(p.title,lang)}`;
  const L=lang==="en"
    ? {play:"Play",pause:"Pause",seek:"Seek",captions:"Captions",off:"Off",mute:"Mute",unmute:"Unmute",full:"Full screen",exit:"Exit full screen"}
    : {play:"Lire",pause:"Pause",seek:"Position",captions:"Sous-titres",off:"Aucun",mute:"Couper le son",unmute:"Rétablir le son",full:"Plein écran",exit:"Quitter le plein écran"};
  const hasTracks=(v.tracks||[]).length>0;
  const ccOptions=[`<button type="button" role="menuitemradio" aria-checked="${hasTracks&&v.tracks.some(t=>t.lang===lang)?"false":"true"}" data-cc="">${e(L.off)}</button>`]
    .concat((v.tracks||[]).map(t=>`<button type="button" role="menuitemradio" aria-checked="${t.lang===lang}" data-cc="${e(t.lang)}">${e(t.label)}</button>`))
    .join("");
  const cc=hasTracks?`<div class="film-cc"><button class="film-btn film-cc-btn" type="button" data-film-cc aria-haspopup="menu" aria-expanded="false" aria-label="${e(L.captions)}">CC</button><div class="film-menu" data-film-menu role="menu" hidden>${ccOptions}</div></div>`:"";
  const icons={
    play:`<span class="film-ico film-ico-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.2v13.6L19 12z" fill="currentColor"/></svg></span><span class="film-ico film-ico-pause" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5h3.2v14H8zM12.8 5H16v14h-3.2z" fill="currentColor"/></svg></span>`,
    mute:`<span class="film-ico film-ico-vol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 9.6h3.3L12 6.2v11.6L7.3 14.4H4z"/><path d="M15.6 9.4a4 4 0 0 1 0 5.2M18 6.8a7.4 7.4 0 0 1 0 10.4"/></svg></span><span class="film-ico film-ico-mute" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 9.6h3.3L12 6.2v11.6L7.3 14.4H4z"/><path d="M15.4 9.6l5.2 4.8M20.6 9.6l-5.2 4.8"/></svg></span>`,
    full:`<span class="film-ico film-ico-full" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 9.2V4h5.2M19.8 9.2V4h-5.2M4 14.8V20h5.2M19.8 14.8V20h-5.2"/></svg></span><span class="film-ico film-ico-exit" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M9.2 4v5.2H4M14.8 4v5.2H20M9.2 20v-5.2H4M14.8 20v-5.2H20"/></svg></span>`
  };
  return `<figure class="film" data-film>
  <div class="film-stage">
    <video controls playsinline preload="metadata" poster="${pre(depth)}${tr(v.poster,lang)}" width="${v.width}" height="${v.height}" aria-label="${e(tr(v.alt,lang))}"><source src="${src}" type="video/mp4">${tracks}<a href="${src}">${lang==="en"?"Download the film":"Télécharger le film"}</a></video>
    <button class="film-start" type="button" data-film-start aria-label="${e(playName)}"><span class="film-start-mark" aria-hidden="true"></span><span class="film-start-text">${playLabel}</span></button>
  </div>
  <div class="film-ui" data-film-ui hidden>
    <button class="film-btn" type="button" data-film-play aria-label="${e(L.play)}">${icons.play}</button>
    <div class="film-progress">
      <input class="film-seek" data-film-seek type="range" min="0" max="1000" step="1" value="0" aria-label="${e(L.seek)}">
      <p class="film-time" aria-hidden="true"><span data-film-current>0:00</span><span class="film-sep">/</span><span data-film-duration>0:00</span></p>
    </div>
    <div class="film-tools">${cc}<button class="film-btn" type="button" data-film-mute aria-label="${e(L.mute)}" aria-pressed="false">${icons.mute}</button><button class="film-btn" type="button" data-film-full aria-label="${e(L.full)}" aria-pressed="false">${icons.full}</button></div>
  </div>
</figure><p class="media-credit">${e(tr(v.caption,lang))}<a href="${src}" target="_blank" rel="noreferrer">${lang==="en"?"Open the film":"Ouvrir le film"} ↗</a></p>`;
}

// Diagram PNGs differ in height per language; read their size from the IHDR chunk.
const diagramSize=new Map();
for(const p of projects)if(p.diagram)for(const l of ["en","fr"])for(const src of [p.diagram.src[l],darkOf(p.diagram.src[l])]){const b=await readFile(path.join(root,"public",src));diagramSize.set(src,[b.readUInt32BE(16),b.readUInt32BE(20)]);}

function caseDiagram(p,lang,depth,no){
  const u=ui[lang],light=p.diagram.src[lang];
  const img=(theme,src)=>{const [w,h]=diagramSize.get(src);return `<img class="${theme}-only" src="${pre(depth)}${src}" width="${w}" height="${h}" alt="${e(tr(p.diagram.alt,lang))}" loading="lazy" decoding="async">`};
  const link=(theme,src)=>`<a class="${theme}-only" href="${pre(depth)}${src}" target="_blank" rel="noreferrer">${e(u.viewDiagram)} ↗</a>`;
  return `<section class="case-section shell case-diagram"><p class="eyebrow">${no} · ${e(u.diagram)}</p><figure class="case-figure">${img("light",light)}${img("dark",darkOf(light))}<figcaption class="media-credit">${e(u.diagramNote)}${link("light",light)}${link("dark",darkOf(light))}</figcaption></figure></section>`;
}

function caseFlow(p,lang,no){
  return `<section class="case-section flow-section"><div class="shell"><p class="eyebrow">${no} · ${p.flowLabel?e(tr(p.flowLabel,lang)):(lang==="en"?"System flow":"Flux système")}</p><div class="flow">${p.flow[lang].map((x,i)=>`<div><span>${String(i+1).padStart(2,"0")}</span><b>${e(x)}</b></div>${i<p.flow[lang].length-1?`<i>→</i>`:""}`).join("")}</div></div></section>`;
}

// A numbered walk through the pipeline, with optional figures; replaces the flow chips when present.
function caseStory(p,lang,depth,no){
  const fig=img=>img?`<figure><img src="${pre(depth)}${img.src}" width="${img.width}" height="${img.height}" alt="${e(tr(img.alt,lang))}" loading="lazy" decoding="async"><figcaption>${e(tr(img.caption,lang))}</figcaption></figure>`:"";
  return `<section class="case-section shell case-story"><p class="eyebrow">${no} · ${e(tr(p.story.label,lang))}</p><ol class="story">${p.story.steps.map((x,i)=>`<li${x.image?"":' class="text-only"'}><span>${String(i+1).padStart(2,"0")}</span><div><h3>${e(tr(x.title,lang))}</h3><p>${e(tr(x.text,lang))}</p></div>${fig(x.image)}</li>`).join("")}</ol></section>`;
}

function projectRow(p,lang,depth,i){
  const u=ui[lang];
  const hasMotion=!p.homeCard&&!p.card&&!projectMedia[p.slug]&&p.motion;
  return `<article class="project-row">
    <div class="project-no">${String(i+1).padStart(2,"0")}</div>
    <div class="project-copy">
      <p class="project-type">${e(tr(p.eyebrow,lang))}</p>
      <h3><a href="${href(lang,depth,`work/${p.slug}/`)}">${e(tr(p.title,lang))}</a></h3>
      <p>${e(tr(p.summary,lang))}</p>
      <div class="project-meta">${p.year?`<span>${e(tr(p.year,lang))}</span>`:""}<span>${e(tr(p.org,lang))}</span>${p.private?`<span>${lang==="en"?"Private product · selected details":"Produit privé · détails sélectionnés"}</span>`:""}</div>
      <div class="project-actions"><a href="${href(lang,depth,`work/${p.slug}/`)}">${e(u.viewCase)} <span aria-hidden="true">→</span></a>${p.repo?`<a href="${p.repo.url}" target="_blank" rel="noreferrer">${e(u.publicRepo)} <span aria-hidden="true">↗</span></a>`:""}</div>
    </div>
    <div class="visual-card"${hasMotion?' data-motion-player':""}><a class="visual-link" href="${href(lang,depth,`work/${p.slug}/`)}" aria-label="${e(u.viewCase)}: ${e(tr(p.title,lang))}">${visual(p,lang,depth)}<span class="visual-open" aria-hidden="true">↗</span></a>${hasMotion?motionControl(p,lang):""}</div>
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
  <aside class="profile-index"><div><span>${lang==="en"?"Name":"Nom"}</span><strong>${identity.name}</strong></div><div><span>${lang==="en"?"Based":"Basé à"}</span><strong>Québec, Canada</strong></div><div><span>${lang==="en"?"Core":"Expertise"}</span><strong>Full stack · Backend · DevOps</strong></div><div><span>${lang==="en"?"Focus":"Domaines"}</span><strong>${lang==="en"?"AI · Vision · Robotics":"IA · Vision · Robotique"}</strong></div><p><a href="${identity.github}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${identity.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a></p></aside></div>
  <div class="hero-rule"><span>01</span><span>${lang==="en"?"Selected engineering work":"Travaux d’ingénierie sélectionnés"}</span></div>
</section>

<section id="work" class="section shell">
  ${sectionHead(u.workKicker,u.workTitle,u.workIntro)}
  <div class="projects">${projects.map((p,i)=>projectRow(p,lang,d,i)).join("")}</div>
</section>

<section class="section open-source"><div class="shell os-grid"><div><p class="eyebrow">${lang==="en"?"Open source spotlight":"Open source"}</p><h2>PalletDataGenerator</h2><p>${lang==="en"?"A reusable Python library for synthetic pallet and warehouse datasets with Blender, multi-format annotations, GPU rendering, keypoint tooling, testing and containerized development.":"Une bibliothèque Python réutilisable pour générer des jeux de données synthétiques de palettes et d’entrepôts avec Blender, annotations multi-format, rendu GPU, outils de keypoints, tests et développement conteneurisé."}</p><div class="os-links"><a href="${identity.repo}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${identity.pypi}" target="_blank" rel="noreferrer">PyPI ↗</a></div></div><div class="os-spec"><div><span>01</span><b>Blender</b><small>${lang==="en"?"Synthetic scenes":"Scènes synthétiques"}</small></div><div><span>02</span><b>YOLO / COCO / VOC</b><small>${lang==="en"?"Annotation exports":"Exports d’annotations"}</small></div><div><span>03</span><b>GPU</b><small>${lang==="en"?"Cycles rendering":"Rendu Cycles"}</small></div><div><span>04</span><b>Keypoints</b><small>${lang==="en"?"Visibility + debug tooling":"Visibilité + débogage"}</small></div></div></div></section>

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
  const title=lang==="en"?"Ibrahim Boubakri — Full-Stack Developer":"Ibrahim Boubakri — Développeur full stack";
  const desc=lang==="en"?"Full-stack developer in Québec building backend platforms, DevOps automation, AI-enabled workflows, computer-vision systems and production software.":"Développeur full stack à Québec spécialisé en plateformes backend, DevOps, intégration IA, vision par ordinateur et logiciels de production.";
  return shell(lang,d,"",title,desc,body,"home");
}

function projectPage(p,lang){
  const d=lang==="en"?2:3,u=ui[lang],idx=projects.indexOf(p),next=projects[(idx+1)%projects.length];
  // Sections are numbered in reading order; the diagram section only exists on some projects.
  let n=0;const no=()=>String(++n).padStart(2,"0");
  const body=`<main id="content">
<section class="case-hero shell">
<a class="back" href="${href(lang,d)}#work"><span aria-hidden="true">←</span> ${e(u.back)}</a>
<div class="case-head"><div><p class="eyebrow">${e(tr(p.eyebrow,lang))}</p><h1>${e(tr(p.title,lang))}</h1><p class="case-summary">${e(tr(p.summary,lang))}</p></div><dl><div><dt>${lang==="en"?"Role":"Rôle"}</dt><dd>${e(tr(p.role,lang))}</dd></div><div><dt>${lang==="en"?"Organization":"Organisation"}</dt><dd>${e(tr(p.org,lang))}</dd></div>${p.year?`<div><dt>${lang==="en"?"Period":"Période"}</dt><dd>${e(tr(p.year,lang))}</dd></div>`:""}${p.repo?`<div><dt>${lang==="en"?"Code":"Code source"}</dt><dd><a href="${p.repo.url}" target="_blank" rel="noreferrer">${e(p.repo.name)} ↗</a></dd></div>`:""}</dl></div>
${p.video&&!p.motion?caseFilm(p,lang,d):visual(p,lang,d,true)}
${p.video&&!p.motion?"":mediaCredit(p,lang,d)}
</section>
<section class="case-section shell case-context"><p class="eyebrow">${no()} · ${e(u.context)}</p><div><h2>${e(tr(p.title,lang))}</h2><p>${e(tr(p.context,lang))}</p></div></section>
${p.video&&p.motion?`<section class="case-section shell case-film"><p class="eyebrow">${no()} · ${lang==="en"?"Project film":"Film du projet"}</p>${caseFilm(p,lang,d)}</section>`:""}

<section class="case-section shell"><p class="eyebrow">${no()} · ${e(u.built)}</p><div class="case-list">${p.built[lang].map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><p>${e(x)}</p></article>`).join("")}</div></section>

${p.story?caseStory(p,lang,d,no()):caseFlow(p,lang,no())}
${p.diagram?caseDiagram(p,lang,d,no()):""}
<section class="case-section shell"><p class="eyebrow">${no()} · ${e(u.decisions)}</p><div class="decisions">${p.decisions[lang].map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><h3>${e(x[0])}</h3><p>${e(x[1])}</p></article>`).join("")}</div></section>

<section class="case-section shell stack"><p class="eyebrow">${no()} · ${e(u.stack)}</p><div>${p.tech.map(x=>`<span>${e(x)}</span>`).join("")}<p>${e(u.source)}</p></div></section>
<a class="next shell" href="${href(lang,d,`work/${next.slug}/`)}"><span class="eyebrow">${e(u.next)}</span><strong>${e(tr(next.title,lang))}</strong><b aria-hidden="true">→</b></a>
${contact(lang,d)}
</main>`;
  const crumbs=[
    {name:lang==="en"?"Home":"Accueil",url:`${SITE}/${langRoot(lang)}`},
    {name:tr(p.title,lang),url:`${SITE}/${langRoot(lang)}work/${p.slug}/`}
  ];
  return shell(lang,d,`work/${p.slug}/`,`${tr(p.title,lang)} — ${identity.name}`,tr(p.summary,lang),body,"case",p.slug,{crumbs});
}

function shell(lang,depth,currentPath,title,desc,body,bodyClass="",projectSlug="",seo={}){
  const html=`<!doctype html><html lang="${lang}" data-theme="auto"><head>${head(lang,depth,title,desc,currentPath,seo)}</head><body class="${bodyClass}">${header(lang,depth,projectSlug)}${body}${footer(lang,depth)}</body></html>`;
  // Keep "ROS 2" on one line. In French, a narrow no-break space also keeps ":", ";", "?" and "!" with the word before them.
  const kept=html.replaceAll("ROS 2","ROS\u00a02");
  return lang==="fr"?kept.replace(/ (?=[:;?!](?:\s|<|$))/g,"\u202f"):kept;
}

async function emit(rel,html){const f=path.join(dist,rel);await mkdir(path.dirname(f),{recursive:true});await writeFile(f,html,"utf8");}

await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
await cp(path.join(root,"public"),dist,{recursive:true});
await cp(path.join(root,"src","site.css"),path.join(dist,"assets","site.css"));
await cp(path.join(root,"src","site.js"),path.join(dist,"assets","site.js"));
// Vercel Web Analytics ships as a self-contained ES module; serve it from our own origin.
await mkdir(path.join(dist,"assets","vendor"),{recursive:true});
await cp(path.join(root,"node_modules","@vercel","analytics","dist","index.mjs"),path.join(dist,"assets","vendor","vercel-analytics.mjs"));

await emit("index.html",home("en"));
await emit("fr/index.html",home("fr"));
for(const p of projects){await emit(`work/${p.slug}/index.html`,projectPage(p,"en"));await emit(`fr/work/${p.slug}/index.html`,projectPage(p,"fr"));}

const notFound=`<!doctype html><html lang="en"><head>${head("en",0,"404 — Ibrahim Boubakri","Page not found.","",{indexable:false})}</head><body><a class="skip-link" href="#content">Skip to content</a><main id="content" class="error shell"><p class="eyebrow">404</p><h1>That page is not here.</h1><p>The portfolio is still where it should be.</p><a href="./">Back home →</a></main><script type="module" src="assets/site.js"></script></body></html>`;
await emit("404.html",notFound);

// Every indexable page is listed in both languages, with hreflang alternates and its project image.
const pagePaths=["",...projects.map(p=>`work/${p.slug}/`)];
const sitemapEntry=(lang,p)=>{
  const slug=p.replace(/^work\//,"").replace(/\/$/,"");
  const project=projects.find(x=>x.slug===slug);
  const images=project?[projectMedia[project.slug]?.src,project.diagram?.src[lang]].filter(Boolean):[];
  const image=images.map(src=>`<image:image><image:loc>${SITE}/${src}</image:loc></image:image>`).join("");
  return `<url><loc>${SITE}/${langRoot(lang)}${p}</loc><xhtml:link rel="alternate" hreflang="en-CA" href="${SITE}/${p}"/><xhtml:link rel="alternate" hreflang="fr-CA" href="${SITE}/fr/${p}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/${p}"/>${image}</url>`;
};
const sitemapUrls=pagePaths.flatMap(p=>[sitemapEntry("en",p),sitemapEntry("fr",p)]);
await emit("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${sitemapUrls.join("\n")}\n</urlset>\n`);
await emit("robots.txt",`# The 404 page is noindex; everything else is public.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
await emit(".nojekyll","");
console.log(`Built ${pagePaths.length*2+1} HTML pages.`);
