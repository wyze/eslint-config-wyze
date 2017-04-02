# eslint-config-wyze

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![devDependencies][depsdev-image]][depsdev-url]

> My personal [ESLint](//github.com/eslint/eslint) settings.

## Installation

> *Note*: The below commands will generate the command you will need to run for installation. You can replace `yarn add --dev` with `npm i --save-dev` if not using Yarn.

### Base

```sh
(
  export PKG=eslint-config-wyze; npm info $PKG config.basePeers --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs echo yarn add --dev $PKG
)
```

### Preact/React

```sh
(
  export PKG=eslint-config-wyze; npm info $PKG config.reactPeers --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs echo yarn add --dev $PKG
)
```

### Flow

```sh
(
  export PKG=eslint-config-wyze; npm info $PKG config.flowPeers --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs echo yarn add --dev $PKG
)
```

## Usage

### package.json

```js
{
  // React
  "eslintConfig": {
    "extends": "wyze"
  }

  // Preact
  "eslintConfig": {
    "extends": "wyze/preact"
  }

  // Non-React
  "eslintConfig": {
    "extends": "wyze/base"
  }

  // Flow
  "eslintConfig": {
    "extends": "wyze/flow"
  }

  // Multiple (React + Flow)
  "eslintConfig": {
    "extends": [
      "wyze",
      "wyze/flow"
    ]
  }
}
```

## Peer Dependencies

| Package | Base | Preact/React | Flow |
|---------|:----:|:------------:|:----:|
| babel-eslint | | | :package: |
| eslint | :package: | :package: | :package: |
| eslint-config-airbnb | :package: | :package: | |
| eslint-plugin-eslint-comments | :package: | :package: | |
| eslint-plugin-flowtype | | | :package: |
| eslint-plugin-import | :package: | :package: | |
| eslint-plugin-jsx-a11y | | :package: | |
| eslint-plugin-react | | :package: | |
| eslint-plugin-wyze | :package: | :package: | |

## Change Log

> [Full Change Log](changelog.md)

### [v5.0.0](https://github.com/wyze/eslint-config-wyze/releases/tag/v5.0.0) (2017-04-02)

* [[`facbd4e68b`](https://github.com/wyze/eslint-config-wyze/commit/facbd4e68b)] - Upgrade dependencies (Neil Kistner)
* [[`5a278abd00`](https://github.com/wyze/eslint-config-wyze/commit/5a278abd00)] - Update readme and installation method (Neil Kistner)
* [[`c8476650de`](https://github.com/wyze/eslint-config-wyze/commit/c8476650de)] - Add `eslint-comments` plugin (Neil Kistner)
* [[`3d20212e92`](https://github.com/wyze/eslint-config-wyze/commit/3d20212e92)] - Enable rules for `eslint-plugin-jsx-a11y`@4 and require overrides (Neil Kistner)
* [[`6162b2b688`](https://github.com/wyze/eslint-config-wyze/commit/6162b2b688)] - Exclude test files from npm package (Neil Kistner)
* [[`3265224d17`](https://github.com/wyze/eslint-config-wyze/commit/3265224d17)] - Upgrade dependencies (Neil Kistner)
* [[`3e2283e267`](https://github.com/wyze/eslint-config-wyze/commit/3e2283e267)] - Update version script to skip beta releases in changelog (Neil Kistner)
* [[`63f1686355`](https://github.com/wyze/eslint-config-wyze/commit/63f1686355)] - Enable some `eslint-plugin-jsx-a11y` rules (Neil Kistner)
* [[`c7fd8556ff`](https://github.com/wyze/eslint-config-wyze/commit/c7fd8556ff)] - Enable `react/void-dom-elements-no-children` rule (Neil Kistner)
* [[`62c1ebcf45`](https://github.com/wyze/eslint-config-wyze/commit/62c1ebcf45)] - Relax `react/sort-prop-types` rule (Neil Kistner)
* [[`f3c9fe769f`](https://github.com/wyze/eslint-config-wyze/commit/f3c9fe769f)] - Remove react rules enforced by AirBnb (Neil Kistner)
* [[`cd4a6a1d29`](https://github.com/wyze/eslint-config-wyze/commit/cd4a6a1d29)] - Relax `react/jsx-sort-props` rule (Neil Kistner)
* [[`57c75e3d9d`](https://github.com/wyze/eslint-config-wyze/commit/57c75e3d9d)] - Add past changelog and changelog build script (Neil Kistner)
* [[`a878cce34a`](https://github.com/wyze/eslint-config-wyze/commit/a878cce34a)] - Fix build (Neil Kistner)
* [[`b1fa5888f7`](https://github.com/wyze/eslint-config-wyze/commit/b1fa5888f7)] - Upgrade dependencies (Neil Kistner)
* [[`645d72e356`](https://github.com/wyze/eslint-config-wyze/commit/645d72e356)] - Fixing lint errors (Neil Kistner)
* [[`8f666bbf5d`](https://github.com/wyze/eslint-config-wyze/commit/8f666bbf5d)] - Streamline test process a little more (Neil Kistner)
* [[`763c78b238`](https://github.com/wyze/eslint-config-wyze/commit/763c78b238)] - Always enforce space in arrays, no exceptions (Neil Kistner)
* [[`ec0c03368d`](https://github.com/wyze/eslint-config-wyze/commit/ec0c03368d)] - Remove `max-len` rule and fall back to AirBnb's (100 char) (Neil Kistner)
* [[`96569b19a8`](https://github.com/wyze/eslint-config-wyze/commit/96569b19a8)] - Remove `id-blacklist` rule and use AirBnb's setting (Neil Kistner)
* [[`bc33e5b42c`](https://github.com/wyze/eslint-config-wyze/commit/bc33e5b42c)] - Switch to Jest for testing (Neil Kistner)
* [[`62302e6d52`](https://github.com/wyze/eslint-config-wyze/commit/62302e6d52)] - Quick project cleanup (Neil Kistner)

## License

MIT © [Neil Kistner](https://neilkistner.com)

[travis-image]: https://img.shields.io/travis/wyze/eslint-config-wyze.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/eslint-config-wyze

[npm-image]: https://img.shields.io/npm/v/eslint-config-wyze.svg?style=flat-square
[npm-url]: https://npmjs.com/package/eslint-config-wyze

[depsdev-image]: https://img.shields.io/david/dev/wyze/eslint-config-wyze.svg?style=flat-square
[depsdev-url]: https://david-dm.org/wyze/eslint-config-wyze#info=devDependencies
