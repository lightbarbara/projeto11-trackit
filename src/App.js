import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Cadastro from "./pages/Cadastro"
import Habitos from "./pages/Habitos"
import Historico from "./pages/Historico"
import Hoje from "./pages/Hoje"
import TelaInicial from "./pages/TelaInicial"

export default function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/habitos' element={<Habitos />} />
          <Route path='/hoje' element={<Hoje />} />
          <Route path='/historico' element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

const AppContainer = styled.div`

`