import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { version } from 'react'
import App from './App.jsx'

console.log("Using React: "+version);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
