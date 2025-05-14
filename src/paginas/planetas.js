import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';

export default function PaginaPlanetas() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography 
          variant="h4" 
          component="h2"
          sx={
            { textAlign: "center",
              marginTop: 2
            }}>
          Planetas do sistema solar
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6} sm={4} md={2}>
            <Card>
              <Link to="/planetas/test">
                <CardActionArea>
                    <img src="" alt="" width="100%"/>
                    <Typography variant="h5" component="h3">
                      Terra
                    </Typography>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </>
  )
}