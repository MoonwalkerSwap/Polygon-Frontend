import React from 'react'
import { Text } from 'polygon-moonwalkerswap-uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getPdustAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePricePdustMatic } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardMaticValue from './CardMaticValue'

const PdustWalletBalance = () => {
  const TranslateString = useI18n()
  const pdustBalance = useTokenBalance(getPdustAddress())
  const maticBalance = new BigNumber(getBalanceNumber(pdustBalance)).multipliedBy(usePricePdustMatic()).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text fontSize="36px" color="text" style={{ lineHeight: '54px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(pdustBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      <CardMaticValue value={maticBalance} />
    </>
  )
}

export default PdustWalletBalance
