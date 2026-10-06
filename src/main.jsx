import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import './index.css'
import App from './App.jsx'
import './page-rhythm.css'
import './cta-states.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
