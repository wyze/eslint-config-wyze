import main from '../'
import test from 'ava'

test('extends files', t => {
  const expected = [
    'airbnb',
    'wyze/base',
    'wyze/rules/react',
    'wyze/rules/jsx-a11y',
  ]

  t.deepEqual(main.extends, expected)
})
