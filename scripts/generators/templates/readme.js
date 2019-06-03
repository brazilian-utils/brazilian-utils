const camelCase = require('camelcase');

module.exports = ({ name, description }) =>
  `# @brazilian-utils/${name}

> ${description}

See our website [http://brazilian-utils.github.io](http://brazilian-utils.github.io) for more information or the [issues](https://github.com/brazilian-utils/brazilian-utils/issues?q=is%3Aissue+${name}) associated with this package.

## Install

Using NPM:

\`\`\`sh
npm install @brazilian-utils/${name} --save
\`\`\`

using Yarn

\`\`\`
yarn add @brazilian-utils/${name}
\`\`\`

or using CDN

\`\`\`
<script type='text/javascript' src='https://unpkg.com/@brazilian-utils/${name}/dist/index.umd.js'></script>
\`\`\`

## Usage

\`\`\`js
import ${camelCase(name)} from '@brazilian-utils/${name}';
\`\`\``;
