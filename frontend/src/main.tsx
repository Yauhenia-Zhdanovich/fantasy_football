import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './app/providers/theme/theme.ts'
import { BrowserRouter } from 'react-router'
import { ErrorBoundary } from './app/providers/ErrorBoundary/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <CssBaseline />
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
