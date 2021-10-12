import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getERC20Contract,
  getPdustContract,
  getMoonwalkerFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getIfoContract,
  getLotteryContract,
  getLotteryTicketContract,
  getAstroChefContract,
  getPointCenterIfoContract,
  getSpaceChefContract,
  getClaimRefundContract,
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useIfoContract = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getIfoContract(address, web3), [address, web3])
}

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getERC20Contract(address, web3), [address, web3])
}

export const usePdust = () => {
  const web3 = useWeb3()
  return useMemo(() => getPdustContract(web3), [web3])
}

export const useMoonwalkerFactory = () => {
  const web3 = useWeb3()
  return useMemo(() => getMoonwalkerFactoryContract(web3), [web3])
}

export const usePancakeRabbits = () => {
  const web3 = useWeb3()
  return useMemo(() => getPancakeRabbitContract(web3), [web3])
}

export const useLottery = () => {
  const web3 = useWeb3()
  return useMemo(() => getLotteryContract(web3), [web3])
}

export const useLotteryTicket = () => {
  const web3 = useWeb3()
  return useMemo(() => getLotteryTicketContract(web3), [web3])
}

export const useAstroChef = () => {
  const web3 = useWeb3()
  return useMemo(() => getAstroChefContract(web3), [web3])
}

export const useSpaceChef = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getSpaceChefContract(id, web3), [id, web3])
}

export const usePointCenterIfoContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getPointCenterIfoContract(web3), [web3])
}

export const useBunnySpecialContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnySpecialContract(web3), [web3])
}

export const useClaimRefundContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getClaimRefundContract(web3), [web3])
}
