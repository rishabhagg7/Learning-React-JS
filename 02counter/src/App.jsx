import './App.css'
import { useState } from 'react'

function App() {

  const [counter,setCounter] = useState(15) //we get [variable,function]
  // please note either variable is const or let

  // let counter = 15
  const addValue = ()=> {
    // counter += 1
    if(counter < 20){
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      // A batch of 4 is created and it is executed only one time, so value will increase by one only

      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      // The function has callback function holding previous value, since we are increasing the prev value of the variable, it will increase the value by 4 here
    }
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
