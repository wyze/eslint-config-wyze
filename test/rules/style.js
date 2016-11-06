import { rules } from '../../rules/style'
import test from 'ava'

test('no react rules', t => {
  Object.keys(rules).forEach(rule => {
    t.falsy(~rule.indexOf('react/'))
  })
})
