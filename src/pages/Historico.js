import { useContext } from "react"
import styled from "styled-components"
import Menu from "../components/Menu"
import Topo from "../components/Topo"
import { AppContext } from "../contexts/AppContext"

export default function Historico() {

    const { user } = useContext(AppContext)

    return (
        <HistoricoContainer>
            <Topo />
            <Menu />
        </HistoricoContainer>
    )
}

const HistoricoContainer = styled.div`

`