import base from '../base'

describe('base config', () => {
  it('extends files', () => {
    const expected = [
      'airbnb/base',
      'plugin:wyze/recommended',
      'wyze/rules/best-practices',
      'wyze/rules/es6',
      'wyze/rules/import',
      'wyze/rules/legacy',
      'wyze/rules/style',
    ]

    expect(base.extends).toEqual(expected)
  })

  it('specifies plugins', () => {
    const expected = [
      'import',
      'wyze',
    ]

    expect(base.plugins).toEqual(expected)
  })

  it('sets parserOptions correcty', () => {
    const expected = {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
      ecmaVersion: 2017,
      sourceType: 'module',
    }

    expect(base.parserOptions).toEqual(expected)
  })
})
