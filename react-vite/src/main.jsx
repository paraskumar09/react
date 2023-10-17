import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
function abc(){
  return (
    <div><h1>inline</h1></div>
    
  )
}

const ele=(
<>
    <h1>fakfa</h1>
    <p>GGGGG</p>
    <a href='google.com'>sdfg</a>

    </>
)

const elem=React.createElement(
  'a',
  {href:"youtube.com"},
  "yohtoob"
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  abc()
)
ReactDOM.createRoot(document.getElementById('root2')).render(
    elem
)

