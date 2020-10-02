const { setDefaultTimeout, setWorldConstructor } = require('cucumber');
const playwright = require('playwright');
const scope = require('./scope');
const { DEFAULT_TINEOUT } = require('../../../config/constants');

const World = function () {
  scope.driver = playwright;
  scope.context = {};
};

setDefaultTimeout(DEFAULT_TINEOUT);
setWorldConstructor(World);
