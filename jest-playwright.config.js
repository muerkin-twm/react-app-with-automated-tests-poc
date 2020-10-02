module.exports = {
  rootDir: '.',
  roots: ['<rootDir>/test/'],
  testTimeout: 20000,
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  preset: 'jest-playwright-preset',
};
