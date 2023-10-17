import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,set]=useState(10);

const incValue=()=>{
  set(counter+1);
  if(counter>=20)
    set(0);
}

const decValue=()=>
{
  if(counter>0)
    set(counter-1);
}
  return (
    <>
    <h1> Counter NO {counter}</h1>

    <button onClick={incValue}>INCREASE </button>
    <br />
    <button onClick={decValue}>DECREASE</button>
    </>
  )
}

export default App
