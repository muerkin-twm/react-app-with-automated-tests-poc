/// <reference types="jest-playwright-preset" />

import BasePage from './BasePage';
import testAccounts from '../config/testAccounts';
import {
  QC_SAMPLE_FORM_EMAIL_INPUT,
  QC_SAMPLE_FORM_PASSWORD_INPUT,
  QC_SAMPLE_FORM_SUBMIT,
} from '../../src/qcClasses';

export default class SampleHomePage extends BasePage {
  async fillOutForm(user) {
    const _userData = testAccounts.userData[user];
    expect(_userData).not.toBeNull();

    await this.typeText(`#${QC_SAMPLE_FORM_EMAIL_INPUT}`, user, false);
    await this.typeText(
      `#${QC_SAMPLE_FORM_PASSWORD_INPUT}`,
      _userData.password,
      false
    );
    await this.click(`#${QC_SAMPLE_FORM_SUBMIT}`);
  }
}
