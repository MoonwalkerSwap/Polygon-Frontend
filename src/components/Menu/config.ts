import { MenuEntry } from 'polygon-moonwalkerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://polygon-swap.moonwalker.network',
      },
      {
        label: 'Liquidity',
        href: 'https://polygon-swap.moonwalker.network',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://polygon-info.moonwalker.network',
      },
      {
        label: 'Tokens',
        href: 'https://polygon-info.moonwalker.network/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://polygon-info.moonwalker.network/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://polygon-info.moonwalker.network/accounts',
      },
    ],
  },
  {
     label: 'IFO',
     icon: 'IfoIcon',
     href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MoonWalkerJim',
      },
      {
        label: 'Docs',
        href: 'https://polygon-docs.moonwalker.network',
      },
      {
        label: 'Blog',
        href: 'https://moonwalkerjim.medium.com/',
      },
    ],
  },
]

export default config
