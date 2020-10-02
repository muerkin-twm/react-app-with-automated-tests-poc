const scope = require('./scope');

module.exports = {
  async click(selector) {
    await scope.currentPage.waitForSelector(selector);
    await scope.currentPage.click(selector);
  },

  async getTitle() {
    return await scope.currentPage.title();
  },

  async goto(url) {
    await scope.currentPage.goto(url);
  },

  async typeText(selector, text) {
    await scope.currentPage.waitForSelector(selector);
    await scope.currentPage.type(selector, text);
  },

  async wait(time) {
    await scope.currentPage.waitForTimeout(time);
  },

  async waitForNavigation() {
    await scope.currentPage.waitForNavigation();
  },

  async waitForSelector(selector) {
    await scope.currentPage.waitForSelector(selector);
  },

  async takeScreenShot() {
    const timeStamp = Date.now();
    await scope.currentPage.screenshot({
      path: `test/cucumber/reports/screenShots/${timeStamp}.png`,
    });
  },
};
