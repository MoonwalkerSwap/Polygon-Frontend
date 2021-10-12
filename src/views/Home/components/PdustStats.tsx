import React from 'react'
import { Card, CardBody, Heading, Text } from 'polygon-moonwalkerswap-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getPdustAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledPdustStats = styled(Card)`
  background-image: url('/images/moon/bg2.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`
const CardImage = styled.img`
  margin-bottom: 16px;
`

const PdustStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getPdustAddress()))
  const pdustSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledPdustStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, "pDUST Stats")}
        </Heading>
        <CardImage src="/images/moon/wings.svg" alt="wings logo" width={64} height={64} />
        <Block>
          {pdustSupply && <CardValue fontSize="36px" value={pdustSupply} />}
          <Text fontSize="14px" color="#808080">{TranslateString(536, "Total pDUST Supply")}</Text>
        </Block>
        <Block>
          <CardValue fontSize="36px" decimals={0} value={burnedBalance} />
          <Text fontSize="14px" color="#808080">{TranslateString(538, "Total pDUST Burned")}</Text>
        </Block>
        <Block>
          <CardValue fontSize="36px" decimals={0} value={25} />
          <Text fontSize="14px" color="#808080">{TranslateString(540, "New pDUST/block")}</Text>
        </Block>
      </CardBody>
    </StyledPdustStats>
  )
}

export default PdustStats
