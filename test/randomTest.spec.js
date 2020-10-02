const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 5000 });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.screenshot({ path: `test/screenshots/example.png` });
  expect(page.title()).toEqual('xxxxxxxx');
  await browser.close();
})();
