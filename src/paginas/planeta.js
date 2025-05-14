import { 
    Container, 
    Typography,
    Stack,
    Button,
  }from '@mui/material';
  import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
  import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';

export default function PaginaPlaneta() {
  function ClickCompartilhar() {
    window.navigator.share({
      url: `${window.location.href}`,
      text: `Explore o planeta NOME e descubra suas peculiaridades!`,
    })
  }

  return (
    <>
      <Link to="/">
        <Button variant="contained" ><ArrowBackIosIcon/>Voltar</Button>
      </Link>
      <Container maxWidth="xl">    
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>  
          <img className="efeito-girar" src=""  alt=""/>
          <Typography variant="h5" component="h1" textAlign="center">
            Terra
          </Typography>
          <Typography variant="body1" component="p">
            Descrição do planeta Terra.
          </Typography>

          <Button variant="contained" color="primary" onClick={() => {ClickCompartilhar();}}>
            <ShareIcon>Compartilhar</ShareIcon>
            
          </Button>
        </Stack>  
      </Container>
    </>
  )
}