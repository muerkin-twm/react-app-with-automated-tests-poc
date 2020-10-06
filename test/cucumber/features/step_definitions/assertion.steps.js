const { Then } = require('cucumber');
const {
  expectTitleToEqual,
  expectAlertWithMessageToPresent,
} = require('../support/pageAssertions');

Then(/^the user should see an alert box$/, async () => {
  await expectTitleToEqual('React App Testing POC');
  const expectedMessage = `Submitting form\nEmail: murad@totalwine.com\nPassword: very-complicated-password-123\nOpps, just shared your password with everyone watching :)`;
  await expectAlertWithMessageToPresent(expectedMessage);
});
