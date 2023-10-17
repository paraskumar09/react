import { useState } from 'react'


function App() {
const [Color,set]=useState("red");


  return (
    <>
      <div className='w-full h-screen ' style={{backgroundColor:Color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-2 px-3 py-2 rounded-3xl bg-white'>

              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"red"}} onClick={()=>set("red")}>RED</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"green"}} onClick={()=>set("green")}>GREEN</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"blue"}} onClick={()=>set("blue")}>BLUE</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"cyan"}} onClick={()=>set("cyan")}>CYAN</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"yellow"}} onClick={()=>set("yellow")}>YELLOW</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"Violet"}} onClick={()=>set("violet")}>VIOLET</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"orange"}} onClick={()=>set("orange")}>ORANGE</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"grey"}} onClick={()=>set("grey")}>GREY</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"pink"}} onClick={()=>set("pink")}>PINK</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"brown"}} onClick={()=>set("brown")}>BROWN</button>
              <button className='outline-none rounded-3xl px-4 py-1 text-white' style={{backgroundColor:"olive"}} onClick={()=>set("olive")}>OLIVE</button>
            </div>      
        </div>
      </div>


    
    </>
  )
}

export default App
