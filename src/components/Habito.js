import styled from "styled-components"
import lixo from '../assets/lixo.png'

export default function Habito({ name, days }) {
    return (
        <HabitoContainer>
            <p>{name}</p>
            <img src={lixo} alt='lixeira' />
            <div>D</div>
            <div>S</div>
            <div>T</div>
            <div>Q</div>
            <div>Q</div>
            <div>S</div>
            <div>S</div>
        </HabitoContainer>
    )
}

const HabitoContainer = styled.div`

`