import { rules } from '../../rules/flow'
import test from 'ava'

test('only flowtype rules', t => {
  Object.keys(rules).forEach(rule => {
    t.truthy(~rule.indexOf('flowtype/'))
  })
})
