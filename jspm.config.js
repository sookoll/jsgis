SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "jsgis/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "jsgis/build.vendor.js": [
        "npm:proj4@2.4.3/dist/proj4-src.js",
        "npm:proj4@2.4.3.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:openlayers@4.2.0/dist/ol.js",
        "npm:openlayers@4.2.0.json"
      ],
      "jsgis/build.jsgis.js": [
        "jsgis/main.js",
        "jsgis/lib/jsgis.js",
        "jsgis/lib/components.js",
        "jsgis/lib/components/viewprojection/viewprojection.js",
        "jsgis/lib/components/viewprojection/template.hbs!github:davis/plugin-hbs@1.2.3/hbs.js",
        "github:components/handlebars.js@4.0.10/handlebars.runtime.js",
        "github:components/handlebars.js@4.0.10.json",
        "github:davis/plugin-hbs@1.2.3.json",
        "jsgis/lib/components/viewprojection/viewprojection.css!github:systemjs/plugin-css@0.1.35/css.js",
        "github:systemjs/plugin-css@0.1.35.json",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.25.json",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js",
        "jsgis/lib/components/statusbar/statusbar.js",
        "jsgis/lib/components/statusbar/toggle_button.hbs!github:davis/plugin-hbs@1.2.3/hbs.js",
        "jsgis/lib/components/statusbar/statusbar.hbs!github:davis/plugin-hbs@1.2.3/hbs.js",
        "jsgis/lib/components/statusbar/statusbar.css!github:systemjs/plugin-css@0.1.35/css.js",
        "jsgis/lib/ui.js",
        "jsgis/lib/components/scaleline/scaleline.js",
        "jsgis/lib/components/scaleline/scaleline.css!github:systemjs/plugin-css@0.1.35/css.js",
        "jsgis/lib/components/mouseposition/mouseposition.js",
        "jsgis/lib/components/mouseposition/mouseposition.css!github:systemjs/plugin-css@0.1.35/css.js",
        "jsgis/lib/map.js",
        "jsgis/lib/map.css!github:systemjs/plugin-css@0.1.35/css.js",
        "npm:openlayers@4.2.0/css/ol.css!github:systemjs/plugin-css@0.1.35/css.js",
        "npm:yamljs@0.3.0/lib/Yaml.js",
        "npm:yamljs@0.3.0.json",
        "npm:yamljs@0.3.0/lib/Utils.js",
        "npm:yamljs@0.3.0/lib/Pattern.js",
        "npm:yamljs@0.3.0/lib/Dumper.js",
        "npm:yamljs@0.3.0/lib/Inline.js",
        "npm:yamljs@0.3.0/lib/Exception/DumpException.js",
        "npm:yamljs@0.3.0/lib/Exception/ParseMore.js",
        "npm:yamljs@0.3.0/lib/Exception/ParseException.js",
        "npm:yamljs@0.3.0/lib/Escaper.js",
        "npm:yamljs@0.3.0/lib/Unescaper.js",
        "npm:yamljs@0.3.0/lib/Parser.js",
        "jsgis/config/jsgis.yml!github:systemjs/plugin-text@0.0.11/text.js",
        "github:systemjs/plugin-text@0.0.11.json"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
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
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.35",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "graceful-fs": "npm:graceful-fs@4.1.11",
    "hbs": "github:davis/plugin-hbs@1.2.3",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "openlayers": "npm:openlayers@4.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "proj4": "npm:proj4@2.4.3",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "repl": "npm:jspm-nodelibs-repl@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.11",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "uglify-js": "npm:uglify-js@2.8.29",
    "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "uws": "npm:uws@0.14.5",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "yamljs": "npm:yamljs@0.3.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:openlayers@4.2.0": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "marked": "npm:marked@0.3.6",
        "walk": "npm:walk@2.3.9",
        "rollup-plugin-cleanup": "npm:rollup-plugin-cleanup@1.0.1",
        "jsdoc": "npm:jsdoc@3.4.3",
        "closure-util": "npm:closure-util@1.21.0",
        "rbush": "npm:rbush@2.0.1",
        "nomnom": "npm:nomnom@1.8.1",
        "handlebars": "npm:handlebars@4.0.10",
        "temp": "npm:temp@0.8.3",
        "rollup": "npm:rollup@0.42.0",
        "derequire": "npm:derequire@2.0.6",
        "metalsmith-layouts": "npm:metalsmith-layouts@1.8.1",
        "pixelworks": "npm:pixelworks@1.1.0",
        "rollup-plugin-node-resolve": "npm:rollup-plugin-node-resolve@3.0.0",
        "metalsmith": "npm:metalsmith@2.3.0",
        "rollup-plugin-commonjs": "npm:rollup-plugin-commonjs@8.1.0",
        "async": "npm:async@2.4.1",
        "pbf": "npm:pbf@3.0.5",
        "fs-extra": "npm:fs-extra@3.0.1",
        "@mapbox/vector-tile": "npm:@mapbox/vector-tile@1.3.0"
      }
    },
    "npm:jsdoc@3.4.3": {
      "map": {
        "marked": "npm:marked@0.3.6",
        "espree": "npm:espree@3.1.7",
        "klaw": "npm:klaw@1.3.1",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "js2xmlparser": "npm:js2xmlparser@1.0.0",
        "catharsis": "npm:catharsis@0.8.9",
        "requizzle": "npm:requizzle@0.2.1",
        "taffydb": "npm:taffydb@2.6.2",
        "bluebird": "npm:bluebird@3.4.7",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "mkdirp": "npm:mkdirp@0.5.1",
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:closure-util@1.21.0": {
      "map": {
        "glob": "npm:glob@7.1.2",
        "handlebars": "npm:handlebars@4.0.10",
        "nomnom": "npm:nomnom@1.8.1",
        "temp": "npm:temp@0.8.3",
        "async": "npm:async@2.4.1",
        "fs-extra": "npm:fs-extra@3.0.1",
        "minimatch": "npm:minimatch@3.0.4",
        "acorn": "npm:acorn@5.0.3",
        "gaze": "npm:gaze@1.1.2",
        "rimraf": "npm:rimraf@2.6.1",
        "get-down": "npm:get-down@1.1.0",
        "send": "npm:send@0.15.3",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "socket.io": "npm:socket.io@2.0.1",
        "npmlog": "npm:npmlog@4.1.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:handlebars@4.0.10": {
      "map": {
        "async": "npm:async@1.5.2",
        "optimist": "npm:optimist@0.6.1",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:metalsmith-layouts@1.8.1": {
      "map": {
        "async": "npm:async@1.5.2",
        "is-utf8": "npm:is-utf8@0.2.1",
        "multimatch": "npm:multimatch@2.1.0",
        "consolidate": "npm:consolidate@0.14.5",
        "fs-readdir-recursive": "npm:fs-readdir-recursive@1.0.0",
        "extend": "npm:extend@3.0.1",
        "lodash.omit": "npm:lodash.omit@4.5.0",
        "debug": "npm:debug@2.6.8"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "minimatch": "npm:minimatch@3.0.4",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "once": "npm:once@1.4.0",
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.6"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "once": "npm:once@1.4.0",
        "inflight": "npm:inflight@1.0.6",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "minimatch": "npm:minimatch@3.0.4",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:rollup-plugin-cleanup@1.0.1": {
      "map": {
        "acorn": "npm:acorn@4.0.13",
        "rollup-pluginutils": "npm:rollup-pluginutils@2.0.1",
        "magic-string": "npm:magic-string@0.22.4"
      }
    },
    "npm:derequire@2.0.6": {
      "map": {
        "acorn": "npm:acorn@4.0.13",
        "escope": "npm:escope@3.6.0",
        "concat-stream": "npm:concat-stream@1.6.0",
        "through2": "npm:through2@2.0.3",
        "yargs": "npm:yargs@6.6.0"
      }
    },
    "npm:rollup-plugin-commonjs@8.1.0": {
      "map": {
        "acorn": "npm:acorn@4.0.13",
        "rollup-pluginutils": "npm:rollup-pluginutils@2.0.1",
        "magic-string": "npm:magic-string@0.19.1",
        "resolve": "npm:resolve@1.4.0",
        "estree-walker": "npm:estree-walker@0.3.1"
      }
    },
    "npm:walk@2.3.9": {
      "map": {
        "foreachasync": "npm:foreachasync@3.0.0"
      }
    },
    "npm:temp@0.8.3": {
      "map": {
        "rimraf": "npm:rimraf@2.2.8",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:metalsmith@2.3.0": {
      "map": {
        "rimraf": "npm:rimraf@2.6.1",
        "is-utf8": "npm:is-utf8@0.2.1",
        "clone": "npm:clone@1.0.2",
        "stat-mode": "npm:stat-mode@0.2.2",
        "unyield": "npm:unyield@0.0.1",
        "absolute": "npm:absolute@0.0.1",
        "is": "npm:is@3.2.1",
        "thunkify": "npm:thunkify@2.1.2",
        "co-fs-extra": "npm:co-fs-extra@1.2.1",
        "gray-matter": "npm:gray-matter@2.1.1",
        "recursive-readdir": "npm:recursive-readdir@2.2.1",
        "ware": "npm:ware@1.3.0",
        "win-fork": "npm:win-fork@1.1.1",
        "has-generators": "npm:has-generators@1.0.1",
        "chalk": "npm:chalk@1.1.3",
        "commander": "npm:commander@2.11.0"
      }
    },
    "npm:rbush@2.0.1": {
      "map": {
        "quickselect": "npm:quickselect@1.0.0"
      }
    },
    "npm:rollup@0.42.0": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.15"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.7"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:rollup-plugin-node-resolve@3.0.0": {
      "map": {
        "browser-resolve": "npm:browser-resolve@1.11.2",
        "builtin-modules": "npm:builtin-modules@1.1.1",
        "resolve": "npm:resolve@1.4.0",
        "is-module": "npm:is-module@1.0.0"
      }
    },
    "npm:fs-extra@3.0.1": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "universalify": "npm:universalify@0.1.1",
        "jsonfile": "npm:jsonfile@3.0.1"
      }
    },
    "npm:nomnom@1.8.1": {
      "map": {
        "underscore": "npm:underscore@1.6.0",
        "chalk": "npm:chalk@0.4.0"
      }
    },
    "npm:espree@3.1.7": {
      "map": {
        "acorn": "npm:acorn@3.3.0",
        "acorn-jsx": "npm:acorn-jsx@3.0.1"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:rollup-pluginutils@2.0.1": {
      "map": {
        "estree-walker": "npm:estree-walker@0.3.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:requizzle@0.2.1": {
      "map": {
        "underscore": "npm:underscore@1.6.0"
      }
    },
    "npm:get-down@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.2",
        "q": "npm:q@1.0.0",
        "decompress-zip": "npm:decompress-zip@0.3.0",
        "request-progress": "npm:request-progress@0.3.1",
        "junk": "npm:junk@1.0.2",
        "tar": "npm:tar@1.0.1",
        "mout": "npm:mout@0.10.0",
        "tmp": "npm:tmp@0.0.27",
        "retry": "npm:retry@0.6.1",
        "request": "npm:request@2.61.0"
      }
    },
    "npm:rimraf@2.6.1": {
      "map": {
        "glob": "npm:glob@7.1.2"
      }
    },
    "npm:pbf@3.0.5": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "resolve-protobuf-schema": "npm:resolve-protobuf-schema@2.0.0"
      }
    },
    "npm:buffer@5.0.7": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.1"
      }
    },
    "npm:uglify-js@2.8.29": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "yargs": "npm:yargs@3.10.0"
      }
    },
    "npm:source-map-support@0.4.15": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:consolidate@0.14.5": {
      "map": {
        "bluebird": "npm:bluebird@3.5.0"
      }
    },
    "npm:multimatch@2.1.0": {
      "map": {
        "minimatch": "npm:minimatch@3.0.4",
        "array-union": "npm:array-union@1.0.2",
        "arrify": "npm:arrify@1.0.1",
        "array-differ": "npm:array-differ@1.0.0"
      }
    },
    "npm:browser-resolve@1.11.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:co-fs-extra@1.2.1": {
      "map": {
        "fs-extra": "npm:fs-extra@0.26.7",
        "thunkify-wrap": "npm:thunkify-wrap@1.0.4",
        "co-from-stream": "npm:co-from-stream@0.0.0"
      }
    },
    "npm:recursive-readdir@2.2.1": {
      "map": {
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:concat-stream@1.6.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "typedarray": "npm:typedarray@0.0.6",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:async@2.4.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:send@0.15.3": {
      "map": {
        "debug": "npm:debug@2.6.7",
        "http-errors": "npm:http-errors@1.6.2",
        "encodeurl": "npm:encodeurl@1.0.1",
        "destroy": "npm:destroy@1.0.4",
        "statuses": "npm:statuses@1.3.1",
        "mime": "npm:mime@1.3.4",
        "ms": "npm:ms@2.0.0",
        "fresh": "npm:fresh@0.5.0",
        "etag": "npm:etag@1.8.0",
        "depd": "npm:depd@1.1.1",
        "range-parser": "npm:range-parser@1.2.0",
        "on-finished": "npm:on-finished@2.3.0",
        "escape-html": "npm:escape-html@1.0.3"
      }
    },
    "npm:socket.io@2.0.1": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "object-assign": "npm:object-assign@4.1.1",
        "socket.io-client": "npm:socket.io-client@2.0.1",
        "engine.io": "npm:engine.io@3.1.0",
        "socket.io-adapter": "npm:socket.io-adapter@1.1.1",
        "socket.io-parser": "npm:socket.io-parser@3.1.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:catharsis@0.8.9": {
      "map": {
        "underscore-contrib": "npm:underscore-contrib@0.3.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:gaze@1.1.2": {
      "map": {
        "globule": "npm:globule@1.2.0"
      }
    },
    "npm:magic-string@0.19.1": {
      "map": {
        "vlq": "npm:vlq@0.2.2"
      }
    },
    "npm:magic-string@0.22.4": {
      "map": {
        "vlq": "npm:vlq@0.2.2"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:npmlog@4.1.0": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.4",
        "gauge": "npm:gauge@2.7.4"
      }
    },
    "npm:optimist@0.6.1": {
      "map": {
        "minimist": "npm:minimist@0.0.10",
        "wordwrap": "npm:wordwrap@0.0.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:escope@3.6.0": {
      "map": {
        "es6-map": "npm:es6-map@0.1.5",
        "esrecurse": "npm:esrecurse@4.2.0",
        "es6-weak-map": "npm:es6-weak-map@2.0.2",
        "estraverse": "npm:estraverse@4.2.0"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "supports-color": "npm:supports-color@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-ansi": "npm:has-ansi@2.0.0"
      }
    },
    "npm:gray-matter@2.1.1": {
      "map": {
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "coffee-script": "npm:coffee-script@1.12.7",
        "ansi-red": "npm:ansi-red@0.1.1",
        "js-yaml": "npm:js-yaml@3.9.1",
        "toml": "npm:toml@2.3.2"
      }
    },
    "npm:through2@2.0.3": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:resolve@1.4.0": {
      "map": {
        "path-parse": "npm:path-parse@1.0.5"
      }
    },
    "npm:ware@1.3.0": {
      "map": {
        "wrap-fn": "npm:wrap-fn@0.1.5"
      }
    },
    "npm:http-errors@1.6.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "depd": "npm:depd@1.1.1",
        "statuses": "npm:statuses@1.3.1",
        "setprototypeof": "npm:setprototypeof@1.0.3"
      }
    },
    "npm:fs-extra@0.26.7": {
      "map": {
        "jsonfile": "npm:jsonfile@2.4.0",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "klaw": "npm:klaw@1.3.1",
        "rimraf": "npm:rimraf@2.6.1"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:decompress-zip@0.3.0": {
      "map": {
        "q": "npm:q@1.5.0",
        "readable-stream": "npm:readable-stream@1.1.14",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "nopt": "npm:nopt@3.0.6",
        "binary": "npm:binary@0.3.0",
        "mkpath": "npm:mkpath@0.1.0",
        "touch": "npm:touch@0.0.3"
      }
    },
    "npm:acorn-jsx@3.0.1": {
      "map": {
        "acorn": "npm:acorn@3.3.0"
      }
    },
    "npm:underscore-contrib@0.3.0": {
      "map": {
        "underscore": "npm:underscore@1.6.0"
      }
    },
    "npm:chalk@0.4.0": {
      "map": {
        "ansi-styles": "npm:ansi-styles@1.0.0",
        "has-color": "npm:has-color@0.1.7",
        "strip-ansi": "npm:strip-ansi@0.1.1"
      }
    },
    "npm:globule@1.2.0": {
      "map": {
        "glob": "npm:glob@7.1.2",
        "minimatch": "npm:minimatch@3.0.4",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:tar@1.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.11"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:tmp@0.0.27": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:socket.io-client@2.0.1": {
      "map": {
        "debug": "npm:debug@2.6.4",
        "socket.io-parser": "npm:socket.io-parser@3.1.2",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
        "backo2": "npm:backo2@1.0.2",
        "component-bind": "npm:component-bind@1.0.0",
        "engine.io-client": "npm:engine.io-client@3.1.1",
        "indexof": "npm:indexof@0.0.1",
        "component-emitter": "npm:component-emitter@1.2.1",
        "has-cors": "npm:has-cors@1.1.0",
        "object-component": "npm:object-component@0.0.3",
        "to-array": "npm:to-array@0.1.4",
        "parseuri": "npm:parseuri@0.0.5"
      }
    },
    "npm:resolve-protobuf-schema@2.0.0": {
      "map": {
        "protocol-buffers-schema": "npm:protocol-buffers-schema@2.2.0"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "randombytes": "npm:randombytes@2.0.5",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.6",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.13"
      }
    },
    "npm:debug@2.6.7": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:debug@2.6.8": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:unyield@0.0.1": {
      "map": {
        "co": "npm:co@3.1.0"
      }
    },
    "npm:socket.io-parser@3.1.2": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "component-emitter": "npm:component-emitter@1.2.1",
        "isarray": "npm:isarray@2.0.1",
        "has-binary2": "npm:has-binary2@1.0.2"
      }
    },
    "npm:engine.io@3.1.0": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "ws": "npm:ws@2.3.1",
        "engine.io-parser": "npm:engine.io-parser@2.1.1",
        "base64id": "npm:base64id@1.0.0",
        "accepts": "npm:accepts@1.3.3",
        "cookie": "npm:cookie@0.3.1"
      }
    },
    "npm:are-we-there-yet@1.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:esrecurse@4.2.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:brace-expansion@1.1.8": {
      "map": {
        "balanced-match": "npm:balanced-match@1.0.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:wrap-fn@0.1.5": {
      "map": {
        "co": "npm:co@3.1.0"
      }
    },
    "npm:@mapbox/vector-tile@1.3.0": {
      "map": {
        "@mapbox/point-geometry": "npm:@mapbox/point-geometry@0.1.0"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "object.omit": "npm:object.omit@2.0.1",
        "is-extglob": "npm:is-extglob@1.0.0",
        "braces": "npm:braces@1.8.5",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "filename-regex": "npm:filename-regex@2.0.1",
        "extglob": "npm:extglob@0.3.2",
        "arr-diff": "npm:arr-diff@2.0.0",
        "regex-cache": "npm:regex-cache@0.4.3",
        "parse-glob": "npm:parse-glob@3.0.4",
        "normalize-path": "npm:normalize-path@2.1.1",
        "kind-of": "npm:kind-of@3.2.2",
        "array-unique": "npm:array-unique@0.2.1",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:request-progress@0.3.1": {
      "map": {
        "throttleit": "npm:throttleit@0.0.2"
      }
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:es6-weak-map@2.0.2": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es5-ext": "npm:es5-ext@0.10.26"
      }
    },
    "npm:es6-map@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es5-ext": "npm:es5-ext@0.10.26",
        "es6-set": "npm:es6-set@0.1.5",
        "event-emitter": "npm:event-emitter@0.3.5"
      }
    },
    "npm:array-union@1.0.2": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3"
      }
    },
    "npm:yargs@6.6.0": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "get-caller-file": "npm:get-caller-file@1.0.2",
        "cliui": "npm:cliui@3.2.0",
        "camelcase": "npm:camelcase@3.0.0",
        "require-main-filename": "npm:require-main-filename@1.0.1",
        "require-directory": "npm:require-directory@2.1.1",
        "which-module": "npm:which-module@1.0.0",
        "decamelize": "npm:decamelize@1.2.0",
        "y18n": "npm:y18n@3.2.1",
        "os-locale": "npm:os-locale@1.4.0",
        "string-width": "npm:string-width@1.0.2",
        "yargs-parser": "npm:yargs-parser@4.2.1",
        "read-pkg-up": "npm:read-pkg-up@1.0.1"
      }
    },
    "npm:gauge@2.7.4": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "object-assign": "npm:object-assign@4.1.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "string-width": "npm:string-width@1.0.2",
        "has-unicode": "npm:has-unicode@2.0.1",
        "signal-exit": "npm:signal-exit@3.0.2",
        "aproba": "npm:aproba@1.1.2",
        "wide-align": "npm:wide-align@1.1.2"
      }
    },
    "npm:js-yaml@3.9.1": {
      "map": {
        "argparse": "npm:argparse@1.0.9",
        "esprima": "npm:esprima@4.0.0"
      }
    },
    "npm:extend-shallow@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:ansi-red@0.1.1": {
      "map": {
        "ansi-wrap": "npm:ansi-wrap@0.1.0"
      }
    },
    "npm:co-from-stream@0.0.0": {
      "map": {
        "co-read": "npm:co-read@0.0.1"
      }
    },
    "npm:thunkify-wrap@1.0.4": {
      "map": {
        "enable": "npm:enable@1.3.2"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:debug@2.6.4": {
      "map": {
        "ms": "npm:ms@0.7.3"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1",
        "for-own": "npm:for-own@0.1.5"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "cliui": "npm:cliui@2.1.0",
        "camelcase": "npm:camelcase@1.2.1",
        "window-size": "npm:window-size@0.1.0",
        "decamelize": "npm:decamelize@1.2.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "is-dotfile": "npm:is-dotfile@1.0.3",
        "glob-base": "npm:glob-base@0.3.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:fstream@1.0.11": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.6.1"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:ws@2.3.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "ultron": "npm:ultron@1.1.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:engine.io-client@3.1.1": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "has-cors": "npm:has-cors@1.1.0",
        "component-emitter": "npm:component-emitter@1.2.1",
        "ws": "npm:ws@2.3.1",
        "node-ws": "npm:ws@2.3.1",
        "parseuri": "npm:parseuri@0.0.5",
        "indexof": "npm:indexof@0.0.1",
        "engine.io-parser": "npm:engine.io-parser@2.1.1",
        "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.3",
        "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.3",
        "parsejson": "npm:parsejson@0.0.3",
        "yeast": "npm:yeast@0.1.2",
        "parseqs": "npm:parseqs@0.0.5",
        "component-inherit": "npm:component-inherit@0.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "create-hash": "npm:create-hash@1.1.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:engine.io-parser@2.1.1": {
      "map": {
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
        "has-binary2": "npm:has-binary2@1.0.2",
        "after": "npm:after@0.8.2",
        "blob": "npm:blob@0.0.4",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.26"
      }
    },
    "npm:has-binary2@1.0.2": {
      "map": {
        "isarray": "npm:isarray@2.0.1"
      }
    },
    "npm:es6-iterator@2.0.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.26",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.26"
      }
    },
    "npm:es5-ext@0.10.26": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:es6-set@0.1.5": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.26",
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:event-emitter@0.3.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.26"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:pbkdf2@3.0.13": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:touch@0.0.3": {
      "map": {
        "nopt": "npm:nopt@1.0.10"
      }
    },
    "npm:request@2.61.0": {
      "map": {
        "extend": "npm:extend@3.0.1",
        "mime-types": "npm:mime-types@2.1.16",
        "bl": "npm:bl@1.0.3",
        "stringstream": "npm:stringstream@0.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "caseless": "npm:caseless@0.11.0",
        "hawk": "npm:hawk@3.1.3",
        "form-data": "npm:form-data@1.0.1",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "isstream": "npm:isstream@0.1.2",
        "qs": "npm:qs@4.0.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "aws-sign2": "npm:aws-sign2@0.5.0",
        "node-uuid": "npm:node-uuid@1.4.8",
        "har-validator": "npm:har-validator@1.8.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "http-signature": "npm:http-signature@0.11.0",
        "tough-cookie": "npm:tough-cookie@2.3.2"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "preserve": "npm:preserve@0.2.0",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:normalize-path@2.1.1": {
      "map": {
        "remove-trailing-separator": "npm:remove-trailing-separator@1.0.2"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.1.0"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0",
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:kind-of@3.2.2": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.5"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.2",
        "center-align": "npm:center-align@0.1.3",
        "right-align": "npm:right-align@0.1.3"
      }
    },
    "npm:binary@0.3.0": {
      "map": {
        "chainsaw": "npm:chainsaw@0.1.0",
        "buffers": "npm:buffers@0.1.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.1.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:parseuri@0.0.5": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:accepts@1.3.3": {
      "map": {
        "mime-types": "npm:mime-types@2.1.16",
        "negotiator": "npm:negotiator@0.6.1"
      }
    },
    "npm:argparse@1.0.9": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:cliui@3.2.0": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "string-width": "npm:string-width@1.0.2",
        "wrap-ansi": "npm:wrap-ansi@2.1.0"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:yargs-parser@4.2.1": {
      "map": {
        "camelcase": "npm:camelcase@3.0.0"
      }
    },
    "npm:wide-align@1.1.2": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:nopt@1.0.10": {
      "map": {
        "abbrev": "npm:abbrev@1.1.0"
      }
    },
    "npm:os-locale@1.4.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "glob-parent": "npm:glob-parent@2.0.0"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.13",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parsejson@0.0.3": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseqs@0.0.5": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:bl@1.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:har-validator@1.8.0": {
      "map": {
        "bluebird": "npm:bluebird@2.11.0",
        "chalk": "npm:chalk@1.1.3",
        "commander": "npm:commander@2.11.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.16.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:form-data@1.0.1": {
      "map": {
        "async": "npm:async@2.5.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.16"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:for-own@0.1.5": {
      "map": {
        "for-in": "npm:for-in@1.0.2"
      }
    },
    "npm:chainsaw@0.1.0": {
      "map": {
        "traverse": "npm:traverse@0.3.9"
      }
    },
    "npm:better-assert@1.0.2": {
      "map": {
        "callsite": "npm:callsite@1.0.0"
      }
    },
    "npm:wrap-ansi@2.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:mime-types@2.1.16": {
      "map": {
        "mime-db": "npm:mime-db@1.29.0"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:http-signature@0.11.0": {
      "map": {
        "asn1": "npm:asn1@0.1.11",
        "assert-plus": "npm:assert-plus@0.1.5",
        "ctype": "npm:ctype@0.5.3"
      }
    },
    "npm:async@2.5.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "lazy-cache": "npm:lazy-cache@1.0.4",
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "is-number": "npm:is-number@2.1.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "randomatic": "npm:randomatic@1.1.7",
        "isobject": "npm:isobject@2.1.0"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "path-type": "npm:path-type@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.4.0",
        "load-json-file": "npm:load-json-file@1.1.0"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "path-exists": "npm:path-exists@2.1.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-my-json-valid@2.16.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-function": "npm:generate-function@2.0.0",
        "jsonpointer": "npm:jsonpointer@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2",
        "repeat-string": "npm:repeat-string@1.6.1",
        "longest": "npm:longest@1.0.1"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "parse-json": "npm:parse-json@2.2.0",
        "strip-bom": "npm:strip-bom@2.0.0",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:randomatic@1.1.7": {
      "map": {
        "is-number": "npm:is-number@3.0.0",
        "kind-of": "npm:kind-of@4.0.0"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:normalize-package-data@2.4.0": {
      "map": {
        "semver": "npm:semver@5.4.1",
        "hosted-git-info": "npm:hosted-git-info@2.5.0",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:is-number@3.0.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:kind-of@4.0.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.5"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.4",
        "spdx-correct": "npm:spdx-correct@1.0.2"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.1"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
      }
    },
    "npm:error-ex@1.3.1": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:proj4@2.4.3": {
      "map": {
        "mgrs": "npm:mgrs@1.0.0",
        "wkt-parser": "npm:wkt-parser@1.2.0"
      }
    },
    "github:davis/plugin-hbs@1.2.3": {
      "map": {
        "handlebars": "github:components/handlebars.js@4.0.10"
      }
    },
    "npm:yamljs@0.3.0": {
      "map": {
        "argparse": "npm:argparse@1.0.9",
        "glob": "npm:glob@7.1.2"
      }
    }
  }
});
