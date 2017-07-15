// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---src-pages-404-js": require("gatsby-module-loader?name=page-component---src-pages-404-js!/Users/mist/programming/antonio/src/pages/404.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/mist/programming/antonio/src/pages/index.js"),
  "page-component---src-pages-jidelni-listek-js": require("gatsby-module-loader?name=page-component---src-pages-jidelni-listek-js!/Users/mist/programming/antonio/src/pages/jidelni-listek.js")
}

exports.json = {
  "404.json": require("gatsby-module-loader?name=path---404!/Users/mist/programming/antonio/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/mist/programming/antonio/.cache/json/index.json"),
  "jidelni-listek.json": require("gatsby-module-loader?name=path---jidelni-listek!/Users/mist/programming/antonio/.cache/json/jidelni-listek.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/mist/programming/antonio/.cache/json/404-html.json")
}

exports.layouts = {
  "index": require("gatsby-module-loader?name=layout-component---index!/Users/mist/programming/antonio/src/layouts/index")
}