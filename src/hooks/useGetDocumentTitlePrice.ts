import { useEffect } from 'react'
import { usePricePdustMatic } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const pdustPriceUsd = usePricePdustMatic()
  useEffect(() => {
    document.title = `MoonWalkerSwap - $${Number(pdustPriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
