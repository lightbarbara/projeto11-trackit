import styled from "styled-components"
import lixo from '../assets/lixo.png'

export default function Habito({ name, days }) {
    return (
        <HabitoContainer days={days}>
            <div>
                <p>{name}</p>
                <img src={lixo} alt='lixeira' />
            </div>
            <div>
                <Dia days={days} nome={0}>D</Dia>
                <Dia days={days} nome={1}>S</Dia>
                <Dia days={days} nome={2}>T</Dia>
                <Dia days={days} nome={3}>Q</Dia>
                <Dia days={days} nome={4}>Q</Dia>
                <Dia days={days} nome={5}>S</Dia>
                <Dia days={days} nome={6}>S</Dia>
            </div>
        </HabitoContainer>
    )
}

const HabitoContainer = styled.div`
display: flex;
flex-direction: column;
width: 340px;
height: 91px;
margin: 0 auto;
background-color: white;
padding: 10px;
box-sizing: border-box;
gap: 10px;

& > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;

    p {
        margin-top: 5px;
        color: #666666;
        font-size: 20px;
    }

    img {
        height: 15px;
        width: 13px;
    }
}

& > div:nth-child(2) {
    display: flex;
    padding: 5px;
    gap: 4px;
}
`

const Dia = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
color: ${props => props.days.includes(props.nome) ? 'white' : '#DBDBDB'};
background-color: ${props => props.days.includes(props.nome) ? '#CFCFCF' : 'white'};
border: 1px solid #D4D4D4;
border-radius: 5px;
font-size: 20px;
`