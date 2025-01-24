import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BasicRouter from './router/BasicRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicRouter></BasicRouter>
  </StrictMode>,
)
