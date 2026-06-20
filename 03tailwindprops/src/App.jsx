import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card' 

function App() {
      const [count, setCount] = useState(0)
      let my0bj = {
username: "hitesh",
age: 21
      }
let newArr = [1, 2, 3]

  return (
    <>
    <h1 className="text-3xl font-bold text-red-500">Tailwind Test</h1>
    <Card  username="smit" btnText="click me"/>
    <Card username="bhalani"></Card>
    </>
  )
}

export default App
