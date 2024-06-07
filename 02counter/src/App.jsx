import './App.css'
import { useState } from 'react'

function App() {

  const [counter,setCounter] = useState(15) //we get [variable,function]
  // please note either variable is const or let

  // let counter = 15
  const addValue = ()=> {
    // counter += 1
    if(counter < 20)
      setCounter(counter+1)
  }
  const subValue = function(){
    // counter -= 1
    if(counter > 0)
      setCounter(counter-1)
  }
  return (
    <>
      <h1>React JS Course</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={subValue}> Decrease value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
