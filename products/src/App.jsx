import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'
import Product from './components/product'

function App() {
  const product=[
    {
      id:"p1",
      name:"laptop",
      amount:"200",
      date: new Date(2021,8,10),
    },
    {
      id:"p2",
      name:"smartphone",
      amount:"100",
      date: new Date(2022,10,11),
    },
    {
      id:"p3",
      name:"tablet",
      amount:"150",
      date: new Date(2020,8,10),
    },
    {
      id:"p4",
      name:"laptop",
      amount:"250",
      date: new Date(2021,1,10),
    }

  ]
  return (
  
    <div className='flex justify-center pt-20 h-screen w-screen '>
      <Product items={product}> </Product>      
    </div>

  )
}

export default App;
