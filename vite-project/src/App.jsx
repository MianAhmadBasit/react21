import Nav from './comp/Nav.jsx'
import  { useState } from 'react'
function App() {
let [num , setNum] = useState(10)

function add() {
  setNum(num+1)
}

function Del() {
  setNum(num-1)
}
function reset() {
  setNum(10)
}
    

  return (
    <div>
      <h1>{num}</h1>      
    <button onClick={add}>Value Add</button>
    <button onClick={Del}>Delete Value</button>
     <button onClick={reset}>Reset</button>
      <Nav name="ali" age={34}/>
      <Nav name="Hassan" age={28}/>
      <Nav name="Raza" age={44}/>
      
   <h1>hi ahmad</h1>

    </div>
  )
}

export default App