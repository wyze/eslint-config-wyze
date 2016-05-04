import { rules } from '../../rules/react'
import test from 'ava'

test('only react rules', async t => {
  Object.keys(rules).forEach(rule => {
    t.truthy(~rule.indexOf('react/'), 'rule is not for eslint-plugin-react')
  })
})
