import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from '../assets/logo.png'
import { BASE_URL } from "../constants/urls"

export default function Cadastro() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function cadastro(e) {
        e.preventDefault()
        axios.post(`${BASE_URL}/auth/sign-up`, form)
            .then(res => navigate('/'))
            .catch(err => console.log(err.response.data))
    }

    return (
        <CadastroContainer>
            <img src={logo} alt='logo' />
            <Form onSubmit={cadastro}>
                <input type='email' placeholder='email' value={form.email} name='email' required onChange={handleForm} />
                <input type='password' placeholder='senha' value={form.password} name='password' required onChange={handleForm} />
                <input type='text' placeholder='nome' value={form.name} name='name' required onChange={handleForm} />
                <input type='url' placeholder='foto' value={form.image} name='image' required onChange={handleForm} />
                <button type='submit'>Cadastrar</button>
            </Form>
            <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
        </CadastroContainer>
    )
}

const CadastroContainer = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 100vh;
justify-content: center;
align-items: center;
gap: 30px;
background-color: white;
`

const Form = styled.form`
display: flex;
flex-direction: column
`