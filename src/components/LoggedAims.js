import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivAims, H5 } from '../styled/LoggedHome'
import NewAims from './NewAims'

import SaldoCuentas from './SaldoCuentas'

const LoggedAims = () => {
    return (
        <Container>
            <SaldoCuentas />
            <ContainerP>
                <H5>Mis cuentas </H5>
                <center>
                    <h2>Aun no tienes ninguna cuenta</h2>
                    <DivAims>
                        <NewAims />
                    </DivAims>

                    <Link to={"/addnewaim"}><CustomButton className='text-light mt-5'><b>Agregar una cuenta</b></CustomButton>
                    </Link>
                </center>
            </ContainerP>
        </Container>

    )
}

export default LoggedAims