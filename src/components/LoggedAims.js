import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivInfoAims, H5 } from '../styled/LoggedHome'
import InfoAimsNone from './InfoAimsNone'
import NewAims from './NewAims'
import styled from "styled-components"

const LoggedAims = () => {

    const [show, setShow] = useState(true);
    console.log(show);
    useEffect(() => {

    }, [])


    return (
        <Container>

            <ContainerP>
                <H5>Mis objetivos </H5>
                <H6>¡Así van tus objetivos, con esfuerzo los lograrás, ánimo!</H6>

                <center>
                    <DivInfoAims>
                        {
                            show ? <NewAims /> : <InfoAimsNone />
                        }
                    </DivInfoAims>

                    <Link to={"/plusaimtype"}><AddAimButton className='text-light mt-5'>Agregar un objetivo</AddAimButton>
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
margin-bottom:32px;
margin-left:25px;

/* or 200% */
letter-spacing: -0.3px;

color: #8D8A8A;

`
const AddAimButton = styled.button`
border:none;
background-color:rgba(255,255,255,0);
color: #3C1280 !important;
`

export default LoggedAims