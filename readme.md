# eslint-config-wyze

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![devDependencies][depsdev-image]][depsdev-url]

> My personal [ESLint](//github.com/eslint/eslint) settings.

## Installation

Use `yarn add --dev <packages>` where `<packages>` are as follows:

> **Note**: You can also do `npm i --save-dev <packages>`.

### React/Preact

```
eslint eslint-config-airbnb eslint-config-wyze eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-wyze
```

### Non-React

```
eslint eslint-config-airbnb eslint-config-wyze eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-wyze
```

### Flow

```
babel-eslint eslint eslint-config-wyze eslint-plugin-flowtype
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
