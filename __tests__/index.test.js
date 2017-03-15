import main from '../'

describe('main config', () => {
  it('extends files', () => {
    const expected = [
      'airbnb',
      'wyze/base',
      'wyze/rules/react',
    ]

    expect(main.extends).toEqual(expected)
  })
})
