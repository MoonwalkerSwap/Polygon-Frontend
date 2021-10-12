import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'
import { poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'

// Addresses
import {
  getAddress,
  getPancakeRabbitsAddress,
  getMoonwalkerFactoryAddress,
  getBunnySpecialAddress,
  getPdustAddress,
  getLotteryAddress,
  getLotteryTicketAddress,
  getAstroChefAddress,
  getPointCenterIfoAddress,
  getClaimRefundAddress,
} from 'utils/addressHelpers'

// ABI
import pancakeRabbitsAbi from 'config/abi/pancakeRabbits.json'
import moonwalkerFactoryAbi from 'config/abi/moonwalkerFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'
import erc20Abi from 'config/abi/erc20.json'
import pdustAbi from 'config/abi/pdust.json'
import ifoAbi from 'config/abi/ifo.json'
import pointCenterIfo from 'config/abi/pointCenterIfo.json'
import lotteryAbi from 'config/abi/lottery.json'
import lotteryTicketAbi from 'config/abi/lotteryNft.json'
import astroChef from 'config/abi/astroChef.json'
import spaceChef from 'config/abi/spaceChef.json'
import spaceChefMatic from 'config/abi/spaceChefMatic.json'
import claimRefundAbi from 'config/abi/claimRefund.json'

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}

export const getERC20Contract = (address: string, web3?: Web3) => {
  return getContract(erc20Abi, address, web3)
}
export const getIfoContract = (address: string, web3?: Web3) => {
  return getContract(ifoAbi, address, web3)
}
export const getSpaceChefContract = (id: number, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.spaceChefId === id)
  const abi = config.poolCategory === PoolCategory.POLYGON ? spaceChefMatic : spaceChef
  return getContract(abi, getAddress(config.contractAddress), web3)
}
export const getPointCenterIfoContract = (web3?: Web3) => {
  return getContract(pointCenterIfo, getPointCenterIfoAddress(), web3)
}
export const getPdustContract = (web3?: Web3) => {
  return getContract(pdustAbi, getPdustAddress(), web3)
}
export const getPancakeRabbitContract = (web3?: Web3) => {
  return getContract(pancakeRabbitsAbi, getPancakeRabbitsAddress(), web3)
}
export const getMoonwalkerFactoryContract = (web3?: Web3) => {
  return getContract(moonwalkerFactoryAbi, getMoonwalkerFactoryAddress(), web3)
}
export const getBunnySpecialContract = (web3?: Web3) => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress(), web3)
}
export const getLotteryContract = (web3?: Web3) => {
  return getContract(lotteryAbi, getLotteryAddress(), web3)
}
export const getLotteryTicketContract = (web3?: Web3) => {
  return getContract(lotteryTicketAbi, getLotteryTicketAddress(), web3)
}
export const getAstroChefContract = (web3?: Web3) => {
  return getContract(astroChef, getAstroChefAddress(), web3)
}
export const getClaimRefundContract = (web3?: Web3) => {
  return getContract(claimRefundAbi, getClaimRefundAddress(), web3)
}
