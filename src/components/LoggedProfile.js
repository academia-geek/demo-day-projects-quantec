import React from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Contenedor, ImageProfile, Logout, Nombre } from '../styled/LoggedProfileStyled'
import LabelBottomNavigation from './LabelBottomNavigation'

const LoggedProfile = () => {
    return (
        <Contenedor>


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



    )
}

export default LoggedProfile