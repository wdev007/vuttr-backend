module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '__tests__/coverage',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
};
