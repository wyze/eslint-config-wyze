import base from '../base'
import test from 'ava'

test('extends files', t => {
  const expected = [
    'airbnb/base',
    'plugin:wyze/recommended',
    'wyze/rules/best-practices',
    'wyze/rules/es6',
    'wyze/rules/import',
    'wyze/rules/legacy',
    'wyze/rules/style',
  ]

  t.deepEqual(base.extends, expected)
})

test('plugins', t => {
  const expected = [
    'import',
    'wyze',
  ]

  t.deepEqual(base.plugins, expected)
})

test('parserOptions are set correcty', t => {
  const expected = {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  }

  t.deepEqual(base.parserOptions, expected)
})
