import main from '../'
import test from 'ava'

test('extends length', async t => {
  const expected = 3

  t.is(main.extends.length, expected, 'Incorrect number of rulesets')
})

test('extends files', async t => {
  const rulesets = [
    'eslint-config-airbnb/index.js',
    '/base.js',
    '/rules/react.js',
  ]

  for ( const expected of rulesets ) {
    const index = rulesets.indexOf(expected)

    t.ok(
      ~main.extends[index].indexOf(expected),
      `${expected} not found in extends`
    )
  }
})
