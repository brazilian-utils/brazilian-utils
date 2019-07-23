module.exports = ({ name, author }) =>
  JSON.stringify(
    {
      name: `@brazilian-utils/${name}`,
      version: '0.1.0',
      author,
      repository: `https://github.com/brazilian-utils/brazilian-utils/tree/master/packages/${name}`,
      bugs: {
        url: 'https://github.com/brazilian-utils/brazilian-utils/issues',
      },
      license: 'MIT',
      main: 'dist/index.js',
      module: `dist/${name}.esm.js`,
      typings: 'dist/index.d.ts',
      files: ['dist'],
      scripts: {
        start: 'tsdx watch',
        build: 'tsdx build',
        test: 'tsdx test',
      },
      prettier: {
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
      jest: {
        moduleNameMapper: {
          '^@brazilian-utils/helper-(.*)$': '<rootDir>/../../helpers/$1/src',
          '^@brazilian-utils/(.*)$': '<rootDir>/../../packages/$1/src',
        },
      },
      devDependencies: {
        '@types/jest': '^24.0.13',
        husky: '^2.3.0',
        prettier: '^1.17.1',
        'pretty-quick': '^1.11.0',
        tsdx: '^0.6.0',
        tslib: '^1.9.3',
        typescript: '^3.5.1',
      },
      publishConfig: {
        access: 'public',
      },
    },
    null,
    2
  );
