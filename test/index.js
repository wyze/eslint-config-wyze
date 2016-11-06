import main from '../'
import test from 'ava'

test('extends files', t => {
  const expected = [
    'airbnb',
    'wyze/base',
    'wyze/rules/react',
  ]

  t.deepEqual(main.extends, expected)
})
