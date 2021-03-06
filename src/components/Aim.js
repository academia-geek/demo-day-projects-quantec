import React from 'react'
import "../styles/blackCards.css"
import { BlackCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { ImgPlusAimType } from './PlusAimType'
const Aim = () => {
    return (
        <BlackCards>
            <CustomLink to={"/welcome"}>
                <ImgPlusAimType s
                    rc="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg"
                    alt=""
                    className="back" />
            </CustomLink>
            <AimContainer>
                <H2>
                    ¿Cuál es tu principal objetivo?</H2>
                <H3>
                    ¿Qué te trajo a Quantect? Administrar tus finanzas es mucho más fácil con un objetivo
                    en mente.</H3>
            </AimContainer>
            <center>
                <CustomLink to={"/debts"}>
                    <AimType className="AimType">
                        <ImgPlusAimType
                            src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647529371/proyecto-final/money1_ioqscu.svg"
                            alt=""
                            height={38}
                            width={60} />
                        <H3>
                            Salir de una deuda
                        </H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/savemoney"}>
                    <AimType>
                        <ImgPlusAimType
                            src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647529371/proyecto-final/Pig_kpecmp.svg"
                            alt=""
                            height={49.45}
                            width={60} />
                        <H3>
                            Comienza a ahorrar
                        </H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/invest"}>
                    <AimType>
                        <ImgPlusAimType
                            src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647529371/proyecto-final/ScreenChart_cfj0j4.svg"
                            alt=""
                            height={49.77}
                            width={60} />
                        <H3>
                            Comienza a invertir
                        </H3>
                    </AimType>
                </CustomLink>
            </center>
        </BlackCards>
    )
}
export const AimContainer = styled.div`
margin-top:40px
`
export const AimType = styled.div`
background: rgba(255, 255, 255, 0.4);
border-radius: 10px;
height:70px;
width:327px;
display:flex;
flex: none;
order: 0;
flex-grow: 0;
margin: 32px 0px;
margin-left:0%;
align-items: center;
`
export const CustomLink = styled(Link)`
text-decoration:none;
color: inherit;
`

export default Aim