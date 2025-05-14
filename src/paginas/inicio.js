import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


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
        <Button variant="contained">Vamos lá</Button>
      </Link>


    </Stack>
  </>
 );
}