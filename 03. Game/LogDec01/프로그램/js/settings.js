/**
 * 사이트 전역 사용자 설정 (localStorage)
 * theme: dark | light | system
 * fontSize: small | medium | large
 */
(function () {
  var STORAGE_KEY = "personal-home-settings";

  var DEFAULTS = {
    theme: "dark",
    fontSize: "medium",
  };

  var FONT_SIZES = {
    small: "14px",
    medium: "16px",
    large: "18px",
  };

  function normalize(raw) {
    var out = {};
    Object.keys(DEFAULTS).forEach(function (key) {
      out[key] = raw && raw[key] != null ? raw[key] : DEFAULTS[key];
    });
    if (out.theme !== "dark" && out.theme !== "light" && out.theme !== "system") {
      out.theme = DEFAULTS.theme;
    }
    if (!FONT_SIZES[out.fontSize]) out.fontSize = DEFAULTS.fontSize;
    return out;
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return normalize({});
      return normalize(JSON.parse(raw));
    } catch (e) {
      return normalize({});
    }
  }

  function save(partial) {
    var next = normalize(Object.assign({}, load(), partial || {}));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      /* ignore quota / private mode */
    }
    apply(next);
    return next;
  }

  function resolveTheme(theme) {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme === "light" ? "light" : "dark";
  }

  function apply(settings) {
    settings = normalize(settings || load());
    var root = document.documentElement;
    root.setAttribute("data-theme", resolveTheme(settings.theme));
    root.setAttribute("data-font-size", settings.fontSize);
    root.style.setProperty("--font-size-base", FONT_SIZES[settings.fontSize]);
  }

  function reset() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    apply(DEFAULTS);
    return normalize({});
  }

  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  function onSystemThemeChange() {
    if (load().theme === "system") apply(load());
  }
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", onSystemThemeChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(onSystemThemeChange);
  }

  function bindSettingsForm(root) {
    if (!root) return;
    var current = load();

    var themeInputs = root.querySelectorAll('input[name="theme"]');
    themeInputs.forEach(function (input) {
      input.checked = input.value === current.theme;
      input.addEventListener("change", function () {
        if (input.checked) save({ theme: input.value });
      });
    });

    var fontInputs = root.querySelectorAll('input[name="fontSize"]');
    fontInputs.forEach(function (input) {
      input.checked = input.value === current.fontSize;
      input.addEventListener("change", function () {
        if (input.checked) save({ fontSize: input.value });
      });
    });

    var resetBtn = root.querySelector("[data-settings-reset]");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        var defaults = reset();
        themeInputs.forEach(function (input) {
          input.checked = input.value === defaults.theme;
        });
        fontInputs.forEach(function (input) {
          input.checked = input.value === defaults.fontSize;
        });
      });
    }
  }

  window.SiteSettings = {
    load: load,
    save: save,
    apply: apply,
    reset: reset,
    defaults: DEFAULTS,
    bindSettingsForm: bindSettingsForm,
  };

  apply(load());
})();
