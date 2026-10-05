import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production HTML is pre-rendered (see scripts/prerender.mjs), so hydrate it; dev starts empty.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
