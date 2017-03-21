import { rules } from '../react-a11y'

describe('react-a11y rules', () => {
  it('contains only react-a11y rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^jsx-a11y\/.+$/),
    )

    expect(keys).toEqual(expected)
  })
})
