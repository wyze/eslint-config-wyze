import { rules } from '../es6'

describe('es6 rules', () => {
  it('contains no plugin rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^[^/]+$/),
    )

    expect(keys).toEqual(expected)
  })
})
