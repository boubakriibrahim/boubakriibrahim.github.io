import { inject } from "./vendor/vercel-analytics.mjs";

inject({ mode: "production", scriptSrc: "https://va.vercel-scripts.com/v1/script.js" });

(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-mobile-menu]");
  const header = document.querySelector("[data-header]");
  const colorScheme = matchMedia("(prefers-color-scheme: dark)");
  const mobileLayout = matchMedia("(max-width: 1000px)");
  const french = root.lang === "fr";

  const effectiveTheme = () => root.dataset.theme === "auto"
    ? (colorScheme.matches ? "dark" : "light")
    : root.dataset.theme;

  function updateThemeLabel() {
    const nextIsLight = effectiveTheme() === "dark";
    const label = french
      ? `Activer le thème ${nextIsLight ? "clair" : "sombre"}`
      : `Switch to ${nextIsLight ? "light" : "dark"} theme`;
    themeButton?.setAttribute("aria-label", label);
    themeButton?.setAttribute("title", label);
  }

  themeButton?.addEventListener("click", () => {
    const theme = effectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    try { localStorage.setItem("ib-theme", theme); } catch { /* Storage may be disabled. */ }
    updateThemeLabel();
  });
  colorScheme.addEventListener("change", updateThemeLabel);
  updateThemeLabel();

  function closeMenu(returnFocus = false) {
    if (!menu || !menuButton) return;
    menu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    if (returnFocus) menuButton.focus();
  }

  menuButton?.addEventListener("click", () => {
    if (!menu) return;
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute("aria-expanded", String(opening));
  });
  menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenu()));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu && !menu.hidden) closeMenu(true);
  });
  document.addEventListener("click", event => {
    if (menu && !menu.hidden && !header?.contains(event.target)) closeMenu();
  });
  document.addEventListener("focusin", event => {
    if (menu && !menu.hidden && !header?.contains(event.target)) closeMenu();
  });
  mobileLayout.addEventListener("change", () => closeMenu());

  // Stable navigation keeps anchors and keyboard focus below the header.
  const updateHeader = () => header?.classList.toggle("scrolled", scrollY > 24);
  addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  if (document.body.classList.contains("case")) {
    document.querySelectorAll('.desktop-nav a, [data-mobile-menu] a').forEach(link => {
      if (link.hash === "#work") link.setAttribute("aria-current", "location");
    });
  }
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const players = [...document.querySelectorAll("[data-motion-player]")].map(element => {
    const button = element.querySelector("[data-motion-toggle]");
    const videos = [...element.querySelectorAll("video[data-card-motion]")];
    const player = { element, button, videos, inView: false, userPaused: false, blocked: false };
    const eligible = video => player.inView && !document.hidden && !reducedMotion.matches
      && !player.userPaused && video.classList.contains(`${effectiveTheme()}-only`);
    const label = () => {
      const paused = player.userPaused || player.blocked;
      const text = french ? (paused ? "Lire l’animation" : "Mettre en pause")
        : (paused ? "Play animation" : "Pause animation");
      button.textContent = text;
      button.setAttribute("aria-label", `${text}: ${button.dataset.motionTitle}`);
      button.hidden = reducedMotion.matches;
    };
    player.sync = () => {
      label();
      videos.forEach(video => {
        if (!eligible(video)) {
          video.pause();
          if (reducedMotion.matches) video.classList.remove("is-live");
          return;
        }
        if (player.blocked || !video.paused) return;
        const source = video.querySelector("source[data-src]");
        if (source) {
          source.src = source.dataset.src;
          source.removeAttribute("data-src");
          video.load();
        }
        video.muted = true;
        video.play().catch(() => {
          if (eligible(video)) { player.blocked = true; label(); }
        });
      });
    };
    videos.forEach(video => {
      video.addEventListener("playing", () => {
        if (!eligible(video)) { video.pause(); return; }
        video.classList.add("is-live");
        player.blocked = false;
        label();
      });
      video.addEventListener("error", () => {
        video.classList.remove("is-live");
        if (eligible(video)) { player.blocked = true; label(); }
      });
    });
    button.addEventListener("click", () => {
      player.userPaused = player.blocked ? false : !player.userPaused;
      player.blocked = false;
      player.sync();
    });
    return player;
  });
  const syncPlayers = () => players.forEach(player => player.sync());
  if (players.length) {
    if ("IntersectionObserver" in window) {
      const byElement = new Map(players.map(player => [player.element, player]));
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        const player = byElement.get(entry.target);
        player.inView = entry.isIntersecting;
        player.sync();
      }));
      players.forEach(player => observer.observe(player.element));
    } else {
      const updateVisibility = () => players.forEach(player => {
        const rect = player.element.getBoundingClientRect();
        player.inView = rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth;
        player.sync();
      });
      addEventListener("scroll", updateVisibility, { passive: true });
      addEventListener("resize", updateVisibility);
      updateVisibility();
    }
    reducedMotion.addEventListener("change", syncPlayers);
    colorScheme.addEventListener("change", syncPlayers);
    document.addEventListener("visibilitychange", syncPlayers);
    new MutationObserver(syncPlayers).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    syncPlayers();
  }
  // Films open on their poster and play through the site's own controls; the
  // native bar would sit over the frame's footer line.
  document.querySelectorAll("[data-film]").forEach(figure => {
    const video = figure.querySelector("video");
    const start = figure.querySelector("[data-film-start]");
    const ui = figure.querySelector("[data-film-ui]");
    if (!video || !start || !ui) return;
    const playBtn = ui.querySelector("[data-film-play]");
    const seek = ui.querySelector("[data-film-seek]");
    const current = ui.querySelector("[data-film-current]");
    const total = ui.querySelector("[data-film-duration]");
    const ccBtn = ui.querySelector("[data-film-cc]");
    const menu = ui.querySelector("[data-film-menu]");
    const muteBtn = ui.querySelector("[data-film-mute]");
    const fullBtn = ui.querySelector("[data-film-full]");
    const L = french
      ? { play:"Lire", pause:"Pause", mute:"Couper le son", unmute:"Rétablir le son", full:"Plein écran", exit:"Quitter le plein écran", captions:"Sous-titres" }
      : { play:"Play", pause:"Pause", mute:"Mute", unmute:"Unmute", full:"Full screen", exit:"Exit full screen", captions:"Captions" };
    const colon = french ? " : " : ": ";

    const fmt = value => {
      const s = Number.isFinite(value) && value > 0 ? value : 0;
      const m = Math.floor(s / 60);
      return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
    };

    video.controls = false;
    video.tabIndex = 0;
    figure.classList.add("is-enhanced");
    ui.hidden = false;

    const open = () => { figure.classList.remove("is-enhanced"); };
    const toggle = () => { video.paused ? video.play().catch(() => {}) : video.pause(); };

    start.addEventListener("click", () => {
      if (video.ended) video.currentTime = 0;
      open();
      video.play().catch(() => { /* The bar stays, so playback can be retried. */ });
    });
    playBtn.addEventListener("click", toggle);
    video.addEventListener("click", toggle);

    video.addEventListener("play", () => {
      open();
      figure.classList.add("is-playing");
      playBtn.setAttribute("aria-label", L.pause);
    });
    video.addEventListener("pause", () => {
      figure.classList.remove("is-playing");
      playBtn.setAttribute("aria-label", L.play);
    });
    video.addEventListener("ended", () => {
      figure.classList.remove("is-playing");
      playBtn.setAttribute("aria-label", L.play);
      figure.classList.add("is-enhanced");
    });

    let scrubbing = false;
    const syncTime = () => {
      const d = video.duration, t = video.currentTime || 0;
      current.textContent = fmt(t);
      if (!Number.isFinite(d) || d <= 0) return;
      total.textContent = fmt(d);
      if (!scrubbing) seek.value = String(Math.round(t / d * 1000));
      seek.style.setProperty("--p", `${Math.min(100, (t / d) * 100)}%`);
      seek.setAttribute("aria-valuetext", `${fmt(t)} / ${fmt(d)}`);
    };
    video.addEventListener("timeupdate", syncTime);
    video.addEventListener("loadedmetadata", syncTime);
    video.addEventListener("durationchange", syncTime);

    const seekTo = value => {
      const d = video.duration;
      if (!Number.isFinite(d) || d <= 0) return;
      video.currentTime = Math.max(0, Math.min(d, value));
    };
    seek.addEventListener("pointerdown", () => { scrubbing = true; });
    addEventListener("pointerup", () => { scrubbing = false; });
    seek.addEventListener("pointercancel", () => { scrubbing = false; });
    seek.addEventListener("input", () => {
      const d = video.duration;
      if (!Number.isFinite(d) || d <= 0) return;
      const t = (Number(seek.value) / 1000) * d;
      video.currentTime = t;
      current.textContent = fmt(t);
      seek.style.setProperty("--p", `${Number(seek.value) / 10}%`);
      seek.setAttribute("aria-valuetext", `${fmt(t)} / ${fmt(d)}`);
    });
    seek.addEventListener("keydown", event => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      seekTo(video.currentTime + (event.key === "ArrowRight" ? 5 : -5));
    });

    const syncMute = () => {
      const muted = video.muted || video.volume === 0;
      muteBtn.classList.toggle("is-on", muted);
      muteBtn.setAttribute("aria-pressed", String(muted));
      muteBtn.setAttribute("aria-label", muted ? L.unmute : L.mute);
    };
    muteBtn.addEventListener("click", () => { video.muted = !video.muted; });
    video.addEventListener("volumechange", syncMute);
    syncMute();

    const syncFull = () => {
      const on = document.fullscreenElement === figure;
      fullBtn.classList.toggle("is-on", on);
      fullBtn.setAttribute("aria-pressed", String(on));
      fullBtn.setAttribute("aria-label", on ? L.exit : L.full);
    };
    fullBtn.addEventListener("click", () => {
      if (document.fullscreenElement === figure) { document.exitFullscreen?.(); return; }
      if (figure.requestFullscreen) figure.requestFullscreen().catch(() => {});
      else video.webkitEnterFullscreen?.();
    });
    document.addEventListener("fullscreenchange", syncFull);

    if (ccBtn && menu) {
      const options = [...menu.querySelectorAll("[role=menuitemradio]")];
      const tracks = [...video.textTracks];
      const setTrack = lang => {
        tracks.forEach(t => { t.mode = lang && t.language === lang ? "showing" : "disabled"; });
        options.forEach(o => o.setAttribute("aria-checked", String(o.dataset.cc === (lang || ""))));
        const on = tracks.find(t => t.mode === "showing");
        ccBtn.classList.toggle("is-on", Boolean(on));
        ccBtn.setAttribute("aria-label", on ? `${L.captions}${colon}${on.label}` : L.captions);
      };
      const closeMenu = () => { menu.hidden = true; ccBtn.setAttribute("aria-expanded", "false"); };
      ccBtn.addEventListener("click", () => {
        const opening = menu.hidden;
        menu.hidden = !opening;
        ccBtn.setAttribute("aria-expanded", String(opening));
        if (opening) (options.find(o => o.getAttribute("aria-checked") === "true") || options[0]).focus();
      });
      options.forEach(option => option.addEventListener("click", () => {
        setTrack(option.dataset.cc);
        closeMenu();
        ccBtn.focus();
      }));
      menu.addEventListener("keydown", event => {
        const index = options.indexOf(document.activeElement);
        if (event.key === "ArrowDown") { event.preventDefault(); options[(index + 1) % options.length].focus(); }
        else if (event.key === "ArrowUp") { event.preventDefault(); options[(index - 1 + options.length) % options.length].focus(); }
        else if (event.key === "Escape") { event.preventDefault(); closeMenu(); ccBtn.focus(); }
      });
      document.addEventListener("pointerdown", event => {
        if (!menu.hidden && !menu.contains(event.target) && event.target !== ccBtn) closeMenu();
      });
      setTrack(video.querySelector("track[default]")?.srclang || "");
    }

    figure.addEventListener("keydown", event => {
      if (event.target.closest("button, a, input")) return;
      if (event.key === " " || event.key === "k" || event.key === "K") { event.preventDefault(); toggle(); }
      else if (event.key === "ArrowLeft") { event.preventDefault(); seekTo(video.currentTime - 5); }
      else if (event.key === "ArrowRight") { event.preventDefault(); seekTo(video.currentTime + 5); }
      else if (event.key === "m" || event.key === "M") video.muted = !video.muted;
      else if (event.key === "f" || event.key === "F") fullBtn.click();
    });
  });
  document.querySelectorAll("[data-year]").forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });
})();
