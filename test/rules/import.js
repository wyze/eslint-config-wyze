import { rules } from '../../rules/import'
import test from 'ava'

test('only import rules', t => {
  Object.keys(rules).forEach(rule => {
    t.truthy(~rule.indexOf('import/'))
  })
})
