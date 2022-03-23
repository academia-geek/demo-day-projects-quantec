import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> ba57a0b1547f3986e1601f0c8624ed3577530489
import { Container, ContainerP, CustomButton, DivAims, H5 } from '../styled/LoggedHome'
import NewAims from './NewAims'

import SaldoCuentas from './SaldoCuentas'

const LoggedAims = () => {
    return (
        <Container>
            <SaldoCuentas />
            <ContainerP>
                <H5>Mis cuentas </H5>
<<<<<<< HEAD
                <center>
=======
                <div>
>>>>>>> ba57a0b1547f3986e1601f0c8624ed3577530489
                    <h2>Aun no tienes ninguna cuenta</h2>
                    <DivAims>
                        <NewAims />
                    </DivAims>
<<<<<<< HEAD

                    <Link to={"/addnewaim"}><CustomButton className='text-light mt-5'><b>Agregar una cuenta</b></CustomButton>
                    </Link>
                </center>
=======
                </div>
                <CustomButton className='text-light mt-5'><b>Agregar una cuenta</b></CustomButton>
>>>>>>> ba57a0b1547f3986e1601f0c8624ed3577530489
            </ContainerP>
        </Container>

    )
}

export default LoggedAims