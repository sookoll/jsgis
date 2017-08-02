SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "jsgis/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
      "babel-plugin-wildcard": "npm:babel-plugin-wildcard@2.1.2",
      "assert": "npm:jspm-nodelibs-assert@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.1",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "fs": "npm:jspm-nodelibs-fs@0.2.1"
    }
  },
  transpiler: "plugin-babel",
  meta: {
    '*.js': {
      babelOptions: {
        plugins: ["babel-plugin-wildcard"]
      }
    }
  },
  packages: {
    "jsgis": {
      "main": "main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "css": "github:systemjs/plugin-css@0.1.35"
  },
  packages: {}
});
