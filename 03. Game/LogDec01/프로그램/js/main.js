(function () {
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "className") node.className = attrs[key];
        else if (key === "text") node.textContent = attrs[key];
        else if (key === "html") node.innerHTML = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    (children || []).forEach(function (child) {
      if (typeof child === "string") node.appendChild(document.createTextNode(child));
      else if (child) node.appendChild(child);
    });
    return node;
  }

  function statusLabel(status) {
    var map = {
      dev: "개발 중",
      planned: "예정",
      done: "완료",
    };
    return map[status] || status;
  }

  function injectStyles() {
    var links = [
      "css/tokens.css",
      "css/base.css",
      "css/layout.css",
      "css/components.css",
      "css/settings.css",
    ];
    links.forEach(function (href) {
      var link = el("link", {
        rel: "stylesheet",
        href: SitePaths.asset(href),
      });
      document.head.appendChild(link);
    });
  }

  function renderSiteHeader(activeId) {
    var mount = document.getElementById("site-header");
    if (!mount) return;

    var config = window.SITE_CONFIG || {};
    var nav = el("nav", { className: "site-nav", "aria-label": "주요 메뉴" }, [
      el("a", { className: "site-logo", href: SitePaths.page("index.html"), text: config.siteName || "Home" }),
      el("div", { className: "site-nav-links" }, [
        el("a", {
          className: activeId === "home" ? "is-active" : "",
          href: SitePaths.page("index.html"),
          text: "Home",
        }),
        el("a", {
          className: activeId === "games" ? "is-active" : "",
          href: SitePaths.page("games/index.html"),
          text: "Games",
        }),
        el("a", {
          className: activeId === "settings" ? "is-active" : "",
          href: SitePaths.page("settings/index.html"),
          text: "Settings",
        }),
      ]),
    ]);

    mount.appendChild(nav);
  }

  function renderSiteFooter() {
    var mount = document.getElementById("site-footer");
    if (!mount) return;
    var year = new Date().getFullYear();
    var config = window.SITE_CONFIG || {};
    mount.appendChild(
      el("footer", { className: "site-footer-inner" }, [
        el("p", { text: "\u00A9 " + year + " " + (config.author || config.siteName) }),
        el("p", { className: "muted", text: "GitHub Pages \u00B7 HTML / CSS / JavaScript" }),
      ])
    );
  }

  function renderProjectCards(container, projects) {
    if (!container || !projects) return;
    projects.forEach(function (project) {
      var head = el("div", { className: "card-head" });
      head.appendChild(el("h3", { text: project.title }));
      head.appendChild(
        el("span", {
          className: "badge badge--" + (project.status || "planned"),
          text: statusLabel(project.status),
        })
      );
      var card = el("article", { className: "card" }, [
        head,
        el("p", { className: "card-desc", text: project.description || "" }),
        el("a", {
          className: "btn btn-primary",
          href: SitePaths.page(project.playPath || project.path),
          text: "보기",
        }),
      ]);
      container.appendChild(card);
    });
  }

  window.SiteUI = {
    init: function (options) {
      options = options || {};
      injectStyles();
      renderSiteHeader(options.activeNav || "home");
      renderSiteFooter();
      if (options.renderProjects) {
        var config = window.SITE_CONFIG || {};
        var section = config.sections && config.sections[0];
        renderProjectCards(document.getElementById("project-grid"), section && section.projects);
      }
    },
    renderProjectCards: renderProjectCards,
    statusLabel: statusLabel,
  };
})();
