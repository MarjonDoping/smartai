import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroPage from './Pages/HeroPage'
import StepsPage from './Pages/StepsPage'
import Services from './Pages/Services'
import Solutions from './Pages/Solutions'
import Accordion from './Pages/Accordion'
import InquirePage from './Pages/InquirePage'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="font-jakarta">
    <Navbar/>
    <HeroPage/>
    <StepsPage/>
    <Services/>
    <Solutions/>
    <Accordion/>
    <InquirePage/>
    <Footer/>
    </div>
     
    </>
  )
}

export default App
