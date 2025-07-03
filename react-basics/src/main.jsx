import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from "./layouts/MainLayout";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)
