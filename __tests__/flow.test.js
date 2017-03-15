import flow from '../flow'

describe('flow config', () => {
  it('extends files', () => {
    const expected = [
      'plugin:flowtype/recommended',
      'wyze/rules/flow',
    ]

    expect(flow.extends).toEqual(expected)
  })

  it('sets parser correctly', () => {
    const expected = 'babel-eslint'

    expect(flow.parser).toBe(expected)
  })

  it('sets plugins correctly', () => {
    const expected = [
      'flowtype',
    ]

    expect(flow.plugins).toEqual(expected)
  })
})
