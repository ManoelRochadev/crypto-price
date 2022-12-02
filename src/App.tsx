import ethLogo from './assets/eth-logo.svg'
import btcLogo from './assets/btc-logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { api } from './api/axios'
import { Price } from './components/Price'

function App() {
  const [open, setOpen] = useState<null | 'BTC' | 'ETH'>(null)

  return (
    <>
    <div className="App">
      {
        open ? (
          <>
          <Price value={open}/>
          <button onClick={() => setOpen(null)}>Voltar</button>
          </>
        ) : (
          <>
            <img onClick={() => setOpen('BTC')} src={btcLogo} className="logo" />
            <img src={ethLogo} onClick={() => setOpen('ETH')} className="logo react" alt="React logo" />
            <p className="read-the-docs">
              Click na sua crypto favorita para ver a cotação
            </p>
          </>
        )
      }
    </div >
    </>
  )
}

export default App
