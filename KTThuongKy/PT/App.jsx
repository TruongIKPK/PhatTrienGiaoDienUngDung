import { useState } from 'react'
import './App.css'
import Header1 from './components/Header'
import Main1 from './/components/Main'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header1/>
      <Main1/>
    </>
  )
}

export default App
