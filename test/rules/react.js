import { rules } from '../../rules/react'
import test from 'ava'

test('only react rules', t => {
  Object.keys(rules).forEach(rule => {
    t.truthy(~rule.indexOf('react/'))
  })
})
