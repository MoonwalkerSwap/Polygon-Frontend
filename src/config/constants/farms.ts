import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'pDUST',
    lpAddresses: {
      137: '0x5ce9680bddc91d955a51b959f5cabaf466b0be5a',
    },
    token: tokens.pdust,
    quoteToken: tokens.matic,
  },
  {
    pid: 1,
    lpSymbol: 'pDUST-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.pdust,
    quoteToken: tokens.matic,
  },
  {
    pid: 2,
    lpSymbol: 'LINK-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.link,
    quoteToken: tokens.matic,
  },
  {
    pid: 3,
    lpSymbol: 'DAI-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.dai,
    quoteToken: tokens.matic,
  },
  {
    pid: 4,
    lpSymbol: 'BIFI-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.bifi,
    quoteToken: tokens.matic,
  },
  {
    pid: 5,
    lpSymbol: 'BEL-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.bel,
    quoteToken: tokens.matic,
  },
  {
    pid: 6,
    lpSymbol: 'DG-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.dg,
    quoteToken: tokens.matic,
  },
  {
    pid: 7,
    lpSymbol: 'SUPER-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.super,
    quoteToken: tokens.matic,
  },
  {
    pid: 8,
    lpSymbol: 'ATRI-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.atri,
    quoteToken: tokens.matic,
  },
  {
    pid: 9,
    lpSymbol: 'PPAY-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.ppay,
    quoteToken: tokens.matic,
  },
  {
    pid: 10,
    lpSymbol: 'CFI-MATIC LP',
    lpAddresses: {
      137: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.cfi,
    quoteToken: tokens.matic,
  },
]

export default farms
