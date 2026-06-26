import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProider from './Context/UserContextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProider>
      <h1>React with coffe</h1>
      <Login/>
      
      <Profile />
    </UserContextProider>
  )
}

export default App
