import { ThemeProvider } from "@mui/material/styles"; // Corrected import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import tema from "./Tema";
import PaginaInicio from "./paginas/inicio";
import PaginaPlanetas from "./paginas/planetas";

export default function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< PaginaInicio />} />
            <Route path="/planetas" element={< PaginaPlanetas />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
