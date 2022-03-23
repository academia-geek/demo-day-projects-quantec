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
            <RegisterForm style={{ marginTop: '-35px' }}>
                <H3>Asigna la contraseña para ingresar a tu cuenta de Quantect</H3>

                <TypePassword type="password" placeholder='Contraseña' />

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
export const TypePassword = styled.input``
export default Password