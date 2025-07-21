import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </StrictMode>,
)
