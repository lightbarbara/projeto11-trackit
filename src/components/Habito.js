import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import lixo from '../assets/lixo.png'
import { BASE_URL } from "../constants/urls"
import { AppContext } from "../contexts/AppContext"

export default function Habito({ name, days, id, setDeleta, deleta }) {

    const { user, setHabitos, habitos } = useContext(AppContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function deletarHabito() {

        const choice = window.confirm(
            "Você deseja apagar o hábito?"
        )
        
        if (choice) {
            axios.delete(`${BASE_URL}/habits/${id}`, config)
            .then(res => {
                const newHabitos = habitos.filter(h => h !== id)
                setHabitos(newHabitos)
                setDeleta(!deleta)
            })
            .catch(err => alert(err.response.data.message))
        }
    }

    return (
        <HabitoContainer>
            <div>
                <p>{name}</p>
                <img src={lixo} alt='lixeira' onClick={deletarHabito} />
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
border-radius: 5px;

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
        cursor: pointer;
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