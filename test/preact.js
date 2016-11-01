import preact from '../preact'
import test from 'ava'

test('extends length', async t => {
  const expected = 2

  t.is(preact.extends.length, expected, 'Incorrect number of rulesets')
})

test('extends files', async t => {
  const expected = [
    'wyze',
    'wyze/rules/preact',
  ]

  t.deepEqual(preact.extends, expected, 'extending incorrect rules')
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
