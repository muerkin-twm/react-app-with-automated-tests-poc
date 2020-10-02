/// <reference types="jest-playwright-preset" />

import SampleHomePage from './pages/SampleHomePage';
const { users } = require('./config/testAccounts');

describe('Sample Home Page', () => {
  it('receives a alert when the form is submitted', async () => {
    const sampleHomePage = new SampleHomePage();
    await sampleHomePage.visit();
    await sampleHomePage.fillOutForm(users.MURAD);

    page.on('dialog', async (dialog) => {
      const alertMessage = dialog.message();
      expect(alertMessage).toEqual('This is a wrong message');
      await dialog.accept();
    });
  });
});
