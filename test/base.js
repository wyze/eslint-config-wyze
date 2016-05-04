import base from '../base'
import test from 'ava'

test('extends length', async t => {
  const expected = 5

  t.is(base.extends.length, expected, 'Incorrect number of rulesets')
})

test('extends files', async t => {
  const expected = [
    'airbnb/base',
    'plugin:wyze/recommended',
    'wyze/rules/best-practices',
    'wyze/rules/es6',
    'wyze/rules/style',
  ]

  t.deepEqual(base.extends, expected, 'extending incorrect rules in `./base`')
})

test('parser', async t => {
  const expected = 'babel-eslint'

  t.is(base.parser, expected, `parser is not set to ${expected}`)
})
