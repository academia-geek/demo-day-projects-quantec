import React from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { Contenedor, ImageProfile, Logout, Nombre } from '../styled/LoggedProfileStyled'
import LabelBottomNavigation from './LabelBottomNavigation'
=======
import { Contenedor, ImageProfile, Logout, Nombre } from '../styled/LoggedProfileStyled'
import LabelBottomNavigation from './LabelBottomNavigation'
import SaldoCuentas from './SaldoCuentas'
>>>>>>> ba57a0b1547f3986e1601f0c8624ed3577530489

const LoggedProfile = () => {
    return (
        <Contenedor>
<<<<<<< HEAD


            <center>
                <ImageProfile src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1644609218/images/avatar1_zp8pvi.png' />

                <Nombre>nombre</Nombre>
                <Link to={"/"}
                    style={{ color: "#AA75FF" }}>
                    <RiLogoutCircleLine />
                    Cerrar Sesión
                </Link>
            </center>
            <LabelBottomNavigation />
        </Contenedor>



=======
            <div>

                <ImageProfile src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1644609218/images/avatar1_zp8pvi.png' />
                <Nombre>nombre</Nombre>
                <Logout><RiLogoutCircleLine /> Cerrar Sesión</Logout>
            </div>
            <LabelBottomNavigation />
        </Contenedor>

        //foto circular al centro
        //nombre
        //Logout

>>>>>>> ba57a0b1547f3986e1601f0c8624ed3577530489
    )
}

export default LoggedProfile