import { createTheme} from '@mui/material';

const tema = createTheme({
  palete: {
    primary: {
      main: '#E0A51A',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
      contrastText: '#000',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
    }
  }
});

export default tema;