import flow from '../flow'
import test from 'ava'

test('extends files', t => {
  const expected = [
    'plugin:flowtype/recommended',
    'wyze/rules/flow',
  ]

  t.deepEqual(flow.extends, expected, 'extending incorrect rules')
})

test('parser is set correctly', t => {
  const expected = 'babel-eslint'

  t.is(flow.parser, expected)
})

test('plugins are set correctly', t => {
  const expected = [
    'flowtype',
  ]

  t.deepEqual(flow.plugins, expected)
})
