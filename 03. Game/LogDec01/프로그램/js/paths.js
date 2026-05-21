(function () {
  function getDepth() {
    var raw = document.documentElement.getAttribute("data-depth");
    var depth = parseInt(raw, 10);
    return isNaN(depth) ? 0 : depth;
  }

  function relativeRoot() {
    var depth = getDepth();
    if (depth <= 0) return "";
    var parts = [];
    for (var i = 0; i < depth; i++) parts.push("..");
    return parts.join("/") + "/";
  }

  var SITE_FOLDERS = ["games", "settings", "css", "js"];

  function getBasePath() {
    var config = window.SITE_CONFIG || {};
    var base = config.basePath;
    if (base != null && String(base).length > 0) {
      base = String(base);
      if (base.charAt(base.length - 1) === "/") base = base.slice(0, -1);
      return base;
    }

    var segments = location.pathname.split("/").filter(Boolean);
    if (segments.length >= 2 && SITE_FOLDERS.indexOf(segments[0]) < 0 && SITE_FOLDERS.indexOf(segments[1]) >= 0) {
      return "/" + segments[0];
    }
    if (
      segments.length === 1 &&
      SITE_FOLDERS.indexOf(segments[0]) < 0 &&
      segments[0].indexOf(".") < 0
    ) {
      return "/" + segments[0];
    }
    return "";
  }

  function resolve(path) {
    path = path.replace(/^\//, "");
    var base = getBasePath();
    if (base) return base + "/" + path;
    var root = relativeRoot();
    if (root) return root + path;
    return "./" + path;
  }

  window.SitePaths = {
    getDepth: getDepth,
    asset: resolve,
    page: resolve,
  };
})();
