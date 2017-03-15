import { rules } from '../legacy'

describe('legacy rules', () => {
  it('contains no plugin rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^[^/]+$/),
    )

    expect(keys).toEqual(expected)
  })
})
