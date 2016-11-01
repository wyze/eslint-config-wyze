import { rules } from '../../rules/preact'
import test from 'ava'

test('only react rules', t => {
  Object.keys(rules).forEach(rule => {
    t.truthy(~rule.indexOf('react/'), 'rule is not for eslint-plugin-react')
  })
})
