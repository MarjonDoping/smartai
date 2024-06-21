import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroPage from './Pages/HeroPage'
import StepsPage from './Pages/StepsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="font-jakarta">
    <Navbar/>
    <HeroPage/>
    <StepsPage/>
    </div>
     
    </>
  )
}

export default App
