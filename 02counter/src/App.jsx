import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter] =  useState(15)

   //let counter = 15

   const addValue = () => {
    console.log("clicked",Math.random());
   //counter = counter+1
   if(counter < 20){
   setCounter(counter + 1)
   //setCounter(counter + 1)
   //setCounter(counter + 1)
   //setCounter(counter + 1) they all total print only +1 if write
   //setCounter(prevCountet => prevCounter + 1)  so now take value of last so increment happens and print +4
   }
  };

   const removeValue = () => {
   //counter = counter+1
  // if(counter > 0){
    setCounter(counter - 1)
   //}
   };

  return ( 
    <> 
      <h1> coffe or react</h1>

      <h2>Counter value : {counter}</h2>
      <br></br>

      <button
        onClick={addValue}
         >Add value</button>

      <br></br>

      <button
      onClick={removeValue} disabled = {counter < 1}
      >Remove value{counter}</button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App
