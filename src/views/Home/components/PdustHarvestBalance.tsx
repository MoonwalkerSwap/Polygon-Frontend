import React from 'react'
import { Text } from 'polygon-moonwalkerswap-uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import { usePricePdustMatic } from 'state/hooks'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardMaticValue from './CardMaticValue'

const Block = styled.div`
  margin-bottom: 24px;
}
`

const PdustHarvestBalance = () => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const earningsMatic = new BigNumber(earningsSum).multipliedBy(usePricePdustMatic()).toNumber()

  if (!account) {
    return (
      <Text fontSize="36px" color="text" style={{ lineHeight: '76px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={earningsSum} lineHeight="1.5" />
      <CardMaticValue value={earningsMatic} />
    </Block>
  )
}

export default PdustHarvestBalance
