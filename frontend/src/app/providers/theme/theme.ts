import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', serif",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#2196F3",
    },
    error: {
      main: "#F44336",
    },
    text: {
      secondary: "#0000008A",
    },
  },
  spacing: (factor: number) => `${factor}px`,
});
