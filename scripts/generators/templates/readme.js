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

\`\`\`sh
yarn add @brazilian-utils/${name}
\`\`\`

or using <script> tag

\`\`\`html
<script type="text/javascript" src="https://unpkg.com/@brazilian-utils/${name}/dist/index.umd.js"></script>
\`\`\`

## Usage

If you load from a **<script>** tag, you can use \`${camelCase(
    name
  )}\` global. If you use **ES6** with npm, you can write \`import ${camelCase(
    name
  )} from '@brazilian-utils/${name}'\`. If you use **ES5** with npm, you can write \`var ${camelCase(
    name
  )} = require('@brazilian-utils/${name}')\`.

\`\`\`js
\`\`\``;
