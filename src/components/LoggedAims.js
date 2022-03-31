import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivInfoAims, H5 } from '../styled/LoggedHome'
import InfoAimsNone from './InfoAimsNone'
import NewAims from './NewAims'
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { getAuth } from 'firebase/auth'
import { listAimsAsyn } from '../redux/actions/aimsAction'


const LoggedAims = () => {

    const dispatch = useDispatch();
    const { aims } = useSelector(store => store.aims)


    const auth = getAuth()
    const user = auth.currentUser;

    useEffect(() => {
        dispatch(listAimsAsyn(user.displayName))
    }, [])
      
    


    return (
        <Container>

            <ContainerP>
                <H5>Mis objetivos </H5>
                <H6>¡Así van tus objetivos, con esfuerzo los lograrás, ánimo!</H6>

                <center>
                    <DivInfoAims>
                        {
                            aims.length > 0 ? <NewAims /> : <InfoAimsNone />
                        }
                    </DivInfoAims>

                    <Link to={"/plusaimtype"}>
                        <CustomButton style={{ marginTop: "0" }}
                            className='text-light mt-5'>
                            <b>Agregar un objetivo</b>
                        </CustomButton>
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

export default LoggedAims