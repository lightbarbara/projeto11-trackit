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
display: flex;
margin: 0 auto;
flex-direction: column;
width: 375px;
height: 100vh;
align-items: center;
gap: 30px;
background-color: #F2F2F2;
position: relative;
`