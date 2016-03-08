import main from '../'
import test from 'ava'

test('extends length', async t => {
  const expected = 3

  t.is(main.extends.length, expected, 'Incorrect number of rulesets')
})

test('extends files', async t => {
  const expected = [
    'airbnb',
    'wyze/base',
    'wyze/rules/react',
  ]

  t.same(main.extends, expected, 'extending incorrect rules in `./index`')
})
