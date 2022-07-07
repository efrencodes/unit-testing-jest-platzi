module.exports = {
  verbose: true,
  collectCoverage: false,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTest.js'],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/StyleMock.js',
  },
  testEnvironment: 'jsdom',
};
