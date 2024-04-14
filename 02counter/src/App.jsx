import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClickPositive = () => {
    setCount(count + 1)
  }
  
  const handleClickNegative = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter value: {count}</h3>
      <button onClick={handleClickPositive}>+1</button>
      <button onClick={handleClickNegative}>-1</button>
    </>
  )
}

export default App