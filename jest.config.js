module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.(spec|test).ts'],
  coveragePathIgnorePatterns: ['.*.d.ts'],
  moduleNameMapper: {
    '@brazilian-utils/helper-(.+)$': '<rootDir>helpers/helper-$1/src',
    '@brazilian-utils/(.+)$': '<rootDir>packages/$1/src'
  }
};
