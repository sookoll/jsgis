## Setup steps
From https://github.com/mikedfunk/jspm-example

    $ mkdir jsgis && cd jsgis
    $ npm init
    $ npm install --save-dev jspm@beta
    $ sudo npm install http-server -g

    $ ./node_modules/.bin/jspm config strictSSL false
    $ ./node_modules/.bin/jspm registry config github

    $ ./node_modules/.bin/jspm init
    $ ./node_modules/.bin/jspm install css
    $ ./node_modules/.bin/jspm install text
    $ ./node_modules/.bin/jspm install hbs
    $ ./node_modules/.bin/jspm install npm:yamljs
    $ ./node_modules/.bin/jspm install npm:openlayers
    $ ./node_modules/.bin/jspm install npm:proj4


    $ npm run build
    $ npm run serve

Configuration

    SystemJS.config({
      map: {
        "theme": "src/lib/themes/theme.js"
      },
      ...
    });
