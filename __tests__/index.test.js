import main from '../'

describe('main config', () => {
  it('extends files', () => {
    const expected = [
      'airbnb',
      'wyze/base',
      'wyze/rules/react',
      'wyze/rules/react-a11y',
    ]

    expect(main.extends).toEqual(expected)
  })
})
