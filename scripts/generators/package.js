const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

const generateMain = require('./templates/main');
const generateTest = require('./templates/test');
const generateReadme = require('./templates/readme');
const generatePackageJson = require('./templates/packageJson');
const generatePackagePath = name =>
  path.resolve(__dirname, '../../packages', name);

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'Name:',
    validate: name =>
      !fs.existsSync(generatePackagePath(name)) ||
      `Package "${name}" already exist`,
  },
  {
    type: 'text',
    name: 'description',
    message: 'Description:',
  },
  {
    type: 'text',
    name: 'author',
    message: 'Author:',
  },
];

(async () => {
  try {
    const answers = await prompts(questions, {
      onCancel() {
        throw new Error(); // just to break script
      },
    });

    const packagePath = generatePackagePath(answers.name);

    // create package dir
    fs.mkdirSync(packagePath);

    // copy files
    fs.copyFileSync(
      path.resolve(__dirname, 'templates/.gitignore'),
      path.resolve(packagePath, '.gitignore')
    );
    fs.copyFileSync(
      path.resolve(__dirname, 'templates/tsconfig.json'),
      path.resolve(packagePath, 'tsconfig.json')
    );

    // create readme
    fs.writeFileSync(
      path.resolve(packagePath, 'README.md'),
      generateReadme(answers)
    );

    // create package.json
    fs.writeFileSync(
      path.resolve(packagePath, 'package.json'),
      generatePackageJson(answers)
    );

    // create main file
    fs.mkdirSync(path.resolve(packagePath, 'src'));
    fs.writeFileSync(
      path.resolve(packagePath, 'src/index.ts'),
      generateMain(answers)
    );

    // create test file
    fs.mkdirSync(path.resolve(packagePath, 'test'));
    fs.writeFileSync(
      path.resolve(packagePath, 'test/index.test.ts'),
      generateTest(answers)
    );
  } catch (e) {}
})();
