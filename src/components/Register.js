import React from 'react'
import { BlackCards, CustomLink, H2, H3 } from './Welcome'
import styled from "styled-components"
import "../styles/blackCards.css"
import { Link } from 'react-router-dom'
import { loginFacebook, loginGoogle } from '../redux/actions/loginAction'
import { useDispatch } from 'react-redux'
import { getAuth } from 'firebase/auth'
import { addUserAsyn } from '../redux/actions/userAction'

const Register = () => {
    const dispatch = useDispatch();

    
    const handleFacebook = () => {
        dispatch(loginFacebook())
        
    }
    const handleGoogle = () => {
        dispatch(loginGoogle())
        
    }
   
    return (
        <BlackCards className='register'>
            <H2 className='H2'>¡Es hora de comenzar tu viaje!</H2>
            <H3>Crea tu cuenta y comienza a transformar tus finanzas</H3>
            <center><RegisterWithContainer>
                <RegisterWith><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647535583/proyecto-final/flat-color-icons_google_vbize0.svg" alt="" />
                    <LoginH2
                        type='button'
                        onClick={handleGoogle}
                    >
                        Continuar con Google
                    </LoginH2>
                </RegisterWith>
                <RegisterWith>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647535583/proyecto-final/logos_facebook_jvo9pb.svg" alt="" />
                    <LoginH2
                        type='button'
                        onClick={handleFacebook}
                    >
                        Continuar con Facebook
                    </LoginH2>
                </RegisterWith>
                <Link to={"/registerAcc"}
                    style={{
                        textDecoration: "none",
                        color: "inherit"
                    }}>
                    <RegisterWith>

                        <LoginH2>
                            Registrarte con tu correo

                        </LoginH2>

                    </RegisterWith>
                </Link>
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
color:#464544;
margin-bottom:0`

export const HR = styled.hr`
opacity:1;
 height: 1px;
    border: none;
    border-top: 1px solid white;
    margin:0;
    margin-bottom:10px;
    color:white;
    background-color:white;
    z-index:2;
    width:100%;
    
`
export const Options = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const H3Ask = styled.h3`
margin:0px;
margin-right:20px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;


letter-spacing: -0.3px;

color: #FFFFFF;`
export default Register