import React from 'react'
import styled from "styled-components"
//tiempo para encender tus finanzas
//en construccion
import "../styles/welcome.css"
import "../styles/blackCards.css"
import { Link } from "react-router-dom"
const Welcome = () => {
    return (
        <BlackCards><H2 className="WelcomeH2">Tiempo para encender
            tus finanzas</H2>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647524600/proyecto-final/undraw_exploring_re_grb8_1_sghadm.svg" alt="" />
            <H3>
                El camino está por delante. Al estar aquí, ya has dado  el mayor paso hacia tu transformación financiera y nosotros te guiaremos en el proceso.
            </H3>

            <center>
                <Link to={"/aim"}> <CustomButtonCards>
                    Comenzar
                </CustomButtonCards></Link>
                <br />
                <CustomLink to={"/login"}>Ya estoy registrado</CustomLink>
            </center>
        </BlackCards>
    )
}
export const BlackCards = styled.div`
background-color:#1C1C1E;
`
export const H2 = styled.h2`

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

letter-spacing: -0.3px;
color:white;
margin-top:10%`


export const H3 = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
margin:0;
letter-spacing: -0.3px;
padding:25px;

color: #FFFFFF;`

export const CustomButtonCards = styled.button`
margin-top: 5%;
margin-bottom: 5%;
width: 327px;
height: 44px;



background: #3C1280;
border-radius: 30px;
border:none;
color: white;
font-weight:900`

export const CustomLink = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;


/* identical to box height, or 150% */
letter-spacing: -0.3px;

color: #AA75FF;
`

export default Welcome