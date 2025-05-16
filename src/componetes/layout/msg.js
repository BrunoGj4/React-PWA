import { 
  Grid, 
  Typography,
  Button,
 } from "@mui/material";

 import {
  Cached,
  Home,
 } from "@mui/icons-material";

 import { Stack } from "@mui/system";

export default function ComponenteLayoutMsg(props) {
  return (
    <>
      <Grid container heidth="100vh">
        <Grid item xs={11} sm={8} md={6} lg={5} xl={4} margin="auto">
          <Stack direction="column" spacing={2} mt={2} mb={2}>
            {props?.icone}  
            <Typography variant="h4" component="h1" textAlign="center">{props?.titulo}</Typography>
            <Typography variant="subtitile1" component="p" textAlign="center">{props?.subtitulo}</Typography>
            <Typography variant="body1" component="p" textAlign="center">{props?.descricao}</Typography>
            {props?.children}

            {props?.btnTentarNovamente === true && (
              <Button variant="outlined" startIcon={<Cached />} onClick={props?.onClick(() => {
                window.location.reload();
              })}>
                Tentar Novamente
              </Button>
            )} 
            
            {props?.btnInicio === true && (
              <Button variant="outlined" startIcon={<Home />} onClick={props?.onClick(() => {
                window.location.href = "/";
              })}>
                Voltar ao início
              </Button>
            )} 
          </Stack>
        </Grid>
      </Grid>
    </>
  );

}