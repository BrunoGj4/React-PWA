import { 
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea
} from '@mui/material';

import { Link } from 'react-router-dom';

export default function PaginaPlanetas() {
  return (
    <>
      <Container maxWidth="xl" mt={2} mb={2}>
        <Typography 
          variant="h4" 
          component="h2"
          sx={
            { textAlign: "center",
              margintop: 3,
            }}>
          Planetas do sistema solar
        </Typography>
        <Grid container spacing={2} mt={2}>
          {/* XS = 2 item */}
          {/* SM = 3 item */}
          {/* MD = 4 item */}
          {/* LG = 6 item */}
          {/* XL = 6 item */}
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card className="cardVidro" >
              <Link to="/planetas/test">
                <CardActionArea >
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