import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = ()=>{
    // console.log("value added", Math.random());
    // console.log(counter)
    // counter = counter+1;

    if(counter===20){
      return counter
    }
    else{
      return setCounter(counter+1)
    }
    
  }

  const removeValue = ()=>{
    if(counter===0){
      return counter
    }
    else{
     return setCounter(counter-1)
    }
   
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
