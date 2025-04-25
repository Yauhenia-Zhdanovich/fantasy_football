import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ThemeProvider as ScThemeProvider } from 'styled-components'

import { App } from '@base/app'
import { theme } from '@base/app'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Add elem with id="root" into index.html ')
}

createRoot(root).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ScThemeProvider>
    </ThemeProvider>
  </StrictMode>,
)
