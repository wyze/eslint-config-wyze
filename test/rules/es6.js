import { parserOptions, rules } from '../../rules/es6'
import test from 'ava'

test('no react rules', async t => {
  for ( const rule in rules ) {
    if ( rules.hasOwnProperty(rule) ) {
      t.notOk(~rule.indexOf('react/'), 'found react rule in undesired file')
    }
  }
})

test('enable generator support', async t => {
  const expected = {
    ecmaFeatures: {
      generators: true,
    },
  }

  t.same(parserOptions, expected, 'parserOptions is not enabling generators')
})
