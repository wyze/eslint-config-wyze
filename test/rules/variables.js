import { rules } from '../../rules/variables'
import test from 'ava'

test('no react rules', t => {
  Object.keys(rules).forEach(rule => {
    t.falsy(~rule.indexOf('react/'))
  })
})
