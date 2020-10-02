const {
  DEFAULT_HEADLESS,
  DEFAULT_SLO_MO,
  DEFAULT_VIEWPORT,
  DEMO,
} = require('./constants');

const DEFAULT_CONFIG = {
  headless: DEMO ? false : DEFAULT_HEADLESS,
  ignoreHTTPSErrors: true,
  viewport: DEFAULT_VIEWPORT,
  slowMo: DEMO ? DEFAULT_SLO_MO : 0,
  // exitOnPageError: true,
  // browsers: ['chromium'], TODO: Use this rather than hard code
  browserContext: 'default',
};

module.exports = {
  dev: {
    url: 'https://dev-env-deployed-app-url',
    playwrightConfig: { ...DEFAULT_CONFIG },
  },
  local: {
    url: 'http://localhost:3000/',
    playwrightConfig: { ...DEFAULT_CONFIG },
  },
};
