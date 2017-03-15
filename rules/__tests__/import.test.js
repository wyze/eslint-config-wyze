import { rules } from '../import'

describe('import rules', () => {
  it('contains only import rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^import\/.+$/),
    )

    expect(keys).toEqual(expected)
  })
})
