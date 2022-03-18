import React from 'react'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import "../styles/terms.css"
import { Link } from 'react-router-dom'
const Terms = () => {
    return (
        <BlackCards>
            <Container>
                <H2>
                    Nuestras condiciones de uso y políticas de privacidad
                </H2>
                <H3>
                    Siempre buscamos ofrecer la mejor experienca a nuestros usuarios y esto incluye el compromiso de tratar tus datos personales de forma segura y con la transparencia que mereces.
                </H3>
                <center>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647608946/proyecto-final/undraw_contract_re_ves9_1_lugo1e.svg" alt="" />
                    <Link to={"/welcomeacc"} style={{ color: "inherit", textDecoration: "none" }}>
                        <P>Al continuar, aceptas los Terminos de uso y la Polìtica De Privacidad de Quantect.</P>
                        <CustomButtonCards>
                            Aceptar y continuar
                        </CustomButtonCards>
                    </Link>
                </center>
            </Container>
        </BlackCards>
    )
}
const P = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 24px;

/* or 200% */
text-align: center;
letter-spacing: -0.3px;

color: #FFFFFF;

`
const Container = styled.div`
margin-top:10%`
export default Terms