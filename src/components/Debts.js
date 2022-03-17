import React from 'react'
import { CustomLink } from './Aim'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'
import "../styles/blackCards.css"
const Debts = () => {
    return (
        <BlackCards className="debts">
            <CustomLink to={"/aim"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <H2>Salir de una deuda</H2>
            <H3>Si estás buscando salir de una deuda tienes que saber que no estás solo en esa misión. Salir requiere un compromiso y un camino de actitud sobre tus finanzas pero no es imposible.</H3>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647532695/proyecto-final/undraw_vault_re_s4my_1_vkhyit.svg" alt="" />

            <CustomButtonCards>
                <CustomLink to={"/register"}> Vamonos!</CustomLink>
            </CustomButtonCards>

        </BlackCards>
    )
}

export default Debts    