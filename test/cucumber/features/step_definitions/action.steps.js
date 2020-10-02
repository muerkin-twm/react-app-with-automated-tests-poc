const { When } = require('cucumber');
const SampleHomePage = require('../pages/sampleHomePage');
const { users, userData } = require('../../../config/testAccounts');

const _sampleHomePage = new SampleHomePage();

When(/^the user enters email and password, and submit$/, async () => {
  const _userData = userData[users.MURAD];
  await _sampleHomePage.submitForm(users.MURAD, _userData.password);
});
