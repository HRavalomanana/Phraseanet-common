/* eslint-disable */

process.env.NODE_ENV = 'development';

global.babel = require('babel-core/register');
global.chai = require("chai");
global.chaiAsPromised = require("chai-as-promised");
global.chai.use(chaiAsPromised);
global.expect = global.chai.expect;
global.sinon = require('sinon');
global.BROWSER = false;



