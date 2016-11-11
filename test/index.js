import main from '../'
import test from 'ava'

test('extends files', t => {
  const expected = [
    'airbnb-base',
    'airbnb-base/rules/strict',
    'airbnb/rules/react',
    'wyze/base',
    'wyze/rules/react',
    'wyze/rules/jsx-a11y',
  ]

  t.deepEqual(main.extends, expected)
})
