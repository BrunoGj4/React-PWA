import { createTheme} from '@mui/material';

const tema = createTheme({
  palete: {
    primary: {
      main: '#E0A51A',
      contrastText: '#fff',
    }
  },
  typography: {
    allVariants: {
      color: '#fff',
    }
  }
});

export default tema;