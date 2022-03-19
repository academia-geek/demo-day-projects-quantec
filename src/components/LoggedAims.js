import React from 'react'
import { Container, ContainerP, CustomButton, DivAims, H5 } from '../styled/LoggedHome'
import NewAims from './NewAims'

import SaldoCuentas from './SaldoCuentas'

const LoggedAims = () => {
    return (        
        <Container>
            <SaldoCuentas/>
            <ContainerP>
                <H5>Mis cuentas </H5>
                <div>
                    <h2>Aun no tienes ninguna cuenta</h2>
                    <DivAims>
                        <NewAims/>  
                    </DivAims>                  
                </div>
                <CustomButton className='text-light mt-5'><b>Agregar una cuenta</b></CustomButton>
            </ContainerP>
        </Container>
        
    )
}

export default LoggedAims