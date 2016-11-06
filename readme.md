# eslint-config-wyze

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![dependencies][deps-image]][deps-url]
[![devDependencies][depsdev-image]][depsdev-url]

> My personal [ESLint](//github.com/eslint/eslint) settings.

## Installation

### React/Preact

```sh
$ npm i --save-dev eslint eslint-config-airbnb eslint-config-wyze eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-wyze
```

### Non-React

```sh
$ npm i --save-dev eslint eslint-config-airbnb eslint-config-wyze eslint-plugin-import eslint-plugin-wyze
```

### Flow

```sh
$ npm i --save-dev babel-eslint eslint eslint-config-wyze eslint-plugin-flowtype
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

## License

Copyright © 2016 [Neil Kistner](//github.com/wyze)

Released under the MIT license. See [license](license) for details.

[travis-image]: https://img.shields.io/travis/wyze/eslint-config-wyze.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/eslint-config-wyze

[npm-image]: https://img.shields.io/npm/v/eslint-config-wyze.svg?style=flat-square
[npm-url]: https://npmjs.com/package/eslint-config-wyze

[deps-image]: https://img.shields.io/david/wyze/eslint-config-wyze.svg?style=flat-square
[deps-url]: https://david-dm.org/wyze/eslint-config-wyze

[depsdev-image]: https://img.shields.io/david/dev/wyze/eslint-config-wyze.svg?style=flat-square
[depsdev-url]: https://david-dm.org/wyze/eslint-config-wyze#info=devDependencies
