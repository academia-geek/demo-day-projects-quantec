import React from 'react'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { RegisterForm } from './RegisterAccount'
import "../styles/addnewacc.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AddNewAcc = () => {




    return (

        <BlackCards>

            <H2>Nueva Cuenta</H2>
            <H4>Completa la siguiente información para poder conocerte tu nueva cuenta</H4>
            <H3>Tengo una cuenta con el banco:</H3>
            <AccountType >
                <option value="Bancolombia">Bancolombia</option>
                <option value="Davivienda">Davivienda</option>
                <option value="Nequi">Nequi</option>
                <option value="BBVA">BBVA</option>
            </AccountType>
            <H3>Con un monto de:</H3>
            <RegisterForm>
                <input type="value" placeholder='Escribe el monto' />
            </RegisterForm>
            <center>
                <CustomButtonCards className="button" onClick={() => { Swal.fire('<img class="checked" src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647621171/proyecto-final/Group_349_v0ofdt.svg" alt=""/><h3>Operación exitosa<h3><h4>se ha añadido una nueva cuenta a tu portafolio<h4>') }}>
                    Guardar
                </CustomButtonCards>

            </center>


        </BlackCards>

    )
}
export const H4 = styled.h4`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;

/* or 171% */
letter-spacing: -0.3px;

color: #FFFFFF;
margin-left:7%
`
export const AccountType = styled.select`
border:none;
    margin-bottom:4%;
    margin-left:8%;
    border-bottom:1px  solid gray;
    background-color:#1C1C1E;
    color:rgba(255,255,255,0.8);
    text-align:left;`

export default AddNewAcc