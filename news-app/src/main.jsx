import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainApp from './pages/MainApp.jsx'
import "./assets/css/style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
