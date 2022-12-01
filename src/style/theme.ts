
import { ThemeProvider, createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#6E07F3',
            light: '#6573c3',
            dark: '#2c387e',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#ff8c00',
            dark: '#ab003c',
            contrastText: '#ffffff',
            light: '#f73378',
          },
        background: {
          paper: '#fff',
          default: '#fafafa',
        },
      },
});

export default mainTheme;