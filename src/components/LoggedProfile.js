import React from 'react'
import {RiLogoutCircleLine} from 'react-icons/ri'
import { Contenedor, ImageProfile, Logout, Nombre } from '../styled/LoggedProfileStyled'

const LoggedProfile = () => {
    return (
        <Contenedor>
            <div>
                <ImageProfile src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1644609218/images/avatar1_zp8pvi.png'/>
                <Nombre>nombre</Nombre>
                <Logout><RiLogoutCircleLine/> Cerrar Sesión</Logout>
            </div>
        </Contenedor>

        //foto circular al centro
        //nombre
        //Logout
        
    )
}

export default LoggedProfile