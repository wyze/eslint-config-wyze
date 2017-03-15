import { rules } from '../style'

describe('style rules', () => {
  it('contains no plugin rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^[^/]+$/),
    )

    expect(keys).toEqual(expected)
  })
})
