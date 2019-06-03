const camelCase = require('camelcase');

module.exports = ({ name }) =>
  `import ${camelCase(name)} from '../src';

describe('${camelCase(name)}', () => {
});`;
