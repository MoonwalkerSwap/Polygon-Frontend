import React from 'react'
import { Text } from 'polygon-moonwalkerswap-uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from 'hooks/useTickets'
import useI18n from 'hooks/useI18n'
import { usePricePdustMatic } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardMaticValue from './CardMaticValue'

const LotteryJackpot = () => {
  const TranslateString = useI18n()
  const lotteryPrizeAmount = useTotalRewards()
  const balance = getBalanceNumber(lotteryPrizeAmount)
  const lotteryPrizeAmoutDust = balance.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })
  const lotteryPrizeAmountMatic = new BigNumber(balance).multipliedBy(usePricePdustMatic()).toNumber()

  return (
    <>
      <Text bold fontSize="24px" style={{ lineHeight: '1.5' }}>
        {lotteryPrizeAmoutDust} {TranslateString(999, 'pDUST')}
      </Text>
      <CardMaticValue value={lotteryPrizeAmountMatic} />
    </>
  )
}

export default LotteryJackpot
