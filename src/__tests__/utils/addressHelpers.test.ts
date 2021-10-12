import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    137: '0x5ce9680bddc91d955a51b959f5cabaf466b0be5a',
  }

  it(`get address for mainnet (chainId 137)`, () => {
    process.env.REACT_APP_CHAIN_ID = '137'
    const expected = address[137]
    expect(getAddress(address)).toEqual(expected)
  })
})
