import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashbord from './components/Dashbord/Dashbord'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <h1 className=' text-7xl text-purple-400'>Hello Form Tailwind</h1>
      <PriceList />
      <Dashbord />
      <PhoneBar />
    </div>
  )
}

export default App
