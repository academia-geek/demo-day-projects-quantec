import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { RegisterForm } from './RegisterAccount'
import { BlackCards, CustomButtonCards, CustomLink, H2, H3 } from './Welcome'

const YourCustomAim = () => {
    return (
        <BlackCards className="password" >
            <CustomLink to={"/registerAcc"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <RegisterForm style={{ marginTop: '35px', marginLeft: "0" }}>
                <H2 >Personaliza tu objetivo</H2>

                <H3>Mi objetivo va desde:</H3>

                <InputAim type="date" placeholder='Fecha inicial' />
                <H3>Hasta:</H3>
                <InputAim type="date" placeholder='Fecha final' />
                <H3>Cada:</H3>
                <SelectDiv>
                    <Select >
                        <option value="Días">Días</option>
                        <option value="Semanas">Semanas</option>
                        <option value="Meses">Meses</option>
                        <option value="Años">Años</option>
                    </Select>


                    <InputAim type="value" placeholder='valor' />
                </SelectDiv>

            </RegisterForm>
            <Link to={"/loggedaims"} style={{ color: "inherit", textDecoration: "none" }}>
                <center>
                    <CustomButtonCards>
                        Continuar
                    </CustomButtonCards>
                </center>
            </Link>
        </BlackCards>
    )
}
const InputAim = styled.input`
margin-left: 5%;
`
const Select = styled.select`
background-color:#1c1c1e;
color:white;
margin-left: 5%;
border:none;
width:100px;
`
const SelectDiv = styled.div`
display:flex;
select{
    width:70px;
};
input{
    width:100px;
}
`

export default YourCustomAim