import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import Habito from "../components/Habito"
import Menu from "../components/Menu"
import Topo from "../components/Topo"
import { BASE_URL } from "../constants/urls"
import { AppContext } from "../contexts/AppContext"

export default function Habitos() {

    const { user, setHabitos, habitos } = useContext(AppContext)

    const [novoHabito, setNovoHabito] = useState(false)

    const [days, setDays] = useState([])

    const [form, setForm] = useState({
        name: '',
        days: days
    })
    const [disabled, setDisabled] = useState(false)

    const [deleta, setDeleta] = useState(false)

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => setHabitos(res.data))
            .catch(err => console.log(err.response.data))
    }, [novoHabito, deleta])

    function alteraDias(dia, e) {
        e.preventDefault()
        if (days.includes(dia)) {
            const novoDays = days.filter(d => d !== dia)
            setDays(novoDays)
            setForm({
                ...form,
                days: novoDays
            })
        } else {
            setDays([...days, dia])
            setForm({
                ...form,
                days: [...days, dia]
            })
        }
    }

    function cancelar(e) {
        e.preventDefault()
        setNovoHabito(false)
    }

    function enviarHabito(e) {
        e.preventDefault()
        setDisabled(true)
        axios.post(`${BASE_URL}/habits`, form, config)
            .then(res => {
                setDays([])
                setForm({
                    name: '',
                    days: []
                })
                setNovoHabito(false)
                setDisabled(false)
            })
            .catch(err => {
                alert(err.response.data.details)
                setDisabled(false)
            })
    }
    return (
        <HabitosContainer>
            <Topo />
            <Titulo>
                <p>Meus hábitos</p>
                <div onClick={() => setNovoHabito(true)}>+</div>
            </Titulo>
            {novoHabito ?
                <Form onSubmit={enviarHabito}>
                    <input disabled={disabled} type='text' placeholder='nome do hábito' value={form.name} name='name' required onChange={handleForm} />
                    <div>
                        <Button days={days} disabled={disabled} name={0} onClick={(e) => alteraDias(0, e)}>D</Button>
                        <Button days={days} disabled={disabled} name={1} onClick={(e) => alteraDias(1, e)}>S</Button>
                        <Button days={days} disabled={disabled} name={2} onClick={(e) => alteraDias(2, e)}>T</Button>
                        <Button days={days} disabled={disabled} name={3} onClick={(e) => alteraDias(3, e)}>Q</Button>
                        <Button days={days} disabled={disabled} name={4} onClick={(e) => alteraDias(4, e)}>Q</Button>
                        <Button days={days} disabled={disabled} name={5} onClick={(e) => alteraDias(5, e)}>S</Button>
                        <Button days={days} disabled={disabled} name={6} onClick={(e) => alteraDias(6, e)}>S</Button>
                    </div>
                    <div>
                        <button onClick={cancelar}>Cancelar</button>
                        <button disabled={disabled} type='submit'>{disabled ? <ThreeDots
                            height="10"
                            width="375"
                            radius="9"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        /> : 'Salvar'}</button>
                    </div>
                </Form>
                :
                ''
            }
            {habitos.length > 0 ?
                habitos.map(h => <Habito name={h.name} days={h.days} id={h.id} setDeleta={setDeleta} deleta={deleta} />)
                :
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>}
            <Menu />
        </HabitosContainer>
    )
}

const HabitosContainer = styled.div`
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

&::-webkit-scrollbar {
    display: none;
}

& > p {
    color: #666666;
    font-size: 18px;
    font-weight: 400;
}
`

const Titulo = styled.div`
display: flex;
justify-content: space-between;
color: #126BA5;
width: inherit;
height: 35px;
align-items: center;
padding: 40px 18px;
box-sizing: border-box;

p {
    font-size: 23px;
    font-weight: 400;
}

& > div {
    display: flex;
    background-color: #52B6FF;
    color: white;
    font-size: 27px;
    width: 40px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 400;
    cursor: pointer;
}
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 340px;
height: 180px;
background-color: white;
border-radius: 5px;
padding: 18px;
box-sizing: border-box;

div:nth-child(2) {
    display: flex;
    gap: 4px;
}

div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    width: 170px;
    margin-top: 30px;
    margin-left: 130px;
    font-size: 16px;

    button {
        cursor: pointer;
        width: 84px;
        height: 35px;
    }

    button:nth-child(1) {
        background-color: white;
        border: none;
        color: #52B6FF;
    }

    button:nth-child(2) {
        background-color: #52B6FF;
        border: none;
        color: white;
        border-radius: 5px;
    }
}
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
color: ${props => props.days.includes(props.name) ? 'white' : '#DBDBDB'};
background-color: ${props => props.days.includes(props.name) ? '#CFCFCF' : 'white'};
border: 1px solid #D4D4D4;
border-radius: 5px;
font-size: 20px;
cursor: pointer;
`