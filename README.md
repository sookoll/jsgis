## Setup steps
From https://github.com/mikedfunk/jspm-example

    $ mkdir jsgis && cd jsgis
    $ npm init
    $ npm install --save-dev jspm@beta
    $ npm install --save-dev live-server
    $ ./node_modules/.bin/jspm config strictSSL false
    $ ./node_modules/.bin/jspm init

    $ ./node_modules/.bin/jspm registry config github

    $ ./node_modules/.bin/jspm install css
    $ ./node_modules/.bin/jspm install npm:openlayers

    $ ./node_modules/.bin/jspm install --dev npm:babel-plugin-wildcard
    $ npm i --save-dev babel-plugin-wildcard


    $ ./node_modules/.bin/live-server --port=8888 --open=src
