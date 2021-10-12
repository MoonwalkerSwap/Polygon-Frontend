import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePricePdustMatic } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardMaticValue from './CardMaticValue'

const Block = styled.div`
  margin-bottom: 24px;
 }
`
const PdustWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const pdustAmount = getBalanceNumber(claimAmount)
  const claimAmountMatic = new BigNumber(pdustAmount).multipliedBy(usePricePdustMatic()).toNumber()

  return (
    <Block>
      <CardValue value={pdustAmount} lineHeight="1.5" />
      <CardMaticValue value={claimAmountMatic} decimals={2} />
    </Block>
  )
}

export default PdustWinnings
