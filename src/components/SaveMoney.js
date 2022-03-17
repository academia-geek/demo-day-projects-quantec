import React from 'react'
import { CustomLink } from './Aim'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'

const SaveMoney = () => {
    return (
        <BlackCards className="debts">
            <CustomLink to={"/aim"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <H2>Comienza a ahorrar</H2>
            <H3>Con disipllina, dedicación, atención adecuada a tu presupuesto y el uso de Quantect, ¡pronto podrás ahorrar mucho más dinero de lo que alguna vez imaginaste!</H3>
            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647532695/proyecto-final/undraw_vault_re_s4my_1_vkhyit.svg" alt="" />
            <CustomButtonCards> <CustomLink to={"/register"}> Vamonos!</CustomLink></CustomButtonCards>
        </BlackCards>
    )
}

export default SaveMoney