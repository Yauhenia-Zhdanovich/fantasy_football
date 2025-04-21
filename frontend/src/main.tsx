import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from '@base/app'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Add elem with id="root" into index.html ')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
