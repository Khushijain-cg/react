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
      <Route path="/nav" element={<Nav name="Navigation" />}></Route>
      <Route path="/about" element={<div>About Page</div>}></Route>
      <Route path="/services" element={<div>Services Page</div>}></Route>
      <Route path="/contact" element={<div>Contact Page</div>}></Route> 
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
    </Routes>
  )
}

export default App