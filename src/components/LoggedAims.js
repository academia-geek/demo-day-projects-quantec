import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivAims, H5 } from '../styled/LoggedHome'
import NewAims from './NewAims'
import styled from "styled-components"

const LoggedAims = () => {
    return (
        <Container>

            <ContainerP>
                <H5>Mis objetivos </H5>
                <H6>Así van tus objetivos</H6>

                <center>
                    <h2>Aun no tienes ningun objetivo</h2>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648132063/proyecto-final/Pig_2_ywta35.svg" alt="" />
                    <DivAims>
                        <NewAims />
                    </DivAims>

                    <Link to={"/plusaimtype"}><CustomButton className='text-light mt-5'><b>Agregar un objetivo</b></CustomButton>
                    </Link>
                </center>
            </ContainerP>
        </Container>

    )
}
const H6 = styled.h6`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;

/* or 200% */
letter-spacing: -0.3px;

color: #8D8A8A;

`

export default LoggedAims