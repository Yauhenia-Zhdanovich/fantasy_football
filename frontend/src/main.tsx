<<<<<<< HEAD
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/index.ts";
import { theme } from "./app/providers/theme/theme.ts";

createRoot(document.getElementById("root")!).render(
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './app/providers/theme/theme.ts'
import { BrowserRouter } from 'react-router'
import { ErrorBoundary } from './app/providers/ErrorBoundary/index.ts'

createRoot(document.getElementById('root')!).render(
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
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
<<<<<<< HEAD
);
=======
)
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
