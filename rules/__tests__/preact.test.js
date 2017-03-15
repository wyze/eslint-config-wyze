import { rules } from '../preact'

describe('preact rules', () => {
  it('contains only react rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^react\/.+$/),
    )

    expect(keys).toEqual(expected)
  })
})
