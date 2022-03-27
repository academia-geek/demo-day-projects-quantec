import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivAims, DivInfoAims, H5 } from '../styled/LoggedHome'
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
                <H6>Así van tus objetivos</H6>

                <center>
                    <DivInfoAims>
                        {
                            show ? <NewAims/> : <InfoAimsNone/>
                        }                        
                    </DivInfoAims>                   

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