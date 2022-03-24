import React from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutAsyn } from '../redux/actions/loginAction'
import { Contenedor, ImageProfile, Nombre } from '../styled/LoggedProfileStyled'

const LoggedProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAsyn())
        navigate('/')
    }
    return (
        <Contenedor>


            <center>
                <ImageProfile src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1644609218/images/avatar1_zp8pvi.png' />

                <Nombre>nombre</Nombre>
                <button 
                    onClick={handleLogout}
                    style={{ color: "#AA75FF" }}>
                    <RiLogoutCircleLine />
                    Cerrar Sesión
                </button>
            </center>

        </Contenedor>



    )
}

export default LoggedProfile