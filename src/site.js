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
  document.querySelectorAll("[data-year]").forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });
})();
