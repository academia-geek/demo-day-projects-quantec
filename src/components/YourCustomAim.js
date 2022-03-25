import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from "styled-components"
import { RegisterForm } from './RegisterAccount'
import { BlackCards, CustomButtonCards, CustomLink, H2, H3 } from './Welcome'

const YourCustomAim = () => {

    const location = useLocation();
    const {aim} = location.state
    console.log(aim);

    

    return (
        <BlackCards className="password" >
            <CustomLink to={"/plusaimtype"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <RegisterForm style={{ marginTop: '35px', marginLeft: "0" }}>
                <H2 >Personaliza tu objetivo</H2>

                <H3>Mi objetivo va desde:</H3>

                <InputAim 
                    type="date" 
                    placeholder='Fecha inicial'
                    name='date1'
                />
                <H3>Hasta:</H3>
                <InputAim 
                    type="date" 
                    placeholder='Fecha final'
                    name='date2'
                />
                <SelectDiv>
                    <H3>Quiero ahorrar:</H3>

                    <InputAim 
                        type="value" 
                        placeholder='' 
                        name='quantity'
                    />
                </SelectDiv>
                <H3>Y quiero alcanzarlo ahorrando cada:</H3>
                <SelectDiv>
                    <InputAim 
                        type="value" 
                        placeholder='' 
                        name='time'
                    />
                    <H3>días</H3>
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
const SelectDiv = styled.div`
display:flex;
align-items: center;
input{
    width:100px;
    height:30px;
    
}
`

export default YourCustomAim