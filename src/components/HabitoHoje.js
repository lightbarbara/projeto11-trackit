import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import check from '../assets/check.png'
import { BASE_URL } from "../constants/urls"
import { AppContext } from "../contexts/AppContext"

export default function HabitoHoje({ name, done, id, currentSequence, highestSequence, diaAtualizado, setDiaAtualizado }) {

    const { user, concluidas, setConcluidas } = useContext(AppContext)

    const [feito, setFeito] = useState(done)

    const [feitoCheck, setFeitoCheck] = useState(done)

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function modificarStatus() {
        if (feito) {
            marcarHabitoDesfeito()
        } else {
            marcarHabitoFeito()
        }
    }

    function marcarHabitoFeito() {
        axios.post(`${BASE_URL}/habits/${id}/check`, {}, config)
            .then(res => {
                setFeitoCheck(true)
                setFeito(true)
                setConcluidas([...concluidas, id])
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }

    function marcarHabitoDesfeito() {
        axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config)
            .then(res => {
                setFeitoCheck(false)
                setFeito(false)
                const newConcluidas = concluidas.filter(c => c !== id)
                setConcluidas(newConcluidas)
            })
            .catch(err => console.log(err.response.data))
    }

    return (
        <HabitoHojeContainer>
            <div>
                <p>{name}</p>
                <p>Sequência atual: <TextSequenciaAtual done={done}>{`${currentSequence} dias`}</TextSequenciaAtual></p>
                <p>Seu recorde: <TextMaiorSequencia currentSequence={currentSequence} highestSequence={highestSequence}>{`${highestSequence} dias`}</TextMaiorSequencia></p>
            </div>
            <Check feitoCheck={feitoCheck} onClick={() => modificarStatus()} >
                <img src={check} alt='check' />
            </Check>
        </HabitoHojeContainer>
    )
}

const HabitoHojeContainer = styled.div`
display: flex;
justify-content: space-between;
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
    padding: 0 5px;
    flex-direction: column;
    gap: 3px;

    & > p {
        font-size: 13px;
        color: #666666;
    }

    p:nth-child(1) {
        margin-top: 5px;
        font-size: 20px;
        margin-bottom: 10px;
    }
}
`

const Check = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background-color: ${props => props.feitoCheck ? '#8FC549' : '#E7E7E7'};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    cursor: pointer;

    img {
        width: 35px;
        height: 28px;
    }
`

const TextSequenciaAtual = styled.span`
color: ${props => props.done ? '#8FC549' : '#666666'};
font-size: 13px;
`

const TextMaiorSequencia = styled.span`
color: ${props => props.currentSequence >= props.highestSequence ? '#8FC549' : '#666666'};
font-size: 13px;
`