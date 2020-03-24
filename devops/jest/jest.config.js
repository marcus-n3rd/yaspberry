// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  rootDir: '../../',

  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!src/**/*ispec.js',
    '!src/**/*mock.js',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Threshold to meet for test coverage on functions. (80%).
  // coverageThreshold: {
  //   global: {
  //     functions: 80,
  //   },
  // },

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: null,

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/src/**/*?(*.)+(\\.spec|\\.test).js'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // Transform from ES6 to common JS
  transform: {
    "^.+\\.(js|jsx)$": require.resolve('./babel.transform.js'),
  },
};
