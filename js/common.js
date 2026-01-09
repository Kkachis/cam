/* =========================
   KKACHI UNIVERSITY - COMMON JS
   - Theme toggle (localStorage)
   - Quick modal
   - Tabs (About)
   - Utility actions (scroll top)
   ========================= */

(function () {
  const root = document.documentElement;

  function getStoredTheme() {
    try { return localStorage.getItem("ku-theme"); }
    catch { return null; }
  }

  function setStoredTheme(theme) {
    try { localStorage.setItem("ku-theme", theme); } catch {}
  }

  function applyTheme(theme) {
    const t = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", t);

    // Optional: icon swap
    document.querySelectorAll('[data-action="toggle-theme"] .icon').forEach(el => {
      el.textContent = (t === "light") ? "☀" : "☾";
    });
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    setStoredTheme(next);
  }

  function openModal(name) {
    const modal = document.querySelector(`.modal[data-modal="${name}"]`);
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // Focus management: focus close button if exists
    const closeBtn = modal.querySelector('[data-action="close-quick"]');
    if (closeBtn) closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal(name) {
    const modal = document.querySelector(`.modal[data-modal="${name}"]`);
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function bindTabs() {
    document.querySelectorAll(".tabs[data-tabs]").forEach(tabs => {
      const buttons = Array.from(tabs.querySelectorAll(".tab-list .tab"));
      const panels = Array.from(tabs.querySelectorAll(".tab-panels .tab-panel"));

      function activate(key) {
        buttons.forEach(btn => {
          const isOn = btn.dataset.tab === key;
          btn.classList.toggle("is-active", isOn);
          btn.setAttribute("aria-selected", isOn ? "true" : "false");
        });
        panels.forEach(p => p.classList.toggle("is-active", p.dataset.panel === key));
      }

      buttons.forEach(btn => {
        btn.addEventListener("click", () => activate(btn.dataset.tab));
      });
    });
  }

  function bindGlobalActions() {
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-action]");
      if (!t) return;

      const action = t.getAttribute("data-action");

      if (action === "toggle-theme") {
        toggleTheme();
      }

      if (action === "open-quick") {
        openModal("quick");
      }
      if (action === "close-quick") {
        closeModal("quick");
      }

      if (action === "scroll-top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    // ESC to close modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal("quick");
    });
  }

  function initTheme() {
    const stored = getStoredTheme();
    if (stored) {
      applyTheme(stored);
      return;
    }
    // default remains HTML attr; keep stable.
    applyTheme(root.getAttribute("data-theme") || "dark");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    bindGlobalActions();
    bindTabs();
  });
})();
(function () {
  const media = document.querySelector(".glass-media");
  if (!media) return;

  const img = media.querySelector("img");
  const list = media.dataset.images
    ?.split(",")
    .map(s => s.trim())
    .filter(Boolean);

  if (!list || list.length < 2) return;

  let index = 0;

  media.addEventListener("click", () => {
    media.classList.add("is-zooming");

    setTimeout(() => {
      index = (index + 1) % list.length;
      img.style.opacity = "0";

      setTimeout(() => {
        img.src = list[index];
        img.style.opacity = "1";
      }, 120);
    }, 120);

    setTimeout(() => {
      media.classList.remove("is-zooming");
    }, 360);
  });

  /* 키보드 접근성 */
  media.setAttribute("tabindex", "0");
  media.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      media.click();
    }
  });
})();
