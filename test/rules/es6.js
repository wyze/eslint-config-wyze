import { rules } from '../../rules/es6'
import test from 'ava'

test('no react rules', t => {
  Object.keys(rules).forEach(rule => {
    t.falsy(~rule.indexOf('react/'), 'found react rule in undesired file')
  })
})

