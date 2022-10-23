import { useContext } from "react"
import styled from "styled-components"
import Menu from "../components/Menu"
import Topo from "../components/Topo"
import { AppContext } from "../contexts/AppContext"

export default function Hoje() {

    const { user } = useContext(AppContext)

    return (
        <HojeContainer>
            <Topo />
            <Menu />
        </HojeContainer>
    )
}

const HojeContainer = styled.div`

`