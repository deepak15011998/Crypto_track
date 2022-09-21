import React, { useState, useEffect,lazy,Suspense } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
// import Coins from './components/Coins'
// import Coin from './routes/Coin'
import Navbar from './components/Navbar'
const Coin = lazy(() => import('./routes/Coin'));
const Coins = lazy(() => import('./components/Coins'));

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
       </Suspense>
    </>
  );
}

export default App;
