import { usePricePdustMatic } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalPdust = getBalanceNumber(totalRewards)
  const PdustPriceMatic = usePricePdustMatic()

  return totalPdust * PdustPriceMatic.toNumber()
}

export default useLotteryTotalPrizesUsd
