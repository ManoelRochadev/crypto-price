import ethLogo from '../assets/eth-logo.svg'
import btcLogo from '../assets/btc-logo.svg'
import { useEffect, useState } from "react"
import { api } from "../api/axios"

interface CryptoProps {
  value: null | 'BTC' | 'ETH'
}

export function Price(props: CryptoProps) {
  const [dataBTC, setDataBTC] = useState(0)
  const [dataETH, setDataETH] = useState(0)

  useEffect(() => {
      api.get('/BTC/ticker/').then((e) => {
        setDataBTC(parseInt(e.data.ticker.last))
      })

      api.get('/ETH/ticker/').then((e) => {
        setDataETH(parseInt(e.data.ticker.last))
      })
  }, [])
  return (
    <div >
      {
        props.value === 'BTC' ? (
          <>
          <img src={btcLogo} alt="logo" className='logo'/>
          <h1>R$ {Math.trunc(dataBTC)}</h1>
          </>
        ) : (
          <>
          <img src={ethLogo} alt="logo" className='logo'/>
          <h1>R$ {Math.trunc(dataETH)} </h1>
          </>
        )
      }
    </div>
  )
}