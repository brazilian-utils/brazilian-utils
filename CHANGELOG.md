# [1.0.0-rc.12](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.11...1.0.0-rc.12) (2020-10-27)


### Features

* **licenseplate:** add a validador for brazilian and mercosul license plates ([580d961](https://github.com/brazilian-utils/brazilian-utils/commit/580d9613ed97d636f3ca717072522d05620081b3)), closes [#112](https://github.com/brazilian-utils/brazilian-utils/issues/112)

# [1.0.0-rc.11](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.10...1.0.0-rc.11) (2020-08-25)


### Bug Fixes

* esm filename in package.json ([32cd815](https://github.com/brazilian-utils/brazilian-utils/commit/32cd815905af8ff850f6b4f56824288223722200))
* let formatCurrency() more flexible and remove default param from parseCurrency() ([8a9a437](https://github.com/brazilian-utils/brazilian-utils/commit/8a9a4374d2b1e6bd33f2ccb26e6496c5f12dcd22))
* **deps:** upgrade devDependency to fix security warning ([af7c353](https://github.com/brazilian-utils/brazilian-utils/commit/af7c353e97d1f9140a251a84fc13168aa2789956))
* replace array.flat with reduce to support node 10 ([a47a51a](https://github.com/brazilian-utils/brazilian-utils/commit/a47a51a1b881aaf045d9e69af4fd0b20c50dcbfe))
* **workflow:** update workflow config ([fb449c0](https://github.com/brazilian-utils/brazilian-utils/commit/fb449c09ed0b19277f946af26e4465efe10c68be))


### Features

* add formatCurrency() and parseCurrency() ([b0e6994](https://github.com/brazilian-utils/brazilian-utils/commit/b0e6994ebd7613030c648bbc9150640f305bf4ca))

<a name="1.0.0-rc.10"></a>
# [1.0.0-rc.10](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.9...1.0.0-rc.10) (2020-07-27)


### Bug Fixes

* exported the function "capitalize()" to the public API ([a16d603](https://github.com/brazilian-utils/brazilian-utils/commit/a16d603))


### Features

* add function capitalize() ([6d915fd](https://github.com/brazilian-utils/brazilian-utils/commit/6d915fd))
* atualiza cidades novas ([348ab84](https://github.com/brazilian-utils/brazilian-utils/commit/348ab84))

<a name="1.0.0-rc.9"></a>
# [1.0.0-rc.9](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.8...1.0.0-rc.9) (2020-07-09)


### Bug Fixes

* applied code review ([48a81f1](https://github.com/brazilian-utils/brazilian-utils/commit/48a81f1))
* solve all Codecov issues ([3394479](https://github.com/brazilian-utils/brazilian-utils/commit/3394479))


### Features

* add functions isValidLandlinePhone() and isValidMobilePhone() ([e8fe8bd](https://github.com/brazilian-utils/brazilian-utils/commit/e8fe8bd))

<a name="1.0.0-rc.8"></a>
# [1.0.0-rc.8](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.7...1.0.0-rc.8) (2020-06-17)


### Bug Fixes

* add getCities to api public testes ([3f8c4be](https://github.com/brazilian-utils/brazilian-utils/commit/3f8c4be))
* adjust docs typo ([89cf335](https://github.com/brazilian-utils/brazilian-utils/commit/89cf335))
* adjust responsive docs ([bafcdc0](https://github.com/brazilian-utils/brazilian-utils/commit/bafcdc0))
* export getCities ([0472144](https://github.com/brazilian-utils/brazilian-utils/commit/0472144))
* update-cities script command ([bce5628](https://github.com/brazilian-utils/brazilian-utils/commit/bce5628))


### Features

* add utility getCities ([ebb949d](https://github.com/brazilian-utils/brazilian-utils/commit/ebb949d))
* black lives matters ([cce58d8](https://github.com/brazilian-utils/brazilian-utils/commit/cce58d8))
* change the way the cities are filtered. Add docs ([7f4ca6d](https://github.com/brazilian-utils/brazilian-utils/commit/7f4ca6d))

<a name="1.0.0-rc.7"></a>
# [1.0.0-rc.7](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.6...1.0.0-rc.7) (2020-05-05)


### Features

* **utilities:** create `getStates` method ([57e3174](https://github.com/brazilian-utils/brazilian-utils/commit/57e3174)), closes [#82](https://github.com/brazilian-utils/brazilian-utils/issues/82)



<a name="1.0.0-rc.6"></a>
# [1.0.0-rc.6](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.6...1.0.0-rc.7) (2020-04-29)


### Features

* **cpf, cnpj:** format accepts numbers, optional fillZeroes behavior ([5293721](https://github.com/brazilian-utils/brazilian-utils/commit/5293721))
* **cpf, cnpj:** using an options object instead of a parameter ([db9ca46](https://github.com/brazilian-utils/brazilian-utils/commit/db9ca46))



<a name="1.0.0-rc.5"></a>
# [1.0.0-rc.5](https://github.com/brazilian-utils/brazilian-utils/compare/1.0.0-rc.6...1.0.0-rc.7) (2020-04-23)


### Bug Fixes

* **build:** update tsconfig rootDir for tsdx 0.13 ([17ea338](https://github.com/brazilian-utils/brazilian-utils/commit/17ea338))
* **release-it:** update config filename ([afc46a3](https://github.com/brazilian-utils/brazilian-utils/commit/afc46a3))
* **tooling:** remote git-add from lint-staged ([b000e8e](https://github.com/brazilian-utils/brazilian-utils/commit/b000e8e))
* adjust circular dependency ([6f4f53b](https://github.com/brazilian-utils/brazilian-utils/commit/6f4f53b))
* adjust pt-BR documentation ([bb79fe6](https://github.com/brazilian-utils/brazilian-utils/commit/bb79fe6))
* function typo on usage section ([06ca0ca](https://github.com/brazilian-utils/brazilian-utils/commit/06ca0ca))
* length typo ([711ba8a](https://github.com/brazilian-utils/brazilian-utils/commit/711ba8a))
* remove unnecessary escape ([74c53ed](https://github.com/brazilian-utils/brazilian-utils/commit/74c53ed))
* **jest:** update jest to fix security warning ([a3af687](https://github.com/brazilian-utils/brazilian-utils/commit/a3af687))


### ci

* 🎡 adjust travis config ([0ec107f](https://github.com/brazilian-utils/brazilian-utils/commit/0ec107f))
* 🎡 rename travis file ([25da01e](https://github.com/brazilian-utils/brazilian-utils/commit/25da01e))


### Features

* add cep formatter ([d8b0deb](https://github.com/brazilian-utils/brazilian-utils/commit/d8b0deb))
* inscricao-estadual validator ([c4cf9ae](https://github.com/brazilian-utils/brazilian-utils/commit/c4cf9ae))
* **boleto:** add boleto formatter ([3cfd0b4](https://github.com/brazilian-utils/brazilian-utils/commit/3cfd0b4))
* **CNPJ:** migrate CNPJ formatter ([f34317d](https://github.com/brazilian-utils/brazilian-utils/commit/f34317d))
* **CPF:** migrate CPF formatter ([ef1ed2a](https://github.com/brazilian-utils/brazilian-utils/commit/ef1ed2a))
* **CPF:** migrate CPF generation ([6463b40](https://github.com/brazilian-utils/brazilian-utils/commit/6463b40))
* **CPF:** migrate isValidCPF ([620f798](https://github.com/brazilian-utils/brazilian-utils/commit/620f798))
* **refactoring:** add TSDX and rewrite helpers ([ebb2d18](https://github.com/brazilian-utils/brazilian-utils/commit/ebb2d18))
* CheckSum generator ([7dd6978](https://github.com/brazilian-utils/brazilian-utils/commit/7dd6978))
* cpf generator, requested on [#4](https://github.com/brazilian-utils/brazilian-utils/issues/4) ([5ffc2a1](https://github.com/brazilian-utils/brazilian-utils/commit/5ffc2a1))


### BREAKING CHANGES

* n

Closes: n
* n

Closes: n

