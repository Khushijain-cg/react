import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav'
function App() {
  const [count, setCount] = useState(0)
  function Increment() {
    setCount((prev)=>prev+1);
  }

  function Decrement() {
    setCount((prev)=>prev-1);
  }

  return (
    <Routes>
      <Route 
path="/" element={
    <>
    <Nav/>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>}
    ></Route>
    <Route path="/nav" element={<Nav name="Navigation" />}></Route>
    </Routes>
  )
}

export default App