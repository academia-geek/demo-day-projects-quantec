import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from './DatePicker'
import styled from "styled-components"
import { RegisterForm } from './RegisterAccount'
import { BlackCards, CustomButtonCards, CustomLink, H2, H3 } from './Welcome'

const YourCustomAim = () => {
    return (
        <BlackCards className="password" >
            <CustomLink to={"/registerAcc"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <RegisterForm style={{ marginTop: '35px', marginLeft: "0" }}>
                <H2 >Contraseña</H2>
                <H3>Asigna la contraseña para ingresar a tu cuenta de Quantect</H3>
                <H3>La contraseña de mi cuenta será</H3>

                <InputAim type="password" placeholder='Contraseña' />
                <H3>La contraseña de mi cuenta será</H3>

                <InputAim type="date" placeholder='Contraseña' />
                <H3>La contraseña de mi cuenta será</H3>

                <InputAim type="date" placeholder='Contraseña' />
                <H3>La contraseña de mi cuenta será</H3>


            </RegisterForm>
            <Link to={"/loggedaims"} style={{ color: "inherit", textDecoration: "none" }}>
                <center>
                    <CustomButtonCards>
                        Continuar
                    </CustomButtonCards>
                </center>
            </Link>
        </BlackCards>
    )
}
const InputAim = styled.input`
margin-left: 5%;
`
export default YourCustomAim