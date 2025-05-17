import { Container, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShareIcon from "@mui/icons-material/Share";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ComponenteLayoutPadrao from "../componetes/layout/padrao";

import ApiPlanetas from "../api/planetas";

export default function PaginaPlaneta() {
  const parametros = useParams();
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [msg, setMsg] = useState(null);
  const [planeta, setPlaneta] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let respostaApi = await ApiPlanetas.obterUnicoPorSlug(parametros.slug);
        if (!respostaApi[0]) {
          throw new Error("Planeta não encontrado!");
        }

        setPlaneta(respostaApi?.[0]);
        setCarregando(false);
      } catch (error) {
        setErro({
          subtitulo: "Erro ao carregar os planetas",
          descricao: String(error),
        });
        setMsg({
          subtitulo: "Planeta não encontrado!",
        });
        setCarregando(false);
      }
    })();
  }, [parametros.slug]);

  async function ClickCompartilhar() {
    // let resImg = await fetch(planeta?.imgUrl);
    let resImg = await fetch(planeta?.imgUrl);
    let contentType = resImg.headers.get("content-type");
    let blob = await resImg.blob();
    let binaryFile = new File([blob], `${planeta?.nome}-${planeta?.img}`, {
      type: contentType,
    });

    window.navigator.share({
      url: `${window.location.href}`,
      text: `Explore o planeta ${planeta?.nome} e descubra suas peculiaridades!`,
      title: `Planeta ${planeta?.nome}`,
      files: [binaryFile],
    });
  }

  return (
    <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
      <Container maxWidth="xl" className="planetaContainer">
        <Link to="/planetas">
          {/* <Button variant="contained" color="primary" startIcon={<ArrowBackIosIcon/>}>Voltar</Button> */}
          <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
            Voltar
          </Button>
        </Link>
        <img
          className="animacaoEfeitoGirar"
          src={planeta?.imgUrl}
          alt={planeta?.descricao}
          width="20%"
        />
        <Typography
          className="imgTexto"
          variant="h5"
          component="h1"
          textAlign="center"
          fontSize="4rem"
          mt={2}
          mb={2}
        >
          {planeta?.nome}
        </Typography>
        <Typography variant="body1" component="p">
          {planeta?.descrição}
        </Typography>

        <Button
          className="btnCompartilharPlaneta"
          variant="contained"
          color="primary"
          endIcon={<ShareIcon />}
          onClick={() => {
            ClickCompartilhar();
          }}
        >
          Compartilhar
        </Button>
      </Container>
    </ComponenteLayoutPadrao>
  );
}
