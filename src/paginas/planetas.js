import { 
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea
} from '@mui/material';
import { Link } from 'react-router-dom';
import ComponenteLayoutPadrao from '../componetes/layout/padrao';
import { useState, useEffect } from 'react';
import ApiPlanetas from '../api/planetas';

export default function PaginaPlanetas() {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [msg, setMsg] = useState(null);
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let respostaApi = await ApiPlanetas.obterTodos();
        setPlanetas(respostaApi);
        setCarregando(false);
        // Example usage of setErro and setMsg:
        // setErro("Erro de exemplo");
        // setMsg("Mensagem de exemplo");
      } catch (error) {
        setErro({
            subtitulo: "Erro ao carregar os planetas",
            descricao: String(error)
          });
        setCarregando(false);
      }
    })();
}, []);

  return (
    <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg} >
      <Container maxWidth="xl" className="containerMargin">
        <Typography variant="h4" component="h2" textAlign="center">
          Planetas do sistema solar
        </Typography>

        <Grid container spacing={2} mt={2}>
          {/* XS = 2 item */}
          {/* SM = 3 item */}
          {/* MD = 4 item */}
          {/* LG = 6 item */}
          {/* XL = 6 item */}
          {
            planetas.map(planeta => (
              <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={planeta.id}>
                <Card className="cardVidro" >
                  <Link to={`/planetas/${planeta?.slug}`}>
                    <CardActionArea >
                      <img src={planeta?.imgUrl} alt={planeta?.descricao} width="100%"/>
                      <Typography variant="h5" component="h3" textAlign="center" mt={1} mb={1}>
                        {planeta?.nome}                        
                      </Typography>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </ComponenteLayoutPadrao>
  )
}