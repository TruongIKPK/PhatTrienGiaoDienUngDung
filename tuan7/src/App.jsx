import { useState } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Menu/>
        <Header/>
        <div className='content bg-amber-100'>content</div>
      </div>
    </>
  )
}

export default App
