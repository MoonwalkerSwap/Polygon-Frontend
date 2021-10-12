import React from 'react'
import BigNumber from 'bignumber.js'
import { IconButton, useModal, CalculateIcon } from 'polygon-moonwalkerswap-uikit'
import ApyCalculatorModal from './ApyCalculatorModal'

export interface ApyButtonProps {
  lpLabel?: string
  pdustPrice?: BigNumber
  apy?: number
  addLiquidityUrl?: string
}

const ApyButton: React.FC<ApyButtonProps> = ({ lpLabel, pdustPrice, apy, addLiquidityUrl }) => {
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal lpLabel={lpLabel} pdustPrice={pdustPrice} apy={apy} addLiquidityUrl={addLiquidityUrl} />,
  )

  const handleClickButton = (event): void => {
    event.stopPropagation()
    onPresentApyModal()
  }

  return (
    <IconButton onClick={handleClickButton} variant="text" scale="sm" ml="4px">
      <CalculateIcon width="18px" />
    </IconButton>
  )
}

export default ApyButton
