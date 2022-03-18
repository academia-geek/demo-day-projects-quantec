import React from 'react'
import { BlackCards, CustomLink, H2, H3 } from './Welcome'
import styled from "styled-components"
import "../styles/blackCards.css"
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <BlackCards className='register'>
            <H2 className='H2'>¡Es hora de comenzar tu viaje!</H2>
            <H3>Crea tu cuenta y comienza a transformar tus finanzas</H3>
            <center><RegisterWithContainer>
                <RegisterWith><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647535583/proyecto-final/flat-color-icons_google_vbize0.svg" alt="" />
                    <LoginH2>
                        Continuar con Google
                    </LoginH2>
                </RegisterWith>
                <RegisterWith>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647535583/proyecto-final/logos_facebook_jvo9pb.svg" alt="" />
                    <LoginH2>
                        Continuar con Facebook
                    </LoginH2>
                </RegisterWith>
                <RegisterWith>

                    <LoginH2>
                        <Link to={"/registerAcc"}
                            style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}>
                            Registrarte con tu correo</Link>
                    </LoginH2>
                </RegisterWith>
            </RegisterWithContainer></center>
            <HR />
            <Options>
                <H3Ask className="h3">¿Ya tienes una cuenta?</H3Ask>
                <CustomLink to={"/login"} >Inicia sesion</CustomLink>

            </Options>

        </BlackCards>
    )
}
const RegisterWithContainer = styled.div`
margin-top:10%
`
export const RegisterWith = styled.button`
border:none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
width: 327px;
height: 44px;
background: #FFFFFF;
border-radius: 30px;
margin-bottom:15%;
`
export const LoginH2 = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color:#464544;`
export const HR = styled.hr`
 height: 0px;
    border: none;
    border-top: 1px solid white;
    opacity:1;
    margin:0;
    margin-bottom:10px;
    
`
export const Options = styled.div`
display: flex;
justify-content: center;

`
export const H3Ask = styled.h3`
margin:0px;
margin-right:0;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;


letter-spacing: -0.3px;

color: #FFFFFF;`
export default Register