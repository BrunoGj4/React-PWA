import ComponenteLayoutMsg from './msg';
import { CircularProgress } from '@mui/material';
import { Error } from '@mui/icons-material';
import { PriorityHigh } from '@mui/icons-material';

export default function ComponenteLayoutPadrao(props) {
  return (
    <>
      {props?.carregando === true ? (
        <>
          <ComponenteLayoutMsg icone={<CircularProgress size={100} />} titulo={"Carregando..."} color="white"/>
        </>
      ) : (
        <>
          {props?.erro ? (
            <>
              <ComponenteLayoutMsg color="white" icone={<Error fontSize="large" />} titulo={"Erro"} subtitulo={props?.erro?.subtitulo} descricao={props?.erro?.descricao} btnTentarNovamente={true} />
            </>
          ) : (
            <>{props?.msg ? (<> 
              <ComponenteLayoutMsg color="white" {...props?.msg} icone={props?.msg?.icone || <PriorityHigh fontSize="large" />} />
              </>) : (<>
              {props.children}
              </>)}
            </>)}
        </>)}
    </>);
}
