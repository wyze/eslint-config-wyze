import { rules } from '../../rules/best-practices'
import test from 'ava'

test('no react rules', async t => {
  Object.keys(rules).forEach(rule => {
    t.falsy(~rule.indexOf('react/'), 'found react rule in undesired file')
  })
})
