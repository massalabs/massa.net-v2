import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { init } from '@plausible-analytics/tracker'
import './index.css'
import App from './App.tsx'

// Initialize Plausible Analytics
const plausibleApiHost = import.meta.env.VITE_PLAUSIBLE_API_HOST
if(plausibleApiHost && plausibleApiHost.length && plausibleApiHost !== "false") {
  init({
    domain: "massa.net",
    endpoint: import.meta.env.VITE_PLAUSIBLE_API_HOST
  })
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
