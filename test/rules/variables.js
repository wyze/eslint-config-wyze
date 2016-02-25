import { rules } from '../../rules/variables'
import test from 'ava'

test('no react rules', async t => {
  for ( const rule in rules ) {
    if ( rules.hasOwnProperty(rule) ) {
      t.notOk(~rule.indexOf('react/'), 'found react rule in undesired file')
    }
  }
})
