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
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h2">
        Conheça os planetas do sistema solar!
      </Typography>
      <img className="efeito-flutuando" src="../img/astrounata.png" alt="Astrounauta Flutuando." />
      <Link to="/planetas">
        <Button variant="contained">
          Vamos lá
          <ArrowForwardIosIcon></ArrowForwardIosIcon>

        </Button>
      </Link>


    </Stack>
  </>
 );
}