import React from 'react'
import { H3Ask, HR, LoginH2, Options, RegisterWith } from './Register'
import { RegisterForm } from './RegisterAccount'
import { BlackCards, CustomButtonCards, CustomLink, H2 } from './Welcome'
import "../styles/login.css"
import styled from "styled-components"
const Login = () => {
    return (
        <BlackCards className="login">
            <H2 className="welcome">Bienvenido de nuevo</H2>
            <RegisterForm className="form">
                <InputLogin type="email" placeholder='correo electrónico' />

                <InputLogin type="password" placeholder="contraseña" />
            </RegisterForm>
            <center>
                <CustomButtonCards className="continue">
                    Continuar
                </CustomButtonCards>
                <RegisterWith>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647535583/proyecto-final/flat-color-icons_google_vbize0.svg" alt="" />
                    <LoginH2>
                        Continuar con Google
                    </LoginH2>
                </RegisterWith>
                <RegisterWith>
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