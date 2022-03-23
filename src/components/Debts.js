import React from 'react'
import { CustomLink } from './Aim'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'
import "../styles/blackCards.css"
import { Img } from './WelcomeAccount'
const Debts = () => {
    return (
        <BlackCards className="debts">
            <H2>Salir de una deuda</H2>
            <H3>Si estás buscando salir de una deuda tienes que saber que no estás solo en esa misión. Salir requiere un compromiso y un camino de actitud sobre tus finanzas pero no es imposible.</H3>
            <Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647898869/proyecto-final/undraw_printing_invoices_-5-r4r_1_wh6li3.svg" alt="" />

            <center> <CustomLink to={"/register"}><CustomButtonCards>
                Vamonos!
            </CustomButtonCards></CustomLink></center>

        </BlackCards>
    )
}

export default Debts    