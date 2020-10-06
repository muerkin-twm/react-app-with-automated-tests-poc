const {
  waitForSelector,
  click,
  typeText,
  takeScreenShot,
} = require('../support/pageActions');
const {
  QC_SAMPLE_FORM_CONTAINER,
  QC_SAMPLE_FORM_EMAIL_LABEL,
  QC_SAMPLE_FORM_EMAIL_INPUT,
  QC_SAMPLE_FORM_PASSWORD_LABEL,
  QC_SAMPLE_FORM_PASSWORD_INPUT,
  QC_SAMPLE_FORM_SUBMIT,
  QC_SAMPLE_FORM_EMAIL_HELP_MESSAGE,
} = require('../../../../src/qcClasses');

class SampleHomePage {
  constructor() {
    this.formContainer = `#${QC_SAMPLE_FORM_CONTAINER}`;
    this.emailLabel = `#${QC_SAMPLE_FORM_EMAIL_LABEL}`;
    this.emailInput = `#${QC_SAMPLE_FORM_EMAIL_INPUT}`;
    this.passwordLabel = `#${QC_SAMPLE_FORM_PASSWORD_LABEL}`;
    this.passwordInput = `#${QC_SAMPLE_FORM_PASSWORD_INPUT}`;
    this.submitButton = `#${QC_SAMPLE_FORM_SUBMIT}`;
    this.emailHelpMessage = `#${QC_SAMPLE_FORM_EMAIL_HELP_MESSAGE}`;
  }

  async isFormDisplayed() {
    await waitForSelector(this.formContainer);
    await waitForSelector(this.emailInput);
    await waitForSelector(this.passwordInput);
    await waitForSelector(this.submitButton);
    await waitForSelector(this.emailHelpMessage);
  }

  async submitForm(email, password) {
    await waitForSelector(this.emailInput);
    await typeText(this.emailInput, email);
    await typeText(this.passwordInput, password);
    await takeScreenShot();
    await click(this.submitButton);
  }
}

module.exports = SampleHomePage;
