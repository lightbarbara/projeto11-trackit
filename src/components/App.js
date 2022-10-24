import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import Cadastro from "../pages/Cadastro"
import Habitos from "../pages/Habitos"
import Historico from "../pages/Historico"
import Hoje from "../pages/Hoje"
import TelaInicial from "../pages/TelaInicial"
import GlobalStyle from './GlobalStyle'

export default function App() {

  const [user, setUser] = useState({
    id: '',
    name: '',
    image: '',
    email: '',
    password: '',
    token: ''
  })

  const [concluidas, setConcluidas] = useState(50)

  return (
    <AppContext.Provider value={{user, setUser, concluidas, setConcluidas}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/habitos' element={<Habitos />} />
          <Route path='/hoje' element={<Hoje />} />
          <Route path='/historico' element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}