import React from 'react'
import { CustomLink } from './Aim'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'

const Invest = () => {
    return (
        <BlackCards className="debts">
            <CustomLink to={"/aim"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <H2>Comienza a invertir</H2>
            <H3>Cómo compenzar a invertir es una pregunta muy importante si realmente deseas cambiar tu vida, es hora de dejar de lado las excusas y hacer realidad tus sueños.</H3>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647532699/proyecto-final/undraw_finance_re_gnv2_1_qwjoih.svg" alt="" />
            <CustomButtonCards> <CustomLink to={"/register"}> Vamonos!</CustomLink></CustomButtonCards>
        </BlackCards>
    )
}

export default Invest