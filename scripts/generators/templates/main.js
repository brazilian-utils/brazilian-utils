const camelCase = require('camelcase');

module.exports = ({ name }) =>
  `export default function ${camelCase(name)}() {
}`;
