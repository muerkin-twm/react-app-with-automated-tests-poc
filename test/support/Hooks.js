/// <reference types="jest-playwright-preset" />

import { DEFAULT_TINEOUT } from '../config/constants';

afterAll(() => {
  if (!page.isClosed()) {
    browser.close();
  }
});

beforeAll(async () => {
  jest.setTimeout(DEFAULT_TINEOUT);
});
