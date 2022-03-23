import React from 'react'
import { Link } from 'react-router-dom'

import { BlackCards, CustomButtonCards, CustomLink, H2, H3 } from './Welcome'
import { Img } from './WelcomeAccount'

const PlusAim = () => {
    return (
        <BlackCards>
            <H2>
                Objetivos
            </H2>
            <H3>
                En Quantect creermos que por medio de objetivos puedes alcanzar todas tus metas de corto, meduano y largo plazo.
                <br />
                ¿Por qué no empiezas por contarnos que objetivo te gustaría alcanzar con tus ahorros?
            </H3>
            <center><Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647918165/proyecto-final/emojione-monotone_sports-medal_xw813v.svg" alt=""></Img>
                <Link to={"/plusaimtype"}><CustomButtonCards>Añadir un objetivo</CustomButtonCards></Link>
                <br />
                <CustomLink to={"/"}>No gracias</CustomLink></center>
        </BlackCards>
    )
}

export default PlusAim