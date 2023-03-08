import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f4f4f5'
    },
    primary: {
      main: '#0066c3',
    },
    secondary: {
      main: "#a8a8a8",
    }
  }
});
