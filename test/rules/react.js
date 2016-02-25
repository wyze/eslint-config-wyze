import { rules } from '../../rules/react'
import test from 'ava'

test('only react rules', async t => {
  for ( const rule in rules ) {
    if ( rules.hasOwnProperty(rule) ) {
      t.ok(~rule.indexOf('react/'), 'rule is not for eslint-plugin-react')
    }
  }
})
