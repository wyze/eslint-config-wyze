import { rules } from '../../rules/jsx-a11y'
import test from 'ava'

test('only jsx-a11y rules', t => {
  Object.keys(rules).forEach(rule => {
    t.truthy(~rule.indexOf('jsx-a11y/'))
  })
})
