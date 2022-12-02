
import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#BF9A18',
            light: '#6573c3',
            dark: '#2c387e',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#183DBF',
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