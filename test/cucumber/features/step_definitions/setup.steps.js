const { Given } = require('cucumber');
const { goto } = require('../support/pageActions');
const config = require('../../../config/config');

Given(/^the user is on the sample form page$/, async () => {
  await goto(config.local.url);
});
