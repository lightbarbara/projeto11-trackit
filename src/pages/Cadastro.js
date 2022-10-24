import axios from "axios"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
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

    const [disabled, setDisabled] = useState(false)

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function cadastro(e) {
        e.preventDefault()
        setDisabled(true)
        axios.post(`${BASE_URL}/auth/sign-up`, form)
            .then(res => navigate('/'))
            .catch(err => {
                alert(err.response.data.message)
                setDisabled(false)
            })
    }

    return (
        <CadastroContainer>
            <img src={logo} alt='logo' />
            <Form onSubmit={cadastro}>
                <input disabled={disabled} type='email' placeholder='email' value={form.email} name='email' required onChange={handleForm} />
                <input disabled={disabled} type='password' placeholder='senha' value={form.password} name='password' required onChange={handleForm} />
                <input disabled={disabled} type='text' placeholder='nome' value={form.name} name='name' required onChange={handleForm} />
                <input disabled={disabled} type='url' placeholder='foto' value={form.image} name='image' required onChange={handleForm} />
                <button disabled={disabled} type='submit'>{disabled ? <ThreeDots
                    height="10"
                    width="375"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : 'Cadastrar'}</button>
            </Form>
            <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
        </CadastroContainer>
    )
}

const CadastroContainer = styled.div`
display: flex;
margin: 0 auto;
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