import React from 'react'
import { H3Ask, HR, LoginH2, Options, RegisterWith } from './Register'
import { RegisterForm } from './RegisterAccount'
import { BlackCards, CustomButtonCards, CustomLink, H2 } from './Welcome'
import "../styles/login.css"
import { useDispatch } from 'react-redux'
import { loginAsyn, loginFacebook, loginGoogle } from '../redux/actions/loginAction'
import { useForm } from '../hooks/useForm'
import styled from "styled-components"


const Login = () => {
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsyn(email, password))
        reset();
    }

    const handleFacebook = () => {
        dispatch(loginFacebook())
    }
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }
    return (
        <BlackCards className="login">
            <H2 className="welcome">Bienvenido de nuevo</H2>
            <center>
                <RegisterForm className="form"
                    onSubmit={handleSubmit}
                >
                    <InputLogin
                        type="email"
                        placeholder='correo electrónico'
                        name='email'
                        onChange={handleInputChange}
                    />

                    <InputLogin
                        type="password"
                        placeholder="contraseña"
                        name='password'
                        onChange={handleInputChange}
                    />
                    <center>
                        <CustomButtonCards className="continue" type='submit'>
                            Continuar
                        </CustomButtonCards>
                    </center>

                </RegisterForm>
            </center>
            <center>

                <RegisterWith
                    type='button'
                    onClick={handleGoogle}
                >
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647535583/proyecto-final/flat-color-icons_google_vbize0.svg" alt="" />
                    <LoginH2>
                        Continuar con Google
                    </LoginH2>
                </RegisterWith>
                <RegisterWith
                    type='button'
                    onClick={handleFacebook}
                >
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647535583/proyecto-final/logos_facebook_jvo9pb.svg" alt="" />
                    <LoginH2>
                        Continuar con Facebook
                    </LoginH2>


                </RegisterWith></center>
            <HR />
            <Options>

                <H3Ask className="h3">
                    ¿No tienes una cuenta?
                </H3Ask>
                <CustomLink to={"/registerAcc"}
                    style={{ textDecoration: "none" }}>
                    Registrate
                </CustomLink>

            </Options>
        </BlackCards>
    )
}
const InputLogin = styled.input`
width:80%;
margin-left:10%;
margin-bottom:30px !important;`
export default Login