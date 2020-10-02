const { Before, AfterAll } = require('cucumber');
const scope = require('./scope');
const config = require('../../../config/config');

Before(async () => {
  scope.browser = await scope.driver.chromium.launch(
    config.local.playwrightConfig
  );
  scope.currentPage = await scope.browser.newPage();
  scope.currentPage.on('dialog', async (dialog) => {
    scope.lastPresentedDialog = {
      message: dialog.message(),
      type: dialog.type(),
    };
    await dialog.accept();
  });
});

AfterAll(async () => {
  if (scope.browser) await scope.browser.close();
});
