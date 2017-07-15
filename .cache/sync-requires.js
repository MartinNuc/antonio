// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---src-pages-404-js": preferDefault(require("/Users/mist/programming/antonio/src/pages/404.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/mist/programming/antonio/src/pages/index.js")),
  "page-component---src-pages-jidelni-listek-js": preferDefault(require("/Users/mist/programming/antonio/src/pages/jidelni-listek.js"))
}

exports.json = {
  "404.json": require("/Users/mist/programming/antonio/.cache/json/404.json"),
  "index.json": require("/Users/mist/programming/antonio/.cache/json/index.json"),
  "jidelni-listek.json": require("/Users/mist/programming/antonio/.cache/json/jidelni-listek.json"),
  "404-html.json": require("/Users/mist/programming/antonio/.cache/json/404-html.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/mist/programming/antonio/src/layouts/index"))
}