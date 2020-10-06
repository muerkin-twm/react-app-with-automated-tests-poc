const { expect } = require('chai');
const { getTitle } = require('./pageActions');
const scope = require('./scope');

module.exports = {
  async expectElementToExist(selector) {
    const element = await scope.currentPage.$(selector);
    expect(element).to.not.equal(null);
  },

  async expectTitleToEqual(title) {
    const actualTitle = await getTitle();
    expect(actualTitle).to.equal(title);
  },

  async expectAlertWithMessageToPresent(expectedMessage) {
    const { message, type } = scope.lastPresentedDialog;
    expect(type).to.equal('alert');
    expect(message).to.equal(expectedMessage);
  },
};
