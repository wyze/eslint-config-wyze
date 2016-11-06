import preact from '../preact'
import test from 'ava'

test('extends files', t => {
  const expected = [
    'wyze',
    'wyze/rules/preact',
  ]

  t.deepEqual(preact.extends, expected)
})

test('settings are correct', t => {
  const expected = {
    react: {
      createClass: 'h',
      pragma: 'preact',
      version: '6.0',
    },
  }

  t.deepEqual(preact.settings, expected)
})
