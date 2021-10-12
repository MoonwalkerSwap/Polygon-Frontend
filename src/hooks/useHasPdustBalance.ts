import BigNumber from 'bignumber.js'
import { getPdustAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's dust balance is at least the amount passed in
 */
const useHasPdustBalance = (minimumBalance: BigNumber) => {
  const pdustBalance = useTokenBalance(getPdustAddress())
  return pdustBalance.gte(minimumBalance)
}

export default useHasPdustBalance
