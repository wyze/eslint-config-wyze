import { rules } from '../eslint-comments'

describe('eslint-comments rules', () => {
  it('contains only eslint-comments rules', () => {
    const keys = Object.keys(rules)
    const expected = Array.from(
      keys, () => expect.stringMatching(/^eslint-comments\/.+$/),
    )

    expect(keys).toEqual(expected)
  })
})
