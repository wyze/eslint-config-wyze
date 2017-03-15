import { rules } from '../flow'

describe('flow rules', () => {
  it('only flowtype rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^flowtype\/.+$/),
    )

    expect(keys).toEqual(expected)
  })
})
