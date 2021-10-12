import poolsConfig from 'config/constants/pools'
import spaceChefABI from 'config/abi/spaceChef.json'
import pdustABI from 'config/abi/pdust.json'
import wmaticABI from 'config/abi/wmatic.json'
import multicall from 'utils/multicall'
import { getAddress, getWmaticAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.spaceChefId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(spaceChefABI, callsStartBlock)
  const ends = await multicall(spaceChefABI, callsEndBlock)

  return poolsWithEnd.map((pdustPoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      spaceChefId: pdustPoolConfig.spaceChefId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStatking = async () => {
  const nonMaticPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'MATIC')
  const maticPool = poolsConfig.filter((p) => p.stakingToken.symbol === 'MATIC')

  const callsNonMaticPools = nonMaticPools.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.stakingToken.address),
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const callsMaticPools = maticPool.map((poolConfig) => {
    return {
      address: getWmaticAddress(),
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const nonMaticPoolsTotalStaked = await multicall(pdustABI, callsNonMaticPools)
  const maticPoolsTotalStaked = await multicall(wmaticABI, callsMaticPools)

  return [
    ...nonMaticPools.map((p, index) => ({
      spaceChefId: p.spaceChefId,
      totalStaked: new BigNumber(nonMaticPoolsTotalStaked[index]).toJSON(),
    })),
    ...maticPool.map((p, index) => ({
      spaceChefId: p.spaceChefId,
      totalStaked: new BigNumber(maticPoolsTotalStaked[index]).toJSON(),
    })),
  ]
}
