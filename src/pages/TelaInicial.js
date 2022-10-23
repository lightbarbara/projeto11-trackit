import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from '../assets/logo.png'
import { BASE_URL } from "../constants/urls"
import { ThreeDots } from 'react-loader-spinner'
import { AppContext } from "../contexts/AppContext"

export default function TelaInicial() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [disabled, setDisabled] = useState(false)

    const { setUser } = useContext(AppContext)

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function login(e) {
        e.preventDefault()
        setDisabled(true)
        axios.post(`${BASE_URL}/auth/login`, form)
            .then(res => {
                setUser(res.data)
                console.log(res.data)
                navigate('/hoje')
            })
            .catch(err => {
                alert(err.response.data.details)
                setDisabled(false)
            })
    }

    return (
        <TelaInicialContainer>
            <img src={logo} alt='logo' />
            <Form onSubmit={login}>
                <input disabled={disabled} type='email' placeholder='email' value={form.email} name='email' required onChange={handleForm} />
                <input disabled={disabled} type='password' placeholder='senha' value={form.password} name='password' required onChange={handleForm} />
                <button disabled={disabled} type='submit'>{disabled ? <ThreeDots
                    height="10"
                    width="375"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : 'Entrar'}</button>
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