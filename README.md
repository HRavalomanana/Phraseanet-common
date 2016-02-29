# Phraseanet Common
[![Build Status](https://travis-ci.org/lostdalek/Phraseanet-common.svg?branch=master)](https://travis-ci.org/lostdalek/Phraseanet-common)
[![devDependency Status](https://david-dm.org/lostdalek/Phraseanet-common/dev-status.svg)](https://david-dm.org/lostdalek/Phraseanet-common#info=devDependencies)
[![Dependency Status](https://david-dm.org/lostdalek/Phraseanet-common.svg)](https://david-dm.org/lostdalek/Phraseanet-common)
[![Coverage Status](https://coveralls.io/repos/github/lostdalek/Phraseanet-common/badge.svg?branch=master)](https://coveralls.io/github/lostdalek/Phraseanet-common?branch=master)


## Requirements

Node `^5.0.0`.

```js
$ npm install                   # Install Node modules listed in ./package.json
$ npm webpack                   # Build a non-minified version of the library
```

## Workflow

* `npm run production` - Build task that generate a minified script for production
* `npm run clean` - Remove the `dist` folder and it's files
* `npm run eslint:source` - Lint the source
* `npm run eslint:common` - Lint the unit tests shared by Karma and Mocha
* `npm run eslint:server` - Lint the unit tests for server
* `npm run eslint:browser` - Lint the unit tests for browser
* `npm run eslint:fix` - ESLint will try to fix as many issues as possible in your source files
* `npm run clean` - Remove the coverage report and the *dist* folder
* `npm run test` - Runs unit tests for both server and the browser
* `npm run test:browser` - Runs the unit tests for browser / client
* `npm run test:server` - Runs the unit tests on the server
* `npm run watch:server` - Run all unit tests for server & watch files for changes
* `npm run watch:browser` - Run all unit tests for browser & watch files for changes
* `npm run karma:firefox` - Run all unit tests with Karma & Firefox
* `npm run karma:chrome` - Run all unit tests with Karma & Chrome
* `npm run karma:ie` - Run all unit tests with Karma & Internet Explorer
* `npm run packages` - List installed packages
* `npm run package:purge` - Remove all dependencies
* `npm run package:reinstall` - Reinstall all dependencies
* `npm run package:check` - shows a list over dependencies with a higher version number then the current one - if any 
* `npm run package:upgrade` - Automaticly upgrade all devDependencies & dependencies, and update package.json
* `npm run package:dev` - Automaticly upgrade all devDependencies and update package.json
* `npm run package:prod` - Automaticly upgrade all dependencies and update package.json
* `npm run asset-server` - starts a asset server with hot module replacement (WDS) on port 8080

## Asset server

asset server with hot module replacement (WDS) enabled on port 8080.

```js
npm run asset-server
```

Open `http://localhost:8080`, and you will see this message in your browser: `It works!`.

## Installation

Download the package, and run this from the command line:

```
npm install 
```

[trav_img]: https://api.travis-ci.org/lostdalek/Phraseanet-common.svg
[trav_site]: https://travis-ci.org/lostdalek/Phraseanet-common.svg?branch=master

## Credits

based on [Trolly](https://github.com/Kflash/trolly) an es6 boilerplate by [KFlash](https://github.com/kflash)
