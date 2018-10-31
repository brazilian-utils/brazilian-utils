module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['**/src/*.(js|ts)', '!**/node_modules/**', '!**/dist/**'],
  preset: 'ts-jest/presets/js-with-babel',
  coveragePathIgnorePatterns: ['.*.d.ts'],
  moduleNameMapper: {
    '@taxi/(.+)$': '<rootDir>packages/$1/src',
  },
};
