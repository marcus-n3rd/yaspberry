module.exports = {
  rootDir: '../../',
  moduleFileExtensions: ['js'],
  setupFilesAfterEnv: ['<rootDir>/bnd/jest/jest-extended.js'],
  setupFiles: ['<rootDir>/bnd/jest/jest-setup.js'],
  testMatch: ['**/*.int.spec.js'],
  testPathIgnorePatterns: ['jest.config.int.js'],
  reporters: ['default', 'jest-junit', 'jest-stare'],
  testResultsProcessor: './node_modules/jest-stare',
  transform: {
    "^.+\\.(js|jsx)$": require.resolve('./babel.transform.js'),
  },
};
