import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from '../assets/logo.png'
import { BASE_URL } from "../constants/urls"

export default function TelaInicial() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function login(e) {
        e.preventDefault()
        axios.post(`${BASE_URL}/auth/login`, form)
            .then(res => navigate('/habitos'))
            .catch(err => console.log(err.response.data))
    }

    return (
        <TelaInicialContainer>
            <img src={logo} alt='logo' />
            <Form onSubmit={login}>
                <input type='email' placeholder='email' value={form.email} name='email' required onChange={handleForm} />
                <input type='password' placeholder='senha' value={form.password} name='password' required onChange={handleForm} />
                <button type='submit'>Entrar</button>
            </Form>
            <Link to='/cadastro'><p>Não tem uma conta? Cadastre-se!</p></Link>
        </TelaInicialContainer>
    )
}

const TelaInicialContainer = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 100vh;
justify-content: center;
align-items: center;
gap: 30px;
background-color: white
`

const Form = styled.form`
display: flex;
flex-direction: column
`