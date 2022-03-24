import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivAims, H5 } from '../styled/LoggedHome'
import NewAims from './NewAims'


const LoggedAims = () => {
    return (
        <Container>

            <ContainerP>
                <H5>Mis objetivos </H5>
                <center>
                    <h2>Aun no tienes ningun objetivo</h2>
                    <DivAims>
                        <NewAims />
                    </DivAims>

                    <Link to={"/addnewaim"}><CustomButton className='text-light mt-5'><b>Agregar un objetivo</b></CustomButton>
                    </Link>
                </center>
            </ContainerP>
        </Container>

    )
}

export default LoggedAims