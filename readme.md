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

### [v4.1.0](https://github.com/wyze/eslint-config-wyze/releases/tag/v4.1.0) (2017-02-06)

* [[`693f225e9e`](https://github.com/wyze/eslint-config-wyze/commit/693f225e9e)] - Upgrade dependencies (Neil Kistner)

## License

MIT © [Neil Kistner](https://neilkistner.com)

[travis-image]: https://img.shields.io/travis/wyze/eslint-config-wyze.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/eslint-config-wyze

[npm-image]: https://img.shields.io/npm/v/eslint-config-wyze.svg?style=flat-square
[npm-url]: https://npmjs.com/package/eslint-config-wyze

[depsdev-image]: https://img.shields.io/david/dev/wyze/eslint-config-wyze.svg?style=flat-square
[depsdev-url]: https://david-dm.org/wyze/eslint-config-wyze#info=devDependencies
