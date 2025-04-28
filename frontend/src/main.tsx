import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/index.ts";
import { theme } from "./app/providers/theme/theme.ts";

createRoot(document.getElementById("root")!).render(
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
);
