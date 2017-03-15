import preact from '../preact'

describe('preact config', () => {
  it('extends files', () => {
    const expected = [
      'wyze',
      'wyze/rules/preact',
    ]

    expect(preact.extends).toEqual(expected)
  })

  it('sets settings correctly', () => {
    const expected = {
      react: {
        createClass: 'h',
        pragma: 'preact',
        version: '6.0',
      },
    }

    expect(preact.settings).toEqual(expected)
  })
})
