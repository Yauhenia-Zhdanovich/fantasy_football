<<<<<<< HEAD
import { createTheme } from "@mui/material/styles";
=======
import { createTheme } from '@mui/material/styles';
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', serif",
    fontSize: 16,
  },
  palette: {
    primary: {
<<<<<<< HEAD
      main: "#2196F3",
    },
    error: {
      main: "#F44336",
    },
    text: {
      secondary: "#0000008A",
=======
      main: '#2196F3', 
    },
    error: {
      main: '#F44336',      
    },
    text: {
      secondary: '#0000008A', 
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
    },
  },
  spacing: (factor: number) => `${factor}px`,
});
