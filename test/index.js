import main from '../'
import test from 'ava'

test('extends length', t => {
  const expected = 3

  t.is(main.extends.length, expected, 'Incorrect number of rulesets')
})

test('extends files', t => {
  const expected = [
    'airbnb',
    'wyze/base',
    'wyze/rules/react',
  ]

  t.deepEqual(main.extends, expected, 'extending incorrect rules in `./index`')
})
