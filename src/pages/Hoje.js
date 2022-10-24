import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import HabitoHoje from "../components/HabitoHoje"
import Menu from "../components/Menu"
import Topo from "../components/Topo"
import { BASE_URL } from "../constants/urls"
import { AppContext } from "../contexts/AppContext"

export default function Hoje() {

    const { user, hoje, setHoje, setConcluidas, concluidas } = useContext(AppContext)

    let dia = new Date().getDay()
    if (dia === 7) {
        dia = 'Domingo'
    } else if (dia === 1) {
        dia = 'Segunda'
    } else if (dia === 2) {
        dia = 'Terça'
    } else if (dia === 3) {
        dia = 'Quarta'
    } else if (dia === 4) {
        dia = 'Quinta'
    } else if (dia === 5) {
        dia = 'Sexta'
    } else if (dia === 6) {
        dia = 'Sábado'
    }
    const today = new Date().toLocaleDateString('pt-BR').slice(0, 5)
    const diaCompleto = `${dia}, ${today}`

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                setHoje(res.data)
                setConcluidas(res.data.filter(r => r.done))
            })
            .catch(err => console.log(err.response.data))
    }, [])

    return (
        <HojeContainer>
            <Topo />
            <Titulo concluidas={concluidas}>
                <p>{diaCompleto}</p>
                {concluidas.length > 0 ?
                    <p>
                        {`${(concluidas.length / hoje.length).toFixed(2) * 100}% dos hábitos concluídos`}
                    </p>
                    :
                    <p>
                        Nenhum hábito concluído ainda
                    </p>
                }
            </Titulo>
            <div>
                {hoje.length > 0 ? hoje.map(h => <HabitoHoje name={h.name} done={h.done} id={h.id} currentSequence={h.currentSequence} highestSequence={h.highestSequence} />)
                    :
                    ''}
            </div>
            <Menu />
        </HojeContainer>
    )
}

const HojeContainer = styled.div`
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
overflow: auto;

div:nth-child(3) {
    height: 60px;
    margin-top: 30px;
    gap: 20px;
}
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
    color: ${props => props.concluidas.length > 0 ? '#8FC549' : '#666666'};
}
`