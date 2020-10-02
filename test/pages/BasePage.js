/// <reference types="jest-playwright-preset" />

import config from '../config/config';

export default class BasePage {
  async click(selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
  }

  async typeText(selector, text, emptyTextField = true) {
    const element = await page.waitForSelector(selector);

    if (emptyTextField) {
      await element.click({ clickCount: 3 });
      await element.press('Backspace');
    }

    await page.type(selector, text);
  }

  async wait(time) {
    await page.waitForTimeout(time);
  }

  async getTitle() {
    return await page.title();
  }

  async visit() {
    const { url } = config.local; // TODO: get this url based on the run config (set env and read env)
    await page.goto(url);
  }

  async expectElementToExist(selector) {
    const element = await page.$(selector);
    expect(element).not.toEqual(null);
  }

  async expectTitleToEqual(title) {
    const actualTitle = await this.getTitle();
    expect(actualTitle).toEqual(title);
  }
}
