import base from '../base'
import test from 'ava'

test('extends length', t => {
  const expected = 6

  t.is(base.extends.length, expected, 'Incorrect number of rulesets')
})

test('extends files', t => {
  const expected = [
    'airbnb/base',
    'plugin:wyze/recommended',
    'wyze/rules/best-practices',
    'wyze/rules/es6',
    'wyze/rules/legacy',
    'wyze/rules/style',
  ]

  t.deepEqual(base.extends, expected, 'extending incorrect rules in `./base`')
})

test('plugins', t => {
  const expected = [ 'import', 'wyze' ]

  t.deepEqual(base.plugins, expected, `plugins are not set to ${expected}`)
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
