import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bfa14a', // gold
    },
    secondary: {
      main: '#6e4b1f', // brown
    },
    background: {
      default: '#181818', // black
      paper: '#232323', // dark paper
    },
    text: {
      primary: '#f5e9c8', // light gold
      secondary: '#bfa14a', // gold
    },
  },
  typography: {
    fontFamily: 'Montserrat, serif',
    h3: {
      fontWeight: 700,
      color: '#bfa14a',
      letterSpacing: 2,
    },
    h6: {
      color: '#bfa14a',
    },
    body1: {
      color: '#f5e9c8',
    },
    body2: {
      color: '#bfa14a',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          background: 'linear-gradient(90deg, #6e4b1f 0%, #bfa14a 100%)',
          color: '#181818',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #232323 60%, #6e4b1f 100%)',
          border: '1px solid #bfa14a',
        },
      },
    },
  },
});

export default theme;
