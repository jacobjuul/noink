require('ignore-styles');
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

const jsdom = require('jsdom');
const dom = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = dom;
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };