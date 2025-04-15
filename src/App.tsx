import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img 
        src="/borger.png" 
        alt="Burger"
        style={{
          borderRadius: '5rem',
          maxWidth: '100%',
          height: '300px',
          width: '300px',
        }}
      />
      <h1>BORGER</h1>
    </>
  )
}

export default App
