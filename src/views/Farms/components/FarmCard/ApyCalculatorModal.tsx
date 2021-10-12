import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from 'polygon-moonwalkerswap-uikit'
import useI18n from 'hooks/useI18n'
import { calculatePdustEarnedPerThousandDollars, apyModalRoi } from 'utils/compoundApyHelpers'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  pdustPrice?: BigNumber
  apy?: number
  addLiquidityUrl?: string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  pdustPrice,
  apy,
  addLiquidityUrl,
}) => {
  const TranslateString = useI18n()
  const oneThousandDollarsWorthOfPdust = 1000 / pdustPrice.toNumber()

  const pdustEarnedPerThousand1D = calculatePdustEarnedPerThousandDollars({ numberOfDays: 1, farmApy: apy, pdustPrice })
  const pdustEarnedPerThousand7D = calculatePdustEarnedPerThousandDollars({ numberOfDays: 7, farmApy: apy, pdustPrice })
  const pdustEarnedPerThousand30D = calculatePdustEarnedPerThousandDollars({
    numberOfDays: 30,
    farmApy: apy,
    pdustPrice,
  })
  const pdustEarnedPerThousand365D = calculatePdustEarnedPerThousandDollars({
    numberOfDays: 365,
    farmApy: apy,
    pdustPrice,
  })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(860, 'Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(858, 'ROI')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(864, 'Dust per $1000')}
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pdustEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfPdust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pdustEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pdustEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfPdust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pdustEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pdustEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfPdust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pdustEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pdustEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfPdust })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pdustEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="textSubtle">
        {TranslateString(
          866,
          'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',
        )}
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={addLiquidityUrl}>
          {TranslateString(999, 'Get')} {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
