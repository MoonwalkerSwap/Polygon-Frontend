import React from 'react'
import CardValue, { CardValueProps } from './CardValue'

const CardMaticValue: React.FC<CardValueProps> = (props) => {
  return (
    <CardValue fontSize="14px" lineHeight="1.1" color="textSubtle" prefix="~$" bold={false} decimals={2} {...props} />
  )
}

export default CardMaticValue
