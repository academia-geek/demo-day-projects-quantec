import React from 'react'
import { AimContainer, AimType, CustomLink } from './Aim'
import { BlackCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { H4 } from './AddNewAcc'
const PlusAimType = () => {
    return (
        <BlackCards>
            <CustomLink to={"/welcome"}>
                <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" />
            </CustomLink>
            <AimContainer>
                <H2>¡Hola, </H2> <H2>@Nombre!</H2>
                <H3>¿Cuál de los siguientes objetivos quieres alcanzar?</H3>
                <H4>Para comenzar selecciona una opción:</H4>
            </AimContainer>
            <center>
                <CustomLink to={"/yourcustomaim"}>
                    <AimType className="AimType">
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647955866/proyecto-final/home_af9yjy.svg" alt="" height={38} width={60} />
                        <H3>Finca raíz</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647955865/proyecto-final/grade_qs9k9s.svg" alt="" height={49.45} width={60} />
                        <H3>Educación</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647529371/proyecto-final/ScreenChart_cfj0j4.svg" alt="" height={49.77} width={60} />
                        <H3>inversión</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647955865/proyecto-final/Pig_mjwp2s.svg" alt="" height={49.77} width={60} />
                        <H3>Retiro</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647955865/proyecto-final/Happy_ael4uy.svg" alt="" height={49.77} width={60} />
                        <H3>Bienestar</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647529371/proyecto-final/ScreenChart_cfj0j4.svg" alt="" height={49.77} width={60} />
                        <H3>Otro</H3>
                    </AimType>
                </CustomLink>
            </center>
        </BlackCards>
    )
}
export const ImgPlusAimType = styled.img`
margin-left:8%;`

export default PlusAimType