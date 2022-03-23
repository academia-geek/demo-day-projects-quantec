import React from 'react'
import { CustomLink } from './Aim'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { Link } from 'react-router-dom'
const RegisterAccount = () => {
    return (
        <BlackCards className={"registerAccount"}>
            <CustomLink to={"/register"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <H2>Bienvenido</H2>
            <H3>Completa la siguiente información para poder conocerte y empezar a trabajar en tu plan financiero.</H3>
            <RegisterForm>
                <H3>
                    Prefiero que me llamen:
                    <Name
                        type="text"
                        placeholder="Tu nombre" />
                </H3>
                <H3>
                    Mi correo electrónico es:
                    <Mail
                        type="email"
                        placeholder="Correo electrónico" />
                </H3>
            </RegisterForm>

            <RegisterForm style={{ marginTop: '-35px' }}>
                <H3>Asigna la contraseña para ingresar a tu cuenta de Quantect</H3>

                <input type="password" placeholder='Contraseña' />

            </RegisterForm>
            <Link to={"/terms"} style={{ color: "inherit", textDecoration: "none" }}>
                <center>
                    <CustomButtonCards>
                        Continuar
                    </CustomButtonCards>
                </center>
            </Link>
        </BlackCards>
    )
}
export const RegisterForm = styled.div`
display:flex;
flex-direction:column;
margin-left:8%;



input{
    border:none;
    margin-bottom:5%;
    border-bottom:1px  solid gray;
    background-color:#1C1C1E;
    color:rgba(255,255,255,0.8);
    text-align:left;
    ::placeholder {
        color:rgba(255,255,255,0.4)
    }
}
h3{
    margin:0;
    padding-bottom:5%;
    justify-content: center;
    line-height: 2;
    text-align: left
}
`
const Name = styled.input`

width:160px;
padding-bottom:0;
margin-bottom:0;`

const Age = styled.input`
width:50px`
const Mail = styled.input``
export default RegisterAccount