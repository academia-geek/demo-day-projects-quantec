import React from 'react'
import { RegisterForm } from './RegisterAccount'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { CustomLink } from './Aim'
import "../styles/password.css"
import { Link } from 'react-router-dom'
const Password = () => {
    return (
        <BlackCards className="password" >
            <CustomLink to={"/registerAcc"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <RegisterForm style={{ marginTop: '35px' }}>
                <H2>Contraseña</H2>
                <H3>Asigna la contraseña para ingresar a tu cuenta de Quantect</H3>
                <H3>La contraseña de mi cuenta será</H3>
                <center><TypePassword type="password" placeholder='Contraseña' /></center>
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
const TypePassword = styled.input``
export default Password