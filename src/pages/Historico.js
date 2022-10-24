import styled from "styled-components"
import Menu from "../components/Menu"
import Topo from "../components/Topo"

export default function Historico() {

    return (
        <HistoricoContainer>
            <Topo />
            <Titulo>
                <p>Histórico</p>
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>
            </Titulo>
            <Menu />
        </HistoricoContainer>
    )
}

const HistoricoContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
width: 375px;
height: 100vh;
align-items: center;
gap: 20px;
background-color: #F2F2F2;
position: relative;
padding: 70px 18px;
padding-bottom: 110px;
box-sizing: border-box;
`

const Titulo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
color: #126BA5;
width: inherit;
height: 35px;
padding: 40px 18px;
box-sizing: border-box;
gap: 20px;

p:nth-child(1) {
    font-size: 23px;
    font-weight: 400;
}

p:nth-child(2) {
    font-weight: 400;
    color: #666666;
}
`