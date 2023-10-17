import { useState } from 'react'
import Card from './Card'
import './App.css'
function a()
{
  
}
function App() {
let desc="Vite is a local development server written by Evan You and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It monitors files as they're being edited";
let desc2="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScri";

  return (
  <>
  <h1>HELLO WORLD</h1>
  <div className='flex flex-row gap-10 flex-wrap bg-red-400 a'>   
      <Card name="react" btntxt="click me" desc={desc} />
      <button onClick={a}></button>
  </div>
  
    </>
  )
}

export default App
