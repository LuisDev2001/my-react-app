import 'web-essential-ui/style.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerEssentialComponents } from 'web-essential-ui'
import App from './App.tsx'
import './index.css'
import './assets/main.css'

registerEssentialComponents()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
