import pools from 'config/constants/pools'

describe('Config pools', () => {
  it.each(pools.map((pool) => pool.spaceChefId))('Pool #%d has an unique sousId', (spaceChefId) => {
    const duplicates = pools.filter((p) => spaceChefId === p.spaceChefId)
    expect(duplicates).toHaveLength(1)
  })
  it.each(pools.map((pool) => [pool.spaceChefId, pool.contractAddress]))(
    'Pool #%d has an unique contract address',
    (sousId, contractAddress) => {
      const duplicates = pools.filter((p) => contractAddress[56] === p.contractAddress[56])
      expect(duplicates).toHaveLength(1)
    },
  )
})
