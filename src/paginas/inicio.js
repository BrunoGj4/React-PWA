import { 
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaginaInicio() {
  return (
  <>    
    <Stack
      direction="column"
      height="100vh"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 6,
      }}
    >
      <Typography variant="h3" component="h1" textAlign="center">
        Conheça os planetas do sistema solar!
        Erica é muito chata!!!!
      </Typography>
      <img className="animacaoEfeitoFlutuando" src="../img/astronauta.png" alt="Astrounauta Flutuando." />
      <Link to="/planetas">
        <Button variant="contained" endIcon={<ArrowForwardIosIcon/>} color="primary">
          Vamos lá

        </Button>
      </Link>
    </Stack>
  </>
 );
}