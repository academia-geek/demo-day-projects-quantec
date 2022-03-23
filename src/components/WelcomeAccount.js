import React from 'react'
import { Link } from 'react-router-dom'

import { BlackCards, CustomButtonCards, CustomLink, H2, H3 } from './Welcome'
import styled from "styled-components"
const WelcomeAccount = () => {
    return (
        <BlackCards>
            <H2>
                @Nombre
            </H2>
            <H3>
                ¡Bienvenid@ a Quantec!<br />
                <br />
                Haz un recorrido rápido para aprender lo que puedes hacer con Quantect. Empecemos con lo básico ¿vale?
            </H3>

            <center><Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647612598/proyecto-final/undraw_celebration_re_kc9k_1_1_obgmpo.svg" alt="" />
                <Link to={"/accdesc"}>
                    <CustomButtonCards>
                        Excelente, vamos
                    </CustomButtonCards>
                </Link>
                <br />
                <CustomLink to={"/"}>No gracias</CustomLink></center>

        </BlackCards>
    )
}

export const Img = styled.img`
margin-bottom:10%`
export default WelcomeAccount