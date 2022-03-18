import React from 'react'
import { Link } from 'react-router-dom'
import { BlackCards, CustomButtonCards, CustomLink, H2, H3 } from './Welcome'
import { Img } from './WelcomeAccount'

const AccDesc = () => {
    return (
        <BlackCards>
            <H2>
                Cuentas
            </H2>
            <H3>
                Una cuenta es donde guardamos nuestro dinero, como en las cuentas bancarias.
                <br />
                ¿Por qué no empiezas por contarnos cuanto tienes disponible este mes en tu cuenta bancaria?
            </H3>
            <center><Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647614498/proyecto-final/clarity_bank-outline-badged_klapq4.png" alt=""></Img>
                <Link to={"/addnewacc"}><CustomButtonCards>Añadir una cuenta</CustomButtonCards></Link>
                <br />
                <CustomLink to={"/"}>No gracias</CustomLink></center>
        </BlackCards>
    )
}

export default AccDesc