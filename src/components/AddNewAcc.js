import React from 'react'
import { BlackCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { RegisterForm } from './RegisterAccount'
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
            <H3>Tipo de cuenta:</H3>
            <AccountType >
                <option value="Nómina">Nómina</option>
                <option value="Ahorros">Ahorros</option>
                <option value="Nequi">Corriente</option>
            </AccountType>
            <H3>Con un monto de:</H3>
            <RegisterForm>
                <input type="value" placeholder='Escribe el monto' />
            </RegisterForm>
            <center>


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