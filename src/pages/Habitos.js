import { useContext } from "react"
import styled from "styled-components"
import Menu from "../components/Menu"
import Topo from "../components/Topo"
import { AppContext } from "../contexts/AppContext"

export default function Habitos() {

    const { user } = useContext(AppContext)

    return (
        <HabitosContainer>
            <Topo />
            <Menu />
        </HabitosContainer>
    )
}

const HabitosContainer = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 100vh;
align-items: center;
gap: 30px;
background-color: white
`