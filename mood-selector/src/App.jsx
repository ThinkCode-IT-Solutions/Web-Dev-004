import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoodSelector from './components/MoodSelector'
import MoodViewer from './components/MoodViewer'

function App() {
  const [count, setCount] = useState(0)
  const [mood,setMood] = useState(null);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <MoodSelector setMood={setMood} />
     <MoodViewer mood={mood} />
      
    </>
  )
}

export default App
