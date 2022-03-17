import React from 'react'
import { CustomLink } from './Aim'
import { BlackCards, H2, H3 } from './Welcome'
import styled from "styled-components"
const RegisterAccount = () => {
    return (
        <BlackCards className={"registerAccount"}>
            <CustomLink to={"/aim"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <H2>Bienvenido</H2>
            <H3>Completa la siguiente información para poder conocerte y empezar a trabajar en tu plan financiero.</H3>
            <RegisterForm><H3>Soy&nbsp;
                <Name type="text" placeholder="escribe tu nombre" />
                &nbsp;, tengo <br />
                <Age type="list" placeholder="Edad" />
                &nbsp; años<br /> y mi correo electrónico es:
                <Mail type="email" placeholder="Correo electrónico" />
            </H3>
            </RegisterForm>
        </BlackCards>
    )
}
const RegisterForm = styled.div`
display:flex;
flex-direction:column;
input{
    border:none;
    border-bottom:1px  solid gray;
    background-color:#1C1C1E;
    ::placeholder {
        color:rgba(255,255,255,0.4)
    }
}
`
const Name = styled.input`

width:130px`
const Age = styled.input`
width:50px`
const Mail = styled.input``
export default RegisterAccount