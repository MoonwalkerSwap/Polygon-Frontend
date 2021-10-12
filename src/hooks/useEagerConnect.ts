import { useEffect } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from 'polygon-moonwalkerswap-uikit'
import useAuth from 'hooks/useAuth'

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames

    // Disable eager connect for Polygon Wallet. Currently the Polygon Wallet extension does not inject PolygonChain
    // into the Window object in time causing it to throw an error
    // TODO: Figure out an elegant way to listen for when the PolygonChain object is ready
    if (connectorId && connectorId !== ConnectorNames.Polygon) {
      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
