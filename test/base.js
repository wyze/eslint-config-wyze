import base from '../base'
import test from 'ava'

test('extends length', async t => {
  const expected = 4

  t.is(base.extends.length, expected, 'Incorrect number of rulesets')
})

test('extends files', async t => {
  const rulesets = [
    'eslint-config-airbnb/base.js',
    '/rules/best-practices.js',
    '/rules/es6.js',
    '/rules/style.js',
  ]

  for ( const expected of rulesets ) {
    const index = rulesets.indexOf(expected)

    t.ok(
      ~base.extends[index].indexOf(expected),
      `${expected} not found in extends`
    )
  }
})

test('parser', async t => {
  const expected = 'babel-eslint'

  t.is(base.parser, expected, `parser is not set to ${expected}`)
})
