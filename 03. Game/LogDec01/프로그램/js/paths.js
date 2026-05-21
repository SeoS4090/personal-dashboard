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

  function getBasePath() {
    var config = window.SITE_CONFIG || {};
    var base = config.basePath || "";
    if (base && base.charAt(base.length - 1) === "/") {
      base = base.slice(0, -1);
    }
    return base;
  }

  function resolve(path) {
    path = path.replace(/^\//, "");
    var base = getBasePath();
    if (base) return base + "/" + path;
    return relativeRoot() + path;
  }

  window.SitePaths = {
    getDepth: getDepth,
    asset: resolve,
    page: resolve,
  };
})();
