import { parserOptions, rules } from '../../rules/es6'
import test from 'ava'

test('no react rules', async t => {
  Object.keys(rules).forEach(rule => {
    t.falsy(~rule.indexOf('react/'), 'found react rule in undesired file')
  })
})

test('enable generator support', async t => {
  const expected = {
    ecmaFeatures: {
      generators: true,
    },
  }

  t.deepEqual(parserOptions, expected, 'parserOptions doesnt enable generators')
})
